import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Layout from '../components/layout';
import * as components from './components';
import { InnerSection, Section } from './components';

function ucwords(text) {
    let str = text.toLowerCase();
    str = str.replace(/-/g, '');
    str = str.replace(/_/g, '');
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, s => s.toUpperCase());
}

function bsCOLgen(settings) {
    const result = Math.round(12 * (settings / 100));
    return result;
}

const ElementorTemplate = ({ pageContext }) => {
    const { modifiedData } = pageContext;

    const elementorData = modifiedData;
    console.log(pageContext);
    const Page = elementorData.map(row => (
        // console.log(row.settings)

        <Section key={row.id} settings={row.settings} className={row.settings?.css_classes || null}>
            <Container
                className={row.settings.layout === 'full_width' ? 'px-0' : ''}
                fluid={row.settings.layout === 'full_width' ? 'xl' : ''}
            >
                <Row className="w-100 px-0 mx-0">
                    {row.elements.map(column => {
                        // console.log(column.settings);
                        const ColStyle = {
                            display: column.settings.content_position ? 'flex' : '',
                            flexWrap: column.settings.content_position ? 'wrap' : '',
                            alignContent: column?.settings?.content_position || '',
                            alignItems: column?.settings?.content_position || '',
                        };
                        return (
                            <Col
                                className={column?.settings?.css_classes || ''}
                                style={ColStyle}
                                key={column.id}
                                xs={bsCOLgen(column?.settings?._inline_size_mobile || 100)}
                                sm={bsCOLgen(column?.settings?._inline_size_tablet || 100)}
                                md={bsCOLgen(
                                    column?.settings?._inline_size || column?.settings?._column_size
                                )}
                            >
                                {column.elements.map(widget => {
                                    const elTypeSection = widget.elType === 'section';
                                    // console.log(widget);
                                    if (elTypeSection) {
                                        return (
                                            <InnerSection
                                                key={widget.id}
                                                InnerSectionData={widget}
                                            />
                                        );
                                    }
                                    if (!elTypeSection) {
                                        return React.createElement(
                                            components[ucwords(widget.widgetType)],
                                            {
                                                ...widget.settings,
                                                key: widget.id,
                                            }
                                        );
                                    }
                                    return null;
                                })}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Section>
    ));
    return <Layout seo={pageContext.post.seo}>{Page}</Layout>;
};

export default ElementorTemplate;
