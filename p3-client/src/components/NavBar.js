
import { NavLink } from 'react-router-dom';
import React from 'react'

const linkStyles = {
  display: "inline-block",
  fontFamily: 'Kongtext',
  borderRadius: "25px",
  width: "90px",
  padding: "12px",
  margin: "0 12px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
}; 

function NavBar() {
  return (
    <div>
      <NavLink to='/' exact style={linkStyles}>
        Home
      </NavLink>
      <NavLink to='/jobs' style={linkStyles} >
        Jobs
      </NavLink>
    </div>
  )
}

export default NavBar