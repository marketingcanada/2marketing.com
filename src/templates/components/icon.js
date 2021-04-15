import React from 'react';
import styled from 'styled-components';

const Iconwrap = styled.div`
    text-align: ${props => (props.settings.align ? props.settings.align : 'center')};

    ${props =>
        props.settings._margin && props.settings._margin.isLinked
            ? `margin: ${props.settings._margin.top}${props.settings._margin.unit};`
            : props.settings._margin && !props.settings._margin.isLinked
            ? `margin: ${props.settings._margin.top}${props.settings._margin.unit} 0 ${props.settings._margin.bottom}${props.settings._margin.unit} 0;`
            : ''}

    ${props =>
        props.settings._padding && props.settings._padding.isLinked
            ? `padding: ${props.settings._padding.top}${props.settings._padding.unit};`
            : props.settings._padding && !props.settings._padding.isLinked
            ? `padding: ${props.settings._padding.top}${props.settings._padding.unit} ${props.settings._padding.right}${props.settings._padding.unit} ${props.settings._padding.bottom}${props.settings._padding.unit} ${props.settings._padding.left}${props.settings._padding.unit};`
            : ''}

    & .elementor-icon {
        text-align: ${props => (props.settings.align ? props.settings.align : 'center')};
        color: ${props => (props.settings.primary_color ? props.settings.primary_color : '')};
        font-size: ${props =>
            props.settings.size ? props.settings.size.size + props.settings.size.unit : ''};
    }
    & .elementor-icon:hover {
        color: ${props =>
            props.settings.hover_primary_color ? props.settings.hover_primary_color : null};
        border-color: ${props =>
            props.settings.hover_primary_color ? props.settings.hover_primary_color : null};
    }
`;

const Icon = settings => {
    // console.log({ settings });

    // eslint-disable-next-line camelcase
    const { selected_icon, link } = settings;

    const Wrapper = ({ iconLink, children }) =>
        iconLink ? (
            <a href={iconLink} className="elementor-icon">
                {children}
            </a>
        ) : (
            <div className="elementor-icon">{children}</div>
        );

    return (
        <Iconwrap className="elementor-icon-wrapper" settings={settings}>
            <Wrapper iconLink={link?.url || null}>
                <p className={selected_icon?.value || 'fas fa-star'} />
            </Wrapper>
        </Iconwrap>
    );
};
export default Icon;
