import React from 'react'
import NavBar from './Navbar'
import './scss/header.scss'

export default function Header(props) {
  return (
    <header>
      <NavBar {...props} />
    </header>
  )
}
