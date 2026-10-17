import React from 'react'
import TopNav from '../component/TopNav'
import MainNav from '../component/MainNav'
import BottomNav from '../component/BottomNav'
import HeroSection from '../component/HeroSection'
import ShopByCategory from '../component/ShopByCategory'
import DealOfTheDay from '../component/DealOfTheDay'
import Bestseller from '../component/Bestseller'

const Home = () => {
  return (
    <>
    <TopNav/>
    <MainNav/>
    <BottomNav/>
    <HeroSection/>
    <ShopByCategory/>
    <DealOfTheDay/>
    <Bestseller/>
    </>
  )
}

export default Home