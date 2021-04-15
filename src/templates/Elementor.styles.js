import styled from 'styled-components';

export const Section = styled.section`
    ${props => (props.settings.background_overlay_background ? 'position: relative;' : '')}
    ${props =>
        props.settings.background_background === 'classic' && !props.settings.background_image
            ? `background-color: ${props.settings.background_color};`
            : props.settings.background_background === 'classic' && props.settings.background_image
            ? `background-image: url(${props.settings.background_image.url.src});`
            : props.settings.background_background === 'gradient' &&
              props.settings.background_gradient_type === 'radial'
            ? `background-image: radial-gradient(at ${
                  props.settings.background_gradient_position
                      ? props.settings.background_gradient_position
                      : 'center center'
              }, ${props.settings.background_color} ${
                  props.settings.background_color_stop
                      ? props.settings.background_color_stop.size +
                        props.settings.background_color_stop.unit
                      : '0%'
              }, ${
                  props.settings.background_color_b ? props.settings.background_color_b : '#F2295B'
              } ${
                  props.settings.background_color_b_stop
                      ? props.settings.background_color_b_stop.size +
                        props.settings.background_color_b_stop.unit
                      : '100%'
              });`
            : props.settings.background_background === 'gradient' &&
              !props.settings.background_gradient_type
            ? `background-image: linear-gradient(${
                  props.settings.background_gradient_angle
                      ? props.settings.background_gradient_angle.size +
                        props.settings.background_gradient_angle.unit
                      : '180deg'
              }, ${props.settings.background_color} ${
                  props.settings.background_color_stop
                      ? props.settings.background_color_stop.size +
                        props.settings.background_color_stop.unit
                      : '0%'
              }, ${
                  props.settings.background_color_b ? props.settings.background_color_b : '#F2295B'
              } ${
                  props.settings.background_color_b_stop
                      ? props.settings.background_color_b_stop.size +
                        props.settings.background_color_b_stop.unit
                      : '100%'
              });`
            : ''}
    &:before {
        ${props =>
            props.settings.background_overlay_background
                ? 'content: "";height: 100%;width: 100%;top: 0;left: 0;position: absolute;'
                : ''}

        ${props =>
            props.settings.background_overlay_background &&
            props.settings.background_overlay_opacity
                ? `opacity: ${props.settings.background_overlay_opacity.size};`
                : 'opacity: 0.5;'}

        ${props =>
            props.settings.background_overlay_background === 'classic' &&
            !props.settings.background_overlay_image
                ? `background-color: ${props.settings.background_overlay_color};`
                : props.settings.background_overlay_background === 'classic' &&
                  props.settings.background_overlay_image
                ? `background-image: url(${props.settings.background_overlay_image.url.src});`
                : props.settings.background_overlay_background === 'gradient' &&
                  props.settings.background_overlay_gradient_type === 'radial'
                ? `background-image: radial-gradient(at ${
                      props.settings.background_overlay_gradient_position
                          ? props.settings.background_overlay_gradient_position
                          : 'center center'
                  }, ${props.settings.background_overlay_color} ${
                      props.settings.background_overlay_color_stop
                          ? props.settings.background_overlay_color_stop.size +
                            props.settings.background_overlay_color_stop.unit
                          : '0%'
                  }, ${
                      props.settings.background_overlay_color_b
                          ? props.settings.background_overlay_color_b
                          : '#F2295B'
                  } ${
                      props.settings.background_overlay_color_b_stop
                          ? props.settings.background_overlay_color_b_stop.size +
                            props.settings.background_overlay_color_b_stop.unit
                          : '100%'
                  });`
                : props.settings.background_overlay_background === 'gradient' &&
                  !props.settings.background_overlay_gradient_type
                ? `background-image: linear-gradient(${
                      props.settings.background_overlay_gradient_angle
                          ? props.settings.background_overlay_gradient_angle.size +
                            props.settings.background_overlay_gradient_angle.unit
                          : '180deg'
                  }, ${props.settings.background_overlay_color} ${
                      props.settings.background_overlay_color_stop
                          ? props.settings.background_overlay_color_stop.size +
                            props.settings.background_overlay_color_stop.unit
                          : '0%'
                  }, ${
                      props.settings.background_overlay_color_b
                          ? props.settings.background_overlay_color_b
                          : '#F2295B'
                  } ${
                      props.settings.background_overlay_color_b_stop
                          ? props.settings.background_overlay_color_b_stop.size +
                            props.settings.background_overlay_color_b_stop.unit
                          : '100%'
                  });`
                : ''}
    }
    ${props =>
        props.settings.margin && props.settings.margin.isLinked
            ? `margin: ${props.settings.margin.top}${props.settings.margin.unit} auto;`
            : props.settings.margin && !props.settings.margin.isLinked
            ? `margin: ${props.settings.margin.top}${props.settings.margin.unit} 0 ${props.settings.margin.bottom}${props.settings.margin.unit} 0;`
            : ''}

    ${props =>
        props.settings.padding && props.settings.padding.isLinked
            ? `padding: ${props.settings.padding.top}${props.settings.padding.unit};`
            : props.settings.padding && !props.settings.padding.isLinked
            ? `padding: ${props.settings.padding.top}${props.settings.padding.unit} ${props.settings.padding.right}${props.settings.padding.unit} ${props.settings.padding.bottom}${props.settings.padding.unit} ${props.settings.padding.left}${props.settings.padding.unit};`
            : ''}
    
    ${props =>
        props.settings.height === 'min-height' && !props.settings.custom_height
            ? 'min-height: 400px; display: flex; align-items: center;'
            : props.settings.height === 'min-height' && props.settings.custom_height
            ? `min-height: ${props.settings.custom_height.size}${props.settings.custom_height.unit}`
            : props.settings.height === 'full'
            ? 'height: 100vh; display: flex; align-items: center;'
            : ''}

    ${props =>
        props?.settings?.column_position === 'bottom'
            ? 'align-items: flex-end;'
            : props?.settings?.column_position === 'top'
            ? 'align-items: flex-start;'
            : props?.settings?.column_position === 'stretch'
            ? 'align-items: unset;'
            : ''}
`;
