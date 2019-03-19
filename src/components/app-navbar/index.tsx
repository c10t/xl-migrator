import * as React from 'react'

/**
 * Navbar
 * A responsive horizontal navbar that can support images,
 * links, buttons, and dropdowns 
 * https://bulma.io/documentation/components/navbar/
 */
const AppNavbar: React.FC = () => (
  <nav className="navbar is-success" role="navigation" area-label="main navigation">
    <NavbarBrand />
    <NavbarMenu />
  </nav>
)

const NavbarBrand: React.FC = () => (
  <div className="navbar-brand">
    <a className="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>
  </div>
)

const NavbarMenu: React.FC = () => (
  <div className="navbar-menu">
    <NavbarStart />
    <NavbarEnd />
  </div>
)

const NavbarStart: React.FC = () => (
  <div className="navbar-start">
    <a className="navbar-item">Home</a>
    <a className="navbar-item is-active">Documentation</a>
    <NavbarDropdown />
  </div>
)

const NavbarEnd: React.FC = () => (
  <div className="navbar-end"></div>
)

const NavbarDropdown: React.FC = () => (
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link">More</a>

    <div className="navbar-dropdown">
      <a className="navbar-item">About</a>
      <a className="navbar-item">Jobs</a>
      <a className="navbar-item">Contact</a>
      <hr className="navbar-divider" />
      <a className="navbar-item">Report an issue</a>
    </div>
  </div>
)

export default AppNavbar
