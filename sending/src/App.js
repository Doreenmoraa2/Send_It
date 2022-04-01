import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from 'react';
import Home from './Components/Home/Home';
import TrackParcel from './Components/TrackParcel/TrackParcel';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/login/login';
import Signup from './Components/signup/signup';
import Footer from './Components/Footer/Footer';
import CreateParcel from './Components/CreateParcel/CreateParcel';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <NavBar/>
      
            <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/TrackParcel" element={<TrackParcel/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/CreateParcel" element={<CreateParcel/>}/>

      </Routes>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
