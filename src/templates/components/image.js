import Img from "gatsby-image";
import React from "react";
import styled from 'styled-components';

const ImgContainer = styled.div`
  ${props =>  props.settings.custom_css ? props.settings.custom_css : ''};
  .gatsby-image-wrapper{
    ${props =>  props.settings._margin && props.settings._margin.isLinked ? 
      'margin: ' + props.settings._margin.top + props.settings._margin.unit + ';' : 
      props.settings._margin && !props.settings._margin.isLinked ? 
      'margin: ' + props.settings._margin.top + props.settings._margin.unit + ' ' + props.settings._margin.right + props.settings._margin.unit + ' ' + props.settings._margin.bottom + props.settings._margin.unit + ' ' + props.settings._margin.left + props.settings._margin.unit + ';' : ''}

    ${props =>  props.settings._padding && props.settings._padding.isLinked ? 
      'padding: ' + props.settings._padding.top + props.settings._padding.unit + ';' : 
      props.settings._padding && !props.settings._padding.isLinked ? 
      'padding: ' + props.settings._padding.top + props.settings._padding.unit + ' ' + props.settings._padding.right + props.settings._padding.unit + ' ' + props.settings._padding.bottom + props.settings._padding.unit + ' ' + props.settings._padding.left + props.settings._padding.unit + ';' : ''}
  }
`;

const Image = (settings) => {
  //console.log({ settings });

  return (
    <ImgContainer settings={settings} className={settings._css_classes ? settings._css_classes : ''}>
      <Img 
        fluid={settings.image.fluid}
        style={{ 
          height: (settings.height ? settings.height.size + settings.height.unit : 'auto'), 
          width: (settings.width ? settings.width.size + settings.width.unit : '100%'),
          zIndex: (settings._z_index ? settings._z_index : '')
        }} 
      />
    </ImgContainer>
  )
};
export default Image;
