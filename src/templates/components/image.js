import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
    ${props => (props.settings.custom_css ? props.settings.custom_css : '')};
    .gatsby-image-wrapper {
        ${props =>
            props.settings._margin && props.settings._margin.isLinked
                ? `margin: ${props.settings._margin.top}${props.settings._margin.unit};`
                : props.settings._margin && !props.settings._margin.isLinked
                ? `margin: ${props.settings._margin.top}${props.settings._margin.unit} ${props.settings._margin.right}${props.settings._margin.unit} ${props.settings._margin.bottom}${props.settings._margin.unit} ${props.settings._margin.left}${props.settings._margin.unit};`
                : ''}

        ${props =>
            props.settings._padding && props.settings._padding.isLinked
                ? `padding: ${props.settings._padding.top}${props.settings._padding.unit};`
                : props.settings._padding && !props.settings._padding.isLinked
                ? `padding: ${props.settings._padding.top}${props.settings._padding.unit} ${props.settings._padding.right}${props.settings._padding.unit} ${props.settings._padding.bottom}${props.settings._padding.unit} ${props.settings._padding.left}${props.settings._padding.unit};`
                : ''}
    }
`;

const Image = settings => {
    // console.log({ settings });
    // eslint-disable-next-line camelcase
    const { image, _css_classes } = settings;
    return (
        // eslint-disable-next-line camelcase
        <ImgContainer settings={settings} className={_css_classes || ''}>
            <Img fluid={image.fluid} />
        </ImgContainer>
    );
};

export default Image;
