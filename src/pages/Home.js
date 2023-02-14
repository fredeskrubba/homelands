import React from 'react'
import {useImageStore} from "../stores/imageStore"
import { useEffect } from 'react'
import styled from 'styled-components'
import { useHousesStore } from '../stores/housesStore'
import HouseCard from '../components/HouseCard'
import Reviews from '../components/Reviews'
import { useReviewStore } from '../stores/reviewStore'
import Employees from '../components/Employees'
import { useEmployeeStore } from '../stores/employeeStore'

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
  const reviews = useReviewStore((state)=> state.reviews)
  const fetchReviews = useReviewStore((state)=> state.fetchReviews)
  const employees = useEmployeeStore((state)=> state.employees)
  const fetchEmployees = useEmployeeStore((state)=> state.fetchEmployees)
  useEffect(()=>{
    fetchImages("https://api.mediehuset.net/homelands/images")
    fetchHouses("https://api.mediehuset.net/homelands/homes")
    fetchReviews("https://api.mediehuset.net/homelands/reviews")
    fetchEmployees("https://api.mediehuset.net/homelands/staff")
  }, [])
  console.log(employees)
  return (
    <>
      <Header>
        {images !== "" ? <img src={images.items[8].image[0]} alt=""/> : null}
      </Header>
      <HomeSection>
        {houses !== "" ? houses.items.slice(0,3).map((house)=>{
          return <HouseCard img={house.images[0].filename.medium} alt={house.images[0].description} price={house.price} city={house.city} zip={house.zipcode} type={house.type} rooms={house.num_rooms} address={house.address} size={house.floor_space} />
        }) : null}
      </HomeSection>
      <h2 style={{textAlign: "center"}}>Det siger kunderne:</h2>
      {reviews !== "" ? 
        <Reviews 
          title={reviews.items[0].title}
          mainText={reviews.items[0].content}
          author={`${reviews.items[0].user.firstname} ${reviews.items[0].user.lastname}`}
          date={reviews.items[0].created_friendly}
        />
      : null
      }
      {
        employees !== "" ? 
          <Employees employees={employees.items}/>
        : null
      }
    </>
    
  )
}

export default Home