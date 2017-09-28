import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div>
      <nav className="top-bar" data-topbar role="navigation">
        <Link to='/patients'> Home </Link>
        <a data-method="delete" href='/users/sign_out'> Sign Out </a>
      </nav>
      {props.children}
    </div>
  )
}

export default NavBar;
