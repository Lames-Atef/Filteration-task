import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Recipes from "../Recipes/Recipes.jsx";
import Register from "../Register/Register.jsx";
import Footer from "../Footer/Footer.jsx";
import Testmonial from "../Testmonial/Testmonial.jsx";
import About from "../About/About.jsx";
import Work from "../Work/Work.jsx";
import Home from "../Home/Home.jsx";



function App() {
  
  return (
    <>
    <Home/>
    <Work/>
    <About/>
    <Recipes/> 
    <Testmonial/>
    
    <Register/>
    <Footer/>
    </>
  );
}

export default App;
