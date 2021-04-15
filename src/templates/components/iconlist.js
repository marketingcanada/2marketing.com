import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { WPURLData } from '../../components/particles/hooks/useRelative';

const Ul = styled.ul`
    padding: 0;
    & li {
        list-style: none;
        text-align: ${props => (props.settings.icon_align ? props.settings.icon_align : 'left')};
    }
    & li:hover .elementor-icon-list-icon > svg {
        color: ${props =>
            props.settings.icon_color_hover ? props.settings.icon_color_hover : null};
    }
    & li > span.elementor-icon-list-icon {
        padding-right: 10px;
    }
    & li > span.elementor-icon-list-icon > svg {
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

const Iconlist = settings => {
    // console.log({ settings });

    const IsListIcon = ({ url, label, fontawesome, cssClasses }) => {
        // eslint-disable-next-line no-param-reassign
        fontawesome = fontawesome || null;
        // eslint-disable-next-line no-param-reassign
        cssClasses = cssClasses || null;
        const isFontawesome = fontawesome;

        if (!url) {
            return (
                <li className="elementor-icon-list-item">
                    {isFontawesome ? (
                        <>
                            {' '}
                            <i aria-hidden="true" className={fontawesome} /> {label}
                        </>
                    ) : (
                        label
                    )}
                </li>
            );
        }

        const WPURL = WPURLData();
        let string = url;
        if (string.match(WPURL)) {
            string = string.replace(WPURL, '');
            return (
                <li className="elementor-icon-list-item">
                    <Link activeClassName="active" className={cssClasses} to={string}>
                        {isFontawesome ? (
                            <>
                                {' '}
                                <i aria-hidden="true" className={fontawesome} /> {label}
                            </>
                        ) : (
                            label
                        )}
                    </Link>
                </li>
            );
        }
        return (
            <li className="elementor-icon-list-item">
                <a className={cssClasses} href={string}>
                    {isFontawesome ? (
                        <>
                            {' '}
                            <i aria-hidden="true" className={fontawesome} /> {label}
                        </>
                    ) : (
                        label
                    )}
                </a>
            </li>
        );
    };
    // eslint-disable-next-line camelcase
    const { _css_classes, icon_list } = settings;
    return (
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line camelcase
        <Ul className={_css_classes || ''} settings={settings}>
            {icon_list.map(list => (
                // console.log(list);
                <IsListIcon
                    key={list._id}
                    url={list?.link?.url || null}
                    label={list.text}
                    fontawesome={list?.selected_icon?.value || null}
                    cssClasses={null}
                />
            ))}
        </Ul>
    );
};
export default Iconlist;
