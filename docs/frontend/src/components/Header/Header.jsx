import React, { useState } from 'react';
import Dropdown from '../ResponsiveNavbar/Dropdown';
import Navbar from '../ResponsiveNavbar/Navbar';

function Header() {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default Header;
