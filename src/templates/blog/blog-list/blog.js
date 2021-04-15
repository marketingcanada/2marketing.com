import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Post from './post';

const Section = styled.div``;

const Blog = ({ pageContext }) => {
    // console.log(pageContext);

    const { group, index, first, last, pathPrefix, post } = pageContext;

    if (isEmpty(group)) {
        return null;
    }

    const previousUrl =
        index - 1 === 1 ? `/${pathPrefix}` : `/${pathPrefix}/${(index - 1).toString()}`;
    const nextUrl = `/${pathPrefix}/${(index + 1).toString()}`;

    return (
        <Section>
            <Container>
                <h1>{post?.wpPage?.title}</h1>
                {group.map(node => (
                    <Post key={node.id} post={node} />
                ))}

                <div className="blog__page-navigation mt-5">
                    {!first ? <Link to={previousUrl}>≪ Previous Page</Link> : null}
                    {!last ? <Link to={nextUrl}>Next Page ≫</Link> : null}
                </div>
            </Container>
        </Section>
    );
};
export default Blog;
