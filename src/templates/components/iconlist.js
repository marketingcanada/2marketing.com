// import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Ul } from './Styled/iconlist.styled';

const Iconlist = settings => {
    // console.log({ settings });

    // const WPURL = WPURLData();
    // eslint-disable-next-line camelcase
    const { _css_classes, icon_list } = settings;

    return (
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line camelcase
        <Ul className={_css_classes || ''} settings={settings}>
            {icon_list.map(list => {
                // eslint-disable-next-line camelcase
                const { selected_icon, link } = list;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [hasLink, setHasLink] = useState();

                // eslint-disable-next-line react-hooks/rules-of-hooks
                useEffect(() => {
                    link.url
                        ? setHasLink(
                              <a href={link.url} className="elementor-icon">
                                  <i aria-hidden="true" className={selected_icon?.value} />{' '}
                                  <span className="elementor-icon-list-text">{list.text}</span>
                              </a>
                          )
                        : setHasLink(
                              <>
                                  <i aria-hidden="true" className={selected_icon?.value} />{' '}
                                  <span className="elementor-icon-list-text ">{list.text}</span>
                              </>
                          );
                    // eslint-disable-next-line camelcase
                }, [selected_icon, link.url, list?.selected_icon?.value, list.text]);
                return (
                    <li key={list._id} className="elementor-icon-list-item">
                        {hasLink}
                    </li>
                );
            })}
        </Ul>
    );
};
export default Iconlist;
