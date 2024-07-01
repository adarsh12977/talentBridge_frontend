import React, { useContext } from 'react'
import { Context } from '../../main'
import { Navigate } from 'react-router-dom'
import HeroSection from './HeroSection'
import HowItWorks from './HowItWorks'
import PopularCategories from './PopularCategories'
import PopularTeams from './PopularTeams'

const Home = () => {

  const {isAuthorized} = useContext(Context)
  if(!isAuthorized){
    return <Navigate to={'/login'} />
  }

  return (
    <section className='homePage page'>
      <HeroSection/>
      <HowItWorks/>
      <PopularCategories/>
      <PopularTeams/>
    </section>
  )
}

export default Home