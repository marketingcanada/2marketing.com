import Img from 'gatsby-image';
import { isEmpty } from 'lodash';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Layout from '../components/layout';
import { getFormattedDate } from '../utils/functions';

const SingleTemplate = ({ pageContext }) => {
    // console.log(pageContext);
    const { post } = pageContext;
    // console.log(post);
    return (
        <Layout seo={post.seo}>
            <Container>
                <Row>
                    {!isEmpty(post.featuredImage) ? (
                        <Col sm="12" md="12" className="p-4">
                            <Img
                                style={{ width: '100%', height: '100%' }}
                                fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
                                alt={post?.altText || post.title}
                            />
                        </Col>
                    ) : null}
                    <Col xs="12" sm="12" md="12" lg="12">
                        <div className="card-body">
                            <ul className="post-category text-center">
                                {post.terms?.nodes.map(node =>
                                    node.nodeType === 'Category' ? (
                                        <li key={node.id}>
                                            <small className="text-muted">{node.name}</small>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                            <h1 className="card-title text-center">{post.title}</h1>
                            <div className="card-text text-center mb-2">
                                <small className="text-muted">{getFormattedDate(post.date)}</small>
                            </div>

                            {post.content ? (
                                <div
                                    className="card-text"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default SingleTemplate;
