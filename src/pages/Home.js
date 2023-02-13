import React from 'react'
import {useImageStore} from "../stores/imageStore"
import { useEffect } from 'react'
import styled from 'styled-components'
import { useHousesStore } from '../stores/housesStore'
import HouseCard from '../components/HouseCard'

const Header = styled.header`
  margin-top: 3vw;
  border-top: 10px solid black;
  border-bottom: 10px solid black;
  img{
    display: block;
    width: 100%;
    height: 40vw;
    object-fit: cover;
  }
`

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 2vw 6vw;
  position: relative;
  bottom: 5vw;
  box-sizing: border-box;
  gap: 2vw;
  img{
    width: 100%;
  }
`

const Home = () => {
  const images = useImageStore((state)=> state.images)
  const fetchImages = useImageStore((state)=> state.fetchImages)
  const houses = useHousesStore((state)=> state.houses)
  const fetchHouses = useHousesStore((state)=> state.fetchHouses)
  useEffect(()=>{
    fetchImages("https://api.mediehuset.net/homelands/images")
  }, [])
  console.log(images)
  useEffect(()=>{
    fetchHouses("https://api.mediehuset.net/homelands/homes")
  }, [])
  console.log(houses)
  return (
    <>
      <Header>
        {images !== "" ? <img src={images.items[8].image[0]} alt=""/> : null}
      </Header>
      <HomeSection>
        {houses !== "" ? houses.items.map((house)=>{
          return <HouseCard img={house.images[0].filename.medium} alt={house.images[0].description} price={house.price} city={house.city} zip={house.zipcode} type={house.type} rooms={house.num_rooms} address={house.address} size={house.floor_space} />
        }) : null}
      </HomeSection>
    </>
    
  )
}

export default Home