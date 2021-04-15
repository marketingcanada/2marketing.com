import React from "react";
import styled from 'styled-components';

const ButtonElement = styled.a`
    text-align: ${props =>  props.settings.align ? props.settings.align : ''};
    &${props =>  props.settings.custom_css ? props.settings.custom_css : ''}
`;

const Button = (settings) => {
  //console.log({ settings });
  return (
    <ButtonElement 
      className={`${settings._css_classes ? settings._css_classes : ''} ${settings.size ? 'btn-' + settings.size : ''}`} 
      settings={settings} 
      href={settings.link ? settings.link.url : '#'} 
      role="button">
          {settings.text}
    </ButtonElement>
  )
};
export default Button;
