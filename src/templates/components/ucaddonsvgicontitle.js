import React from 'react';
import styled from 'styled-components';

const IconTitle = styled.div`
    margin: 20px 0; 
	& span:last-child{
        margin-left: 5%;
    }
`;

const Ucaddonsvgicontitle = (settings) => {
    //console.log({ settings });
    return (
        <IconTitle className={settings._css_classes ? settings._css_classes : ''}>
            <span className="title-svg" dangerouslySetInnerHTML={{ __html: settings.svg_icon_data ? settings.svg_icon_data : '' }} />
            <span className="title-text">{settings.title}</span>
        </IconTitle>
    ) 
}

export default Ucaddonsvgicontitle
