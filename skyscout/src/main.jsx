import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Gallery from './components/ImgGallery/ImgGallery.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar />
    <Gallery />
  </React.Fragment>,
)
