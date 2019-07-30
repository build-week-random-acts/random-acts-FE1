//contain our links -> contacts, acts, about page info
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/userhomepage'>Home</Link>
    </div>
  );
};

export default Navbar;
