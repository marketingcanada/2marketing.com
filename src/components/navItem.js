import React, { useState } from "react";
import {
  Dropdown, DropdownMenu,
  DropdownToggle,
  NavItem
} from 'reactstrap';
import { useRelative } from "./particles/hooks/useRelative";

const NavList = ({item}) => {
    const { children = [] } = item
    const isExpandable = children && children.length > 0
    const [isOpen, updateIsOpen] = useState(false);
    const toggle = () => updateIsOpen(prevState => !prevState);
    //console.log(item);

    const MenuItemChildren = (
      <DropdownMenu>
          {children.map((item, index) => (
            <NavList item={item} key={`sub-nav-${index}`} />
          ))}
      </DropdownMenu>
    )
    
    const MenuItemRoot = isExpandable ? (
      <Dropdown
        inNavbar
        toggle={toggle}
        isOpen={isOpen}
      >
          <DropdownToggle nav caret>
          {item.label}
          </DropdownToggle>
          {MenuItemChildren}
      </Dropdown>
    ): (
      <NavItem>
          <MenuItem {...item} />
      </NavItem>
    )


    return (
      <>
        {MenuItemRoot}
      </>
    )
  };

  const MenuItem = ({ label, url, fontAwecome, cssClasses }) => {
    return useRelative(url, label, fontAwecome, cssClasses);
  }

  export default NavList;