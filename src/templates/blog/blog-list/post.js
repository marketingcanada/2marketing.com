import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import { getFormattedDate } from '../../../utils/functions';

const Post = ( { post } ) => {
    //console.log(post); 
	if ( isEmpty( post ) ) {
		return null;
	}

	return (
        <Card className="mt-5 border-top-0 border-left-0 border-right-0 border-bottom-1">
            <Row>
                { ! isEmpty( post.featuredImage ) ? (
                    <Col md="4" className="p-4">
                        <Img fluid={post.featuredImage.node.localFile.childImageSharp.fluid} alt={ post?.altText || post.title } />
                    </Col>
                ) : null }
                <Col xs="12" sm="7" md="8" lg="8">
                    <div className="card-body">
                            <ul className="post-category">
                                {post.terms.nodes.map(node =>(
                                    node.nodeType === "Category" ? (
                                    <li key={node.id}><small className="text-muted">{node.name}</small></li>
                                    ) : null
                                ))}
                            </ul>
                            <h2 className="card-title"><Link to={ post?.uri } >{post?.title}</Link></h2>
                        <div className="card-text mb-2">
                            { post.date ? (
                                <small className="text-muted">
                                    { getFormattedDate( post.date ) }
                                </small>
                            ) : null }
                        </div>

                        { post.excerpt ? (
                            <div className="card-text" dangerouslySetInnerHTML={ { __html: post.excerpt } }/>
                        ) : null }

                        <div className="card-text blog-read-me">
                            <Link
                                className="btn btn-link"
                                to={ post.uri }
                            > 
                                Read More ≫
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
	)
}

export default Post;