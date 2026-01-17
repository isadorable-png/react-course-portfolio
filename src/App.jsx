import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectCards from "./components/ProjectCards.jsx";
import SocialCard from "./components/SocialCard.jsx";
//can only return only ONE element -> needs to be wrapped in a single element
//you can use a FRAGMENT, that is the "<>", not using an actual div

const App = () => {
  return (
    <> 
      <Navbar />  
      <Hero name="Isadora Botelho [aka Isadorable]" role="Product Designer [also manager and coder]" expTime="+5 years"/>
      <SocialCard />
      <ProjectCards />  
    </>
  )
}

export default App