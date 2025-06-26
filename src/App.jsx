import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  // JS scroll distortion effect (optional)
window.addEventListener("scroll", () => {
  const mask = document.querySelector(".fisheye-mask");
  const scrollY = window.scrollY;
  mask.style.transform = `scaleY(${1 + scrollY * 0.0005})`;
});

  return (
    <div className='app'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App