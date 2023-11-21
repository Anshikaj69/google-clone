import React , {useState}from "react";

import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Footer } from "./components/Footer";

const App = () => {
   const [darktheme, setdarktheme]= useState(false)

  return (
    <div className={darktheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
        <h1>App</h1>
      </div>
      
    </div>
  );
};

export default App;
