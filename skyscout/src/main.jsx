import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/body.jsx'
import ContactForm from './components/ContactForm/form.jsx'
import Footer from './components/Footer/footer.jsx'
/* import MyComponent from './components/Map/googlemap.jsx' */
{/* <MyComponent /> */}


// Assembly of React components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar />
<<<<<<<<< Temporary merge branch 1
    <Gallery />
=========
    <Body />
    <ContactForm />
    <Footer />
>>>>>>>>> Temporary merge branch 2
  </React.Fragment>,
)
