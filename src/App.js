// import logo from './logo.svg';
import React from 'react';
import Contact from './component/Contact';
import Feature from './component/Feature';
import Header from './component/home';
import Navbar from './component/Navbar';
import Coaches from "./component/Coaches";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Coaches/>
      {/* <Offer /> */}
      {/* <About /> */}
      <Contact />
    
    </div>
  );
}

export default App;
