import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// React components
import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/body.jsx'
import MyCarousel from './components/ImgGallery/ImgGallery.jsx'
import Footer from './components/Footer/footer.jsx'

// Assembly of React components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar />
    <Body />
    <MyCarousel />
    <Footer />
  </React.Fragment>,
)
