//const path = require("path");
const { slash } = require( `gatsby-core-utils` );
const Template = require.resolve(`../src/templates/Elementor.js`);

module.exports = ({ graphql, actions: { createPage } }) =>
    new Promise((resolve, reject) => {
        graphql(`
        query MyQuery {
            allWpPage(limit: 5000) {
              nodes {
                id
                uri
                title
                slug
                elementorData
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
        `).then((result) => {
          result.data.allWpPage.nodes.map((post) => {
              if(post.slug === 'blog') return null
              createPage({
                  path: post.uri,
                  component: slash(Template),
                  context: {
                      post
                  },
              });
          });
          resolve();
      });
  });
