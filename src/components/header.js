import { Link } from 'gatsby';
// import PropTypes from "prop-types"
import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarToggler } from 'reactstrap';
import Logo from '../images/logo.inline.svg';
import NavList from './navItem';
// import { useSiteInfo } from "./particles/hooks/useSiteInfo";
import { useSiteMenuData } from './particles/hooks/useSiteMenuData';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuData = useSiteMenuData();
    const headerData = menuData.nodes.find(menu => menu.slug === 'main-menu');
    // const headerDataMenuRight = menuData.nodes.find(menu => menu.slug === 'menu-right');

    const flatListToHierarchical = (
        data = [],
        { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
    ) => {
        const tree = [];
        const childrenOf = {};
        data.forEach(item => {
            const newItem = { ...item };
            const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
            childrenOf[id] = childrenOf[id] || [];
            newItem[childrenKey] = childrenOf[id];
            // eslint-disable-next-line no-unused-expressions
            parentId
                ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
                : tree.push(newItem);
        });
        return tree;
    };
    const primaryMenu = flatListToHierarchical(headerData.menuItems.nodes);
    // const menuRight = flatListToHierarchical(headerDataMenuRight.menuItems.nodes);

    // console.log(primaryMenu);
    return (
        <Navbar light expand="md">
            <Container>
                <Link className="navbar-brand" to="/">
                    <Logo />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="order-2">
                    <Nav className="ml-auto" navbar>
                        {primaryMenu.map(item => (
                            <NavList item={item} key={item.id} />
                        ))}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

/* const MenuItem = ({ label, url }) => {
  return useRelative(url, label);
} */

/* Header.propTypes = {
  Header: PropTypes.node.isRequired,
} */

export default Header;
