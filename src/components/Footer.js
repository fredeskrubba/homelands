import React from 'react'
import styled from 'styled-components'
import { useGlobalStore } from '../stores/globalStore'

const FooterDiv = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.background};
    color: white;
    padding: 1.5vw 6vw;
    z-index: 1;
    .info-section{
        display: flex;
        align-items: center;
        gap: 8vw;
        p{
            margin: 0;
        }
        h2{
            font-size: 2.5vw;
            margin: 0;
        }
    }
`

const Footer = () => {
    const colors = useGlobalStore((state)=> state.colors)
  return (
    <FooterDiv background={colors.black}>
        <div className='info-section'>
            <h2>Homelands</h2>
            <section>
                <p>Øster Uttrupvej 5</p>
                <p>9000 Aalborg</p> 
            </section>
            <section>
                <p>Email: info@homelands.dk</p>
                <p>Telefon: +45 1122 3344 </p>
            </section>

        </div>
    </FooterDiv>
  )
}

export default Footer