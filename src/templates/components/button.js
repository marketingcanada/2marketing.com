import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.a`
    text-align: ${props => (props.settings.align ? props.settings.align : '')};
    &${props => (props.settings.custom_css ? props.settings.custom_css : '')}
`;

const Button = settings => {
    const { text, link, size } = settings;
    // console.log(text);
    return (
        <ButtonElement
            // eslint-disable-next-line react/destructuring-assignment
            className={`btn-${size} ${settings?._css_classes}`}
            settings={settings}
            href={link?.url || '#'}
            role="button"
        >
            {text}
        </ButtonElement>
    );
};
export default Button;
