import React, { useState}from 'react';
import './App.css';
import Navbar3 from './components/ui/Navbar3/index';
import Home from './pages/home/Home.js';
import Products from './components/product/Products';
// import GuardianHome from './pages/guardianHome/guardianHome';
// import About from './pages/about/about';
// import ContactUs from './pages/contactUs/contactUs';


function App() {

  const [displayContent, setDisplayContent] = useState("Home");

  const renderPage = () => {
    console.log("State-" + displayContent)
    switch (displayContent) {
      case "Home":
        return <Home />
      case "Products":
        return <Products />
      // case "GuardianHome":
      //   return <GuardianHome />
      // case "About":
      //   return <About />
      // case "ContactUs":
      //   return <ContactUs />
      default:
        return <Home />
    }
  }

      return (
      
        <div className="contentSection">
          <Navbar3
      displayContent={setDisplayContent}
      />
              {renderPage()}

        </div>
      )
}

export default App;