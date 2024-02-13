import Hero from '@/components/shared/Hero'
import React from 'react'
import TopPost from '@/components/shared/TopPost'
import LatestPost from '@/components/shared/LatestPost'
import HeroSection from '@/components/shared/HeroSection'
import AboutSection from '@/components/shared/AboutSection'
const Home = () => {
  return (<>
 
    <Hero/>
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
    <LatestPost  />
    <TopPost  />
  </div>
  </>
 

  )
}

export default Home