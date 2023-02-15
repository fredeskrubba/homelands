import React from 'react'
import styled from 'styled-components'
import {ReactComponent as HeartIcon} from "../assets/icons/heart-icon.svg"


const Card = styled.article`
    border: 1px solid black;
    padding: 2vw;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #fffa;
    &:hover{
        background-color: #d002;
        cursor: pointer;
        transform: scale(1.1); 
        transition: 200ms;
    }
    p{
        margin: 0;
    }
    .upper-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            font-weight: 400;
        }

    }
    
    .info{
        .address{
            display: flex;
            font-weight: 700;
            gap: 0.2vw; 
        }
        .price{
            display: flex;
            justify-content: space-between;
            font-size: 1vw;
            margin-top: 0.5vw;
        }
    }
    
`
const HouseCard = ({img, alt, price, city, zip, type, rooms, address, size, likeable}) => {
  return (
    <Card>
        <img src={img} alt={alt} />
        <div className="upper-info">
            <h2>{address}</h2>
            {likeable && <HeartIcon/>}
            
        </div>
        <section className='info'>
            <div className='address'>
                <p>{zip}</p>
                <p>{city}</p>
            </div>
            <p>{type}</p>
            <div className='price'>
                <div>
                    {rooms} værelser, {size} m^2
                </div>
                <p><b>{price} DKK</b></p>
            </div>
        </section>
    </Card>
  )
}

export default HouseCard