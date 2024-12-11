/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <ul>
        <li><link to="/home">home</link></li>
        <li><link to="/content">content</link></li>
        <li><link to="/root">root</link></li>
        <li><link to="/main">main</link></li>

      </ul>
    </nav>
  )
}

export default Nav
