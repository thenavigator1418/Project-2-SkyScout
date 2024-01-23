import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/body.jsx'
import MyCarousel from './components/ImgGallery/ImgGallery.jsx'


/* import ContactForm from './components/ContactForm/form.jsx'
import Footer from './components/Footer/footer.jsx' */
/* import MyComponent from './components/Map/googlemap.jsx' */
{/* <MyComponent /> */}


// Assembly of React components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar />
    <Body />
    <MyCarousel />
{/*     <ContactForm />
    <Footer /> */}
  </React.Fragment>,
)
