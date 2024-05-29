import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Content from './components/Content'
import Footer from './components/Footer'
export default function Layout() {
  return (
    <>
    {/*header */}
    <Header />
    {/* navbar */}
    <Navbar />
    {/* slider */}
    <Slider />
    {/* content */}
    <Content />
    {/* footer */}
    <Footer />
    </>
   
  )
}
