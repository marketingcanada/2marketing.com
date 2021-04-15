import React from "react";
import {
  Col, Container,
  Row
} from 'reactstrap';
import * as components from './components';

function ucwords(text) {
  let str = text.toLowerCase();
  str = str.replace(/-/g, "");
  str = str.replace(/_/g, "");
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
    function (s) {
      return s.toUpperCase();
    });
};
  
function bsCOLgen(settings){
  return settings = Math.round(12 * (settings/100));
}


const InnerSection = (Data) => {
  const { InnerSectionData } = Data;
  //console.log(InnerSectionData);
  return (
        <Container className={`${InnerSectionData.settings.css_classes ? InnerSectionData.settings.css_classes : ''} `} fluid="xl">
            <Row className="w-100 px-0 mx-0">
              {
                InnerSectionData.elements.map(column => {
                  //console.log(column.settings);
                  const ColStyle = {
                    display: column.settings.content_position ? 'flex' : '',
                    'flexWrap': column.settings.content_position ? 'wrap' : '',
                    'alignContent': column.settings.content_position ? column.settings.content_position : '',
                    'alignItems': column.settings.content_position ? column.settings.content_position : ''
                  }; 
                  return (
                    <Col className={`${column.settings.css_classes ? column.settings.css_classes : ''}`} style={ColStyle} key={column.id} xs={bsCOLgen(column.settings._inline_size_mobile ? column.settings._inline_size_mobile : 100)} sm={bsCOLgen(column.settings._inline_size_tablet ? column.settings._inline_size_tablet : 100)} md={bsCOLgen(column.settings._inline_size ? column.settings._inline_size : column.settings._column_size)}>
                      {
                        column.elements.map(widget => {
                          //console.log(widget);
                            return (
                              React.createElement(
                                components[ucwords(widget.widgetType)],
                                {
                                  ...widget.settings,
                                  key: widget.id
                                }
                              )
                            )
                        })
                      }
                    </Col>
                  )
                })
              }
            </Row>
        </Container>
    )
};
export default InnerSection;
