import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'
import { useGlobalStore } from '../stores/globalStore'
import {ReactComponent as SearchIcon} from "../assets/icons/search-icon.svg"
import { useRoute } from 'wouter'

const Navbar = styled.nav`
    font-size: 1vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    .nav-container{
        display: flex;
        justify-content: space-between;
        padding: 1vw 6vw;
        align-items: center;
        background-color: ${props => props.background};
        .logo{
        font-size: 4vw;
        position: absolute;
        top: 1vw;
        background-color: ${props => props.logoBackground};
        border: solid 2px black;
        padding: 0.5vw;
        }
        .logo:hover {
            color: #fff;
        }
        a{
            text-decoration: none;
            color: #fff;
            font-size: 1.8vw;
        }
        a:hover{
            color: ${props=> props.logoBackground};
        }
        section{
            display: flex;
            gap: 2vw;
            margin-left: auto;
            align-items: center;
        }
        .active{
            color: ${props => props.logoBackground};
        }
        .searchbar{
            display: flex;
            align-items: center;
            input{
                height: 100%;
                border-radius: 3px;
                border: none;
                padding: 0.8vw 0.5vw;
                &:focus{
                    outline: none;
                }
            }
            .search-icon{
                background-color: gray;
                height: 100%;
                padding: 0.7vw 1vw;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                position: relative;
                right: 0.2vw;
                &:hover{
                    cursor: pointer;
                    background-color: ${props => props.logoBackground};
                }
            }
        }
    }
    .triangles{
        display: flex;
        .triangle-1{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 40px 500px 0 0;
            border-color: ${props => props.background} transparent transparent transparent;
        }
        .triangle-2{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 1100px 100px 0;
            border-color: transparent ${props => props.background} transparent transparent;
        }
    }
    
    
`
const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
  };

const Nav = () => {
    const colors = useGlobalStore((state)=> state.colors)  
    
  return (
    <Navbar background={colors.black} logoBackground={colors.brown}>
        <div className='nav-container'>
            <Link href="/">
                <a>Homelands</a>
            </Link> 
            <section>
                <ActiveLink href="/">
                    Forside
                </ActiveLink>
                <ActiveLink href="/listings">
                    Boliger til salg
                </ActiveLink>
                <ActiveLink href="/login">
                    Login
                </ActiveLink>
                <div className='searchbar'>
                    <input type="text" placeholder='Indtast søgeord'/>
                    <SearchIcon className='search-icon'/>
                </div>
            </section>

        </div>
        <div className='triangles'>
            <div className='triangle-1'/>
            <div className='triangle-2'/>
        </div>
        

        
    </Navbar>
  )
}

export default Nav