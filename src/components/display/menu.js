import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavItem, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuBar = () => {
   return (
      <React.Fragment>
         <Navbar className="navbar"expand="xl">
               <nav className="nav nav-tabs" id="basic-navbar-nav">
                  <NavItem>
                     <Link className="nav-link" to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                     <Link className="nav-link" to="/about">About</Link>
                  </NavItem>
                  <NavItem>
                     <Link className="nav-link" to="/contact">Contact</Link>
                  </NavItem>
               </nav>
         </Navbar>
      </React.Fragment>
   )
}
export default MenuBar;
//