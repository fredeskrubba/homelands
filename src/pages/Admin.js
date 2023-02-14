import React from 'react'
import styled from 'styled-components'
import { useGlobalStore } from '../stores/globalStore'

const AdminContainer = styled.main`
    margin-top: 10vw;
    margin-left: 6vw;
    .main-grid{
        display: grid;
        grid-template-columns: 2fr 1fr;
        height: 100%;
        .review-container{
            .info-bar{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid black;
                padding-right: 2.5vw;
                .date{
                    padding-right: 3.7vw;
                }
            }
        }
        .logout-container{
            border-left: 1px solid black;
            height: 25vw;
            margin-left: 2vw;
            padding-left: 2vw;
            button{
                box-shadow: -3px 9px 12px -9px rgba(0,0,0,0.75);
                all: unset;
                background-color: ${props => props.btnBackground};
                padding: 1vw 1.5vw;
                color: #fff;
                border-radius: 5px;
            }
        }
    }
`

const ReviewBar = styled.div`
    display: flex;
    justify-content: space-between;
    .review-buttons{
        display: flex;
        gap: 1vw;
        button{
            all: unset;
        }
        .edit{
            color: green;
        }
        .delete{
            color: red;
        }
    }
`
const Admin = () => {
    const colors = useGlobalStore((state)=> state.colors)  
  return (
    <AdminContainer btnBackground={colors.black}>
        <h1>Administration</h1>
        <h2>Anmeldelser</h2>
        <section className="main-grid">
            <div className="review-container">
                <div className='info-bar'>
                    <p>Titel</p>
                    <p className='date'>Dato</p>
                    <p>Handling</p>
                </div>
                <ReviewBar>
                    <p>Dejligt Køb</p>
                    <p>8. september 2021</p>
                    <div className='review-buttons'>
                        <button className='edit'>Rediger</button>
                        <button className='delete'>Slet</button>
                    </div>
                </ReviewBar>
            </div>
            <div className="logout-container">
                <p>Du er logget ind som admin</p>
                <button>logout</button>
            </div>
        </section>
    </AdminContainer>
  )
}

export default Admin