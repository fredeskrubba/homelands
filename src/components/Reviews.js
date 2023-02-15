import React from 'react'
import styled from 'styled-components'
import { useGlobalStore } from '../stores/globalStore'

const ReviewContainer = styled.section`
    background-color: ${props => props.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vw;
    padding: 2vw;
    gap: 0.5vw;
    h2{
        font-size: 1.2vw;
        margin: 0;
    }
    p{
        margin: 0;
    }
    div{
        display: flex;
        gap: 0.2vw;
        font-size: 0.8vw;
        align-items: center;
    }
`
const Reviews = ({title, mainText, author, date}) => {
    const colors = useGlobalStore((state)=>state.colors)
  return (
    <ReviewContainer background={colors.rose}>
        <h2>{title}</h2>
        <p>"{mainText}"</p>
        <div>
            <p>{author},</p>
            <p>{date}</p>
        </div>
        <div>
            
        </div>
    </ReviewContainer>
  )
}

export default Reviews