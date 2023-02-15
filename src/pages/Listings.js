import React from 'react'
import styled from 'styled-components'
import HouseCard from "../components/HouseCard"
import { useHousesStore } from '../stores/housesStore'
import { useEffect } from 'react'
import {useGlobalStore} from "../stores/globalStore"

const ListingContainer = styled.main`
    margin-top: 10vw;
    margin-left: 6vw;
    margin-right: 6vw;
    .upper-section{
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        display: flex;
        align-items: center;
        gap: 2vw;
        select{
          padding: 0.5vw 6vw 0.5vw 0.5vw;
        }
        .price-slider{
          accent-color: ${props => props.sliderColor};
        }
    }
  }
  .house-listing{
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 2vw 0;
  box-sizing: border-box;
  gap: 2vw;
  img{
    width: 100%;
  }
  }
`

const Listings = () => {
  const houses = useHousesStore((state)=> state.houses)
  const fetchHouses = useHousesStore((state)=> state.fetchHouses)
  const colors = useGlobalStore(state => state.colors)
  useEffect(()=>{
    fetchHouses("https://api.mediehuset.net/homelands/homes")
  }, [])

  
  return (
    <ListingContainer sliderColor={colors.brown}>
      <section className="upper-section">
        <h1>Boliger til salg</h1>
        <div>
          <p>Sorter efter prisniveau</p>
          <input type="range" className='price-slider'/>
          <select>
            <option>Sorter efter type</option>
          </select>
        </div>
      </section>
      <section className="house-listing">
        {houses !== "" ? houses.items.map((house)=>{
            return <HouseCard img={house.images[0].filename.medium} alt={house.images[0].description} price={house.price} city={house.city} zip={house.zipcode} type={house.type} rooms={house.num_rooms} address={house.address} size={house.floor_space} likeable={true}/>
          }) : null}
      </section>
    </ListingContainer>
  )
}

export default Listings