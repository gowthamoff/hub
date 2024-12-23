import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">{/* <Link href="/">FastFetch</Link> */}</div>
        <div className="links">
          <Link href="/code/repos">Code</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/about">About</Link>
          <Link href="/ecom">Ecom Landing</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
