import React from 'react'
import styled from 'styled-components'
import { useGlobalStore } from '../stores/globalStore'
import {ReactComponent as ReviewArrow} from "../assets/icons/arrow-left-1.svg"

const ReviewContainer = styled.section`
display: grid;
grid-template-columns: 97% 3%;
.review-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    padding: 2vw;

}
    background-color: ${props => props.background};
    margin-bottom: 2vw;
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
    .review-bar{
        background-color: #343434;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding-left: 0.2vw;
        &:hover{
            cursor: pointer;
        }
    }
`
const Reviews = ({title, mainText, author, date}) => {
    const colors = useGlobalStore((state)=>state.colors)
  return (
    <ReviewContainer background={colors.rose}>
        <div className='review-container'>
            <h2>{title}</h2>
            <p>"{mainText}"</p>
            <div>
                <p>{author},</p>
                <p>{date}</p>
            </div>
        </div>
        <div className='review-bar'>
            <ReviewArrow/>
        </div>
    </ReviewContainer>
  )
}

export default Reviews