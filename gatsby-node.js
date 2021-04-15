const path = require('path');
const React = require('react');
const { createRemoteFileNode } = require('gatsby-source-filesystem');
const { fluid } = require('gatsby-plugin-sharp');

const Img = require(`gatsby-image`);

const createAllPages = require('./create-pages/pages');
const createBlogPage = require('./create-pages/blog');

// Create all pages.
exports.createPages = async ({ actions, graphql }) => {
    await createAllPages({ actions, graphql });
    await createBlogPage({ actions, graphql });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '~': path.resolve(__dirname, '../../node_modules'),
            },
        },
    });
};

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId, reporter }) => {
    const { createNode, deletePage, createPage } = actions;

    if (node.internal.type === 'SitePage') {
        if (node.context && node.context.post) {
            if (!node.context.modified) {
                let elementorData = null;
                let imgType = 'WEBP';
                const imgSize = 2000;

                if (node.context.post.elementorData) {
                    elementorData = JSON.parse(node.context.post.elementorData);
                }
                deletePage(node);

                async function downloadImages() {
                    if (elementorData != null) {
                        imgType = 'WEBP';
                        for (const row of elementorData) {
                            if (row.settings && row.settings.background_image) {
                                const fileNode = await createRemoteFileNode({
                                    url: row.settings.background_image.url,
                                    parentNodeId: node.id,
                                    store,
                                    cache,
                                    createNode,
                                    createNodeId: id =>
                                        `opengraphImage-images-${row.settings.background_image.id}`,
                                });
                                const generatedImage = await generateImage({
                                    fileNode,
                                    cache,
                                    reporter,
                                });
                                row.settings.background_image.url = generatedImage;
                            }
                            if (row.settings && row.settings.background_overlay_image) {
                                const fileNode = await createRemoteFileNode({
                                    url: row.settings.background_overlay_image.url,
                                    parentNodeId: node.id,
                                    store,
                                    cache,
                                    createNode,
                                    createNodeId: id =>
                                        `opengraphImage-images-${row.settings.background_overlay_image.id}`,
                                });
                                const generatedImage = await generateImage({
                                    fileNode,
                                    cache,
                                    reporter,
                                });
                                row.settings.background_overlay_image.url = generatedImage;
                            }
                            for (const column of row.elements) {
                                for (const widget of column.elements) {
                                    if (widget.widgetType === 'image') {
                                        const fileNode = await createRemoteFileNode({
                                            url: widget.settings.image.url,
                                            parentNodeId: node.id,
                                            store,
                                            cache,
                                            createNode,
                                            createNodeId: id =>
                                                `elementor-images-${widget.settings.image.id}`,
                                        });
                                        const generatedImage = await generateImage({
                                            fileNode,
                                            cache,
                                            reporter,
                                        });
                                        widget.settings.image.fluid = generatedImage;
                                    }
                                }
                            }
                            // Inner section widget images
                            for (const column of row.elements) {
                                for (const widget of column.elements) {
                                    if (widget.elType === 'section') {
                                        for (const column of widget.elements) {
                                            for (const widget of column.elements) {
                                                if (widget.widgetType === 'image') {
                                                    const fileNode = await createRemoteFileNode({
                                                        url: widget.settings.image.url,
                                                        parentNodeId: node.id,
                                                        store,
                                                        cache,
                                                        createNode,
                                                        createNodeId: id =>
                                                            `elementor-images-${widget.settings.image.id}`,
                                                    });
                                                    const generatedImage = await generateImage({
                                                        fileNode,
                                                        cache,
                                                        reporter,
                                                    });
                                                    widget.settings.image.fluid = generatedImage;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            // home SLider Images
                            for (const column of row.elements) {
                                for (const widget of column.elements) {
                                    if (widget.widgetType === 'ucaddon_home_slider') {
                                        for (const item of widget.settings.uc_items) {
                                            const fileNode = await createRemoteFileNode({
                                                url: item.slider_image.url,
                                                parentNodeId: node.id,
                                                store,
                                                cache,
                                                createNode,
                                                createNodeId: id =>
                                                    `elementor-images-${item.slider_image.id}`,
                                            });
                                            const generatedImage = await generateImage({
                                                fileNode,
                                                cache,
                                                reporter,
                                            });
                                            item.slider_image.fluid = generatedImage;
                                        }
                                    }
                                }
                            }
                            // inner SLider Images
                            for (const column of row.elements) {
                                for (const widget of column.elements) {
                                    if (widget.widgetType === 'ucaddon_inner_slider') {
                                        for (const item of widget.settings.uc_items) {
                                            const fileNode = await createRemoteFileNode({
                                                url: item.slider_image.url,
                                                parentNodeId: node.id,
                                                store,
                                                cache,
                                                createNode,
                                                createNodeId: id =>
                                                    `elementor-images-${item.slider_image.id}`,
                                            });
                                            const generatedImage = await generateImage({
                                                fileNode,
                                                cache,
                                                reporter,
                                            });
                                            item.slider_image.fluid = generatedImage;
                                        }
                                    }
                                }
                            }
                            // home tab SLider Images
                            for (const column of row.elements) {
                                for (const widget of column.elements) {
                                    if (widget.widgetType === 'ucaddon_solutions_slider') {
                                        for (const item of widget.settings.uc_items) {
                                            const fileNode = await createRemoteFileNode({
                                                url: item.slider_image.url,
                                                parentNodeId: node.id,
                                                store,
                                                cache,
                                                createNode,
                                                createNodeId: id =>
                                                    `elementor-images-${item.slider_image.id}`,
                                            });
                                            const generatedImage = await generateImage({
                                                fileNode,
                                                cache,
                                                reporter,
                                            });
                                            item.slider_image.fluid = generatedImage;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // ucaddon_solutions_slider
                const generateImage = async function ({ fileNode, cache, reporter }) {
                    if (!fileNode || !fileNode.absolutePath) return;

                    const fluidResult = await fluid({
                        file: fileNode,
                        args: {
                            withWebp: true,
                            maxWidth: imgSize,
                            toFormat: imgType,
                            tracedSVG: false,
                        },
                        reporter,
                        cache,
                    });
                    return fluidResult;
                };

                await downloadImages().then(fileNode => {
                    createPage({
                        ...node,
                        context: {
                            ...node.context,
                            modifiedData: elementorData,
                            modified: true,
                        },
                    });
                });
            }
        }
    }
};
