import React from 'react'
import Link from './Link'
import logo from './img/logo.svg'

const Navigation = () => (
  <nav>
    <img id='logo' src={logo} />
    <Link to="/">&#9673; HOME</Link>
    {' '}
    <Link to="/about">&#9673; ABOUT</Link>
    {' '}
    <Link to="/Portfolio">&#9673; PORTFOLIO</Link>
    {' '}
    <Link to="/contact">&#9673; CONTACT</Link>
    {' '}

  </nav>
)
export default Navigation