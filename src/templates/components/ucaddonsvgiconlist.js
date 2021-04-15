import React from "react";
import styled from 'styled-components';

const Ul = styled.ul`
	padding: 0;
    & li {
		list-style: none;
	}
`;

const Ucaddonsvgiconlist = (settings) => {
   //console.log({ settings });
  return (
    <Ul className={settings._css_classes ? settings._css_classes : ''} settings={settings}>
		{
			settings.uc_items.map(list => {
				return(
				<li key={list._id} className="elementor-icon-list-item">
					{
                        list.item_link ? (
                            <a className="list-link" href={list.item_link.url}><span className="list-svg" dangerouslySetInnerHTML={{ __html: list.svg_icon_data ? list.svg_icon_data : '' }} /><span className="list-text">{list.title}</span></a>
                        ) : 
                        (
                            <><span className="list-svg" dangerouslySetInnerHTML={{ __html: list.svg_icon_data ? list.svg_icon_data : '' }} /><span className="list-text">{list.title}</span></>
                        )
                    }
				</li>
				)
			})
		}
	</Ul>
  )
};
export default Ucaddonsvgiconlist;
