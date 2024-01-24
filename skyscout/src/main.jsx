import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< Updated upstream
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// React components
import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/body.jsx'
import MyCarousel from './components/ImgGallery/ImgGallery.jsx'
import Footer from './components/Footer/footer.jsx'
=======
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero/'
>>>>>>> Stashed changes

// Assembly of React components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
<<<<<<< Updated upstream
    <Navbar />
    <Body />
    <MyCarousel />
    <Footer />
=======
    <Hero />
>>>>>>> Stashed changes
  </React.Fragment>,
)
