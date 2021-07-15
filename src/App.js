import React, {useState} from "react"; 
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Who from "./components/Who/Who";
import WorkedWith from './components/WorkedWith/WorkedWith'
import FirstLandingPage from './components/landingPage/FirstLandingPage';
import Navbar from "./components/Navbar/Navbar"; 
import Contact from './components/Contact'
import How from './components/How/How'
import Footer from "./components/footer/Footer"

function App() {
  const [cross, setCross] = useState(); 
  return (
    
  
    
    <BrowserRouter>
    <Navbar/>
      <Switch>
    <Route exact path="/">
      <FirstLandingPage/>
  </Route> 
  <Route exact path="/work">
    <WorkedWith/>
  </Route>
     <Route exact path="/contact">
     <Contact/>
  </Route>
  <Route exact path="/who">
      <Who />
  </Route>
  <Route exact path="/how">
    <How/>
  </Route>

  </Switch>
  <Footer/>
  </BrowserRouter>
  
  
  );
}

export default App;
