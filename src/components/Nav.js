import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'
import { useGlobalStore } from '../stores/globalStore'

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1vw 6vw;
    font-size: 1vw;
    background-color: ${props => props.background};
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    .logo{
        font-size: 4vw;
        position: absolute;
        top: 1vw;
        .logo-background{
            padding: 2vw 6.7vw;
            z-index: -1;
            position: absolute;
            left: -1vw;
            top: 0.2vw;
            border: 2px solid ${props => props.background};
            background-color: ${props => props.logoBackground};
        }
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    section{
        display: flex;
        gap: 1vw;
        margin-left: auto;
        align-items: center;
    }
    .brown{
        color: ${props => props.logoBackground};
    }
    input{
        height: 100%;
        border-radius: 3px;
        border: none;
        padding: 0.2vw 0.5vw;
        &:focus{
            outline: none;
        }
    }
`

const Nav = () => {
    const colors = useGlobalStore((state)=> state.colors)  

  return (
    <Navbar background={colors.black} logoBackground={colors.brown}>
        <section className='logo'>
            <div className='logo-background'></div>
            <Link href="/">
                <a>Homelands</a>
            </Link> 
        </section>
        
        <section>
            <Link href="/">
                <a className='brown'>Forside</a>
            </Link>
            <Link href="/listings">
                <a>Boliger til salg</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <input type="text" placeholder='Indtast søgeord'/>
        </section>

        
    </Navbar>
  )
}

export default Nav