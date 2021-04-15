import React from "react";
import styled from 'styled-components';

const Editor = styled.div`
  ${props =>  props.settings.custom_css ? props.settings.custom_css : ''}
`;

const Texteditor = (settings) => {
   //console.log({ settings });
  return (
    <Editor 
    className={settings._css_classes ? settings._css_classes : ''}
    settings={settings} 
    dangerouslySetInnerHTML={{ __html: settings.editor ? settings.editor : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' }} />
  )
};
export default Texteditor;
