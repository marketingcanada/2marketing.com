// import config from './data/SiteConfig';

require('dotenv').config();

const siteTitle = process.env.GATSBY_SITE_TITLE;
const siteUrl = process.env.GATSBY_SITE_URL;
const siteGraphql = `${process.env.GATSBY_SITE_ADMIN_URL}/graphql`;
const googleAnalytics = process.env.GATSBY_GOOGLE_ANALYTICS;

module.exports = {
    siteMetadata: {
        title: siteTitle,
        description: '',
        author: `@ninjaMahabub`,
        siteUrl,
    },
    flags: {
        DEV_SSR: true,
    },
    plugins: [
        // Simple config, passing URL
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                sitemapSize: 5000,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Caveat'],
                },
                custom: {
                    families: [
                        'Avenir Medium, Avenir Heavy, Avenir Book, Avenir Black, Avenir Next Rounded Pro Demi',
                    ],
                    urls: ['/fonts/typography.css'],
                },
            },
        },
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: siteGraphql,
                useACF: true,
                html: {
                    useGatsbyImage: true,
                    createStaticFiles: true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: false,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: googleAnalytics,
            },
        },
    ],
};
