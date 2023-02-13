import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'



const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
`

const Nav = () => {
  return (
    <Navbar>
        <Link href="/">
            <a>Forside</a>
        </Link>
        <section>
            <Link href="/listings">
                <a>Boliger til salg</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <input type="text" />
        </section>

        
    </Navbar>
  )
}

export default Nav