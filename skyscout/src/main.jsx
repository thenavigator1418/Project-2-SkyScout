import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// React components
import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/body.jsx'
import MyCarousel from './components/ImgGallery/ImgGallery.jsx'
import Footer from './components/Footer/footer.jsx'
import Hero from './components/Hero/'

// Assembly of React components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar />
    <Hero />
    <Body />
    <MyCarousel />
    <Footer />
  </React.Fragment>,
)
