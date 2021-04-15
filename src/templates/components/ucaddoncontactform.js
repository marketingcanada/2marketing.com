import React, { useState } from 'react';
import { Col, Form, Input, Row } from 'reactstrap';
import styled from 'styled-components';

const FormWidget = styled.div`
    max-width: 550px;
    & .form-input-container {
        padding: 8px;
    }
    & .spinner {
        border: 0.1rem solid grey;
        width: 1rem;
        height: 1rem;
        border-top-color: white;
        border-left-color: white;
        border-radius: 50%;
        animation: spinner 1s linear 0s infinite;
    }
    @keyframes spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

function encode(data) {
    return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
}

const Ucaddoncontactform = settings => {
    // console.log({ settings });

    const [state, setState] = useState({});
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(false);
    const [statusIcon, setStatusIcon] = useState('fas fa-check-circle');
    const [spinner, setSpinner] = useState(false);

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    // eslint-disable-next-line no-shadow
    function handleStatus(status, message, icon) {
        setSpinner(true);
        setStatus(false);
        setMessage('');
        setStatusIcon('');
        setTimeout(() => {
            setSpinner(false);
            setStatus(status);
            setMessage(message);
            setStatusIcon(icon);
        }, 1000);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() =>
                handleStatus(true, 'Success, your message has been sent!', 'fas fa-check-circle')
            )
            .catch(error => handleStatus(true, error, 'fas fa-exclamation-circle'));
    };

    return (
        <FormWidget>
            <Form name="contact v4" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact v4" />
                <Row>
                    <Col className="form-input-container" md={6}>
                        <Input
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="form-control"
                            placeholder="First name"
                            required
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="form-input-container" md={6}>
                        <Input
                            type="text"
                            name="last-name"
                            id="last-name"
                            className="form-control"
                            placeholder="Last name"
                            required
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="form-input-container" md={6}>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="form-input-container" md={6}>
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Phone"
                            required
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="form-input-container" md={6}>
                        <Input
                            type="text"
                            name="company"
                            id="company"
                            className="form-control"
                            placeholder="Company Name"
                            required
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="form-input-container" md={6}>
                        <Input
                            id="shipments"
                            name="monthly-shipment"
                            type="select"
                            className="form-control"
                            required
                            onChange={handleChange}
                        >
                            <option defaultValue>Monthly Shipments</option>
                            <option>1 - 200</option>
                            <option>201 - 500</option>
                            <option>501 - 1000</option>
                            <option>1001 - 5000</option>
                            <option>5001 - 10000</option>
                            <option>10000+</option>
                            <option>New store, I&apos;m not currently shipping.</option>
                        </Input>
                    </Col>
                    <Col className="form-input-container" md={12}>
                        <Input
                            type="textarea"
                            className="form-control"
                            name="comment"
                            id="comment"
                            rows="3"
                            placeholder="Comment"
                            onChange={handleChange}
                        />
                    </Col>
                    {spinner && (
                        <Col className="form-input-container" md={12}>
                            <div className="spinner" />
                        </Col>
                    )}
                    {status && (
                        <Col className="form-input-container" md={12}>
                            <div className="contact-status alert alert-light" role="alert">
                                <i className={statusIcon} /> {message}
                            </div>
                        </Col>
                    )}
                    <Col className="form-input-container" md={12}>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </Col>
                </Row>
            </Form>
        </FormWidget>
    );
};

export default Ucaddoncontactform;
