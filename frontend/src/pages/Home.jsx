import React from 'react'
import TopNav from '../component/TopNav'
import MainNav from '../component/MainNav'
import BottomNav from '../component/BottomNav'
import HeroSection from '../component/HeroSection'
import ShopByCategory from '../component/ShopByCategory'
import DealOfTheDay from '../component/DealOfTheDay'
import Bestseller from '../component/Bestseller'
import NewArrivals from '../component/NewArrivals'
import SellerSection from '../component/SellerSection'
import CustomerSay from '../component/CustomerSay'
import ShopFaster from '../component/ShopFaster'
import BestDeals from '../component/BestDeals'
import Footer from '../component/Footer'

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
    <NewArrivals/>
    <SellerSection/>
    <CustomerSay/>
    <ShopFaster/>
    <BestDeals/>
    <Footer/>
    </>
  )
}

export default Home