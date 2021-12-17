import React, { useState } from 'react';
import { useUser } from '../../utils/hooks';
import Dropdown from '../ResponsiveNavbar/Dropdown';
import Navbar from '../ResponsiveNavbar/Navbar';

function Header() {
  const { isLoggedIn } = useUser();
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Dropdown isLoggedIn={isLoggedIn} isOpen={isOpen} toggle={toggle} />
      <Navbar isLoggedIn={isLoggedIn} isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default Header;
