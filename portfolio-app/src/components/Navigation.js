import React from 'react'
import Link from './Link'


const Navigation = () => (
  <nav>
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