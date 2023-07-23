import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./components/Header";

import "./styles/App.scss";
import "./styles/header.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./styles/mediaquery.scss";

import Services from "./components/services";



function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        
        <Route path ='/services' element = {<Services/>}/>

       
        
      </Routes>
      <Footer/>
     </Router>
    </>
  );
}

export default App;
