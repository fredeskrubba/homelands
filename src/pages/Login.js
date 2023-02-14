import React from 'react'
import styled from 'styled-components'
import { useGlobalStore } from '../stores/globalStore'


const LoginCont = styled.main`
  margin-top: 10vw;
  margin-left: 6vw;
  p{
    color: grey;
  }

  .form{
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 2vw;
    input{
      padding:0.8vw 1vw;
      border-radius: 5px;
      border: 1px solid lightgrey;
      box-shadow: -3px 9px 12px -9px rgba(0,0,0,0.75);
      &:focus{
        outline: none;
      }
    }
  }

  .buttons{
    display: flex;
    gap: 1vw;
    margin-top: 1.5vw;
    button{
      box-shadow: -3px 9px 12px -9px rgba(0,0,0,0.75);
      all: unset;
      background-color: ${props => props.btnBackground};
      padding: 1vw 1.5vw;
      color: #fff;
      border-radius: 5px;
    }
  }
`

const Login = () => {
const colors = useGlobalStore((state)=> state.colors)  

  return (
    <LoginCont btnBackground={colors.black}>
      <h1>Login</h1>
      <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
      <section className='form'>
        <input type="text" placeholder='Brugernavn'/>
        <input type="text" placeholder='Adgangskode'/>
      </section>
      <section className='buttons'>
        <button>Login</button>
        <button>Annuller</button>
      </section>
    </LoginCont>
  )
}

export default Login