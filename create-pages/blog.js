// const path = require("path");
const { slash } = require(`gatsby-core-utils`);
const createPaginatedPages = require('gatsby-paginate');

const BlogTemplate = require.resolve(`../src/templates/blog/index.js`);
const ElementorTemplate = require.resolve(`../src/templates/Elementor.js`);
const SingleTemplate = require.resolve(`../src/templates/Single.js`);

module.exports = ({ graphql, actions: { createPage } }) =>
    new Promise(resolve => {
        graphql(`
            query MyQuery {
                wpPage(uri: { eq: "/blog/" }) {
                    uri
                    slug
                    title
                    seo {
                        canonical
                        focuskw
                        metaDesc
                        metaKeywords
                        metaRobotsNofollow
                        metaRobotsNoindex
                        opengraphAuthor
                        opengraphDescription
                        opengraphImage {
                            sourceUrl
                        }
                        opengraphModifiedTime
                        opengraphPublishedTime
                        opengraphPublisher
                        opengraphSiteName
                        opengraphTitle
                        opengraphType
                        opengraphUrl
                        title
                        twitterDescription
                        twitterImage {
                            sourceUrl
                        }
                    }
                }
                allWpPost(limit: 5000) {
                    nodes {
                        id
                        databaseId
                        bodyClasses
                        uri
                        slug
                        title
                        excerpt
                        content
                        elementorData
                        date
                        featuredImage {
                            node {
                                altText
                                sourceUrl
                                localFile {
                                    childImageSharp {
                                        fluid {
                                            aspectRatio
                                            base64
                                            sizes
                                            src
                                            srcSet
                                        }
                                    }
                                }
                            }
                        }
                        terms {
                            nodes {
                                name
                                id
                                uri
                                slug
                                nodeType
                            }
                        }
                        seo {
                            canonical
                            focuskw
                            metaDesc
                            metaKeywords
                            metaRobotsNofollow
                            metaRobotsNoindex
                            opengraphAuthor
                            opengraphDescription
                            opengraphImage {
                                sourceUrl
                            }
                            opengraphModifiedTime
                            opengraphPublishedTime
                            opengraphPublisher
                            opengraphSiteName
                            opengraphTitle
                            opengraphType
                            opengraphUrl
                            title
                            twitterDescription
                            twitterImage {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `).then(result => {
            createPaginatedPages({
                edges: result.data.allWpPost.nodes,
                createPage,
                pageTemplate: BlogTemplate,
                pageLength: 5, // This is optional and defaults to 10 if not used
                pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
                context: {
                    post: result.data,
                }, // This is optional and defaults to an empty object if not used
            });
            result.data.allWpPost.nodes.map(post => {
                const Template =
                    undefined !== post.elementorData && post.elementorData !== null
                        ? ElementorTemplate
                        : SingleTemplate;
                return createPage({
                    path: post.uri,
                    component: slash(Template),
                    context: {
                        post,
                    },
                });
            });
            resolve();
        });
    });
