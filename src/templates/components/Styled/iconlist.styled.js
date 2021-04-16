import styled from 'styled-components';

export const Ul = styled.ul`
    padding: 0;
    & li {
        list-style: none;
        text-align: ${props => (props.settings.icon_align ? props.settings.icon_align : 'left')};
    }
    & li:hover > svg {
        color: ${props =>
            props.settings.icon_color_hover ? props.settings.icon_color_hover : null};
    }
    & li.elementor-icon {
        padding-right: 10px;
    }
    & li svg {
        color: ${props => (props.settings.icon_color ? props.settings.icon_color : '#6EC1E4')};
        font-size: ${props =>
            props.settings.icon_size
                ? props.settings.icon_size.size + props.settings.icon_size.unit
                : '14px'};
    }
    & li > span.elementor-icon-list-text {
        color: ${props => (props.settings.text_color ? props.settings.text_color : '#54595F')};
        font-size: ${props =>
            props.settings.icon_typography_font_size
                ? props.settings.icon_typography_font_size.size +
                  props.settings.icon_typography_font_size.unit
                : '12px'};
        font-weight: ${props =>
            props.settings.icon_typography_font_weight
                ? props.settings.icon_typography_font_weight
                : '400'};
    }
`;
