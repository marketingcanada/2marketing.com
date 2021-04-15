import React from 'react';
import styled from 'styled-components';

const ElDevider = styled.span`
    display: block;
    width: 100%;
    border-top: ${props =>
            props.settings.weight ? props.settings.weight.size + props.settings.weight.unit : '1px'}
        ${props => (props.settings.style ? props.settings.style : 'solid')}
        ${props => (props.settings.color ? props.settings.color : '#000000')};
    ${props => (props.settings.custom_css ? props.settings.custom_css : '')}
`;

const Divider = settings => (
    // console.log({ settings });
    // eslint-disable-next-line react/destructuring-assignment
    <ElDevider settings={settings} className={settings._css_classes ? settings._css_classes : ''} />
);
export default Divider;
