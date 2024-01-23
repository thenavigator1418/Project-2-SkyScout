import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Body from './components/Body/body.jsx'
import Footer from './components/Footer/footer.jsx'
/* import MyComponent from './components/Map/googlemap.jsx' */
{/* <MyComponent /> */ }


// Assembly of React components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar />
    <Body />
    <Footer />

  </React.Fragment>,
)
