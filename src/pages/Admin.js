import React from 'react'
import styled from 'styled-components'
import { useGlobalStore } from '../stores/globalStore'
import { useReviewStore} from "../stores/reviewStore"
import { useEffect } from 'react'
import { useLoginStore } from '../stores/loginStore'
import { useLocation } from 'wouter'

const AdminContainer = styled.main`
    margin-top: 10vw;
    margin-left: 6vw;
    .main-grid{
        display: grid;
        grid-template-columns: 2fr 1fr;
        height: 100%;
        .review-container{
            height: 100%;
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
            height: 100%;
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
    const reviews = useReviewStore((state)=> state.reviews)
    const fetchReviews = useReviewStore((state)=> state.fetchReviews)
    const deleteReview = useReviewStore((state)=> state.deleteReview)
    const token = useLoginStore((state)=> state.token)
    const fetchLogin = useLoginStore((state)=> state.fetchLogin)
    const resetToken = useLoginStore((state) => state.resetToken)
    const [location, setLocation] = useLocation();
    useEffect(()=>{
        fetchReviews("https://api.mediehuset.net/homelands/reviews")
        fetchLogin("https://api.mediehuset.net/token", "fres", "frederik")
    }, [])  
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
                
                {reviews !== "" ? 
                    reviews.items.map((review)=>{
                        return <ReviewBar>
                                    <p>{review.title}</p>
                                    <p>{review.created_friendly}</p>
                                    <div className='review-buttons'>
                                        <button className='edit'>Rediger</button>
                                        <button className='delete' onClick={()=>{deleteReview("https://api.mediehuset.net/homelands/reviews", `/${review.id}`, token.access_token)}}>Slet</button>
                                    </div>
                                </ReviewBar>
                    })
      : null
      }
            </div>
            <div className="logout-container">
                <p>Du er logget ind som admin</p>
                <button onClick={()=> {
                    resetToken()
                    setLocation("/login")
                }}>logout</button>   
            </div>
        </section>
    </AdminContainer>
  )
}

export default Admin