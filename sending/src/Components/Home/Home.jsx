import React from 'react';
import './Home.css' ;
import { Link } from 'react-router-dom';
// import image from '../../images/mans4.png';


const Home = () => {
  return (<div>
     
    <div className="container">
    <div className='cont-2'>
   
      </div>
      <div className='cont-1'>
        <br></br>
        
        <h2>Anything,</h2>
        <h2>Everything,</h2>
        <h3>Get It Delivered</h3>
        <hr></hr>
        <h4>A revolutionary<br></br>delivery service is here</h4>
  
      </div>
      
    </div>
    
    <div className='text'>
      <h1>Parcel Courier <br></br>Delivery</h1>
      <p> Empower your brand and boot the customer satisfaction<br></br>
      We offer different types of services all<br></br> at affordable prices.
      Security is a premium notch for<br></br> us and we deliver within the expected duration of <br></br>time
      One can also track their parcels efficiently.</p>
    </div>
    
    <div className='buttons'>
      <div className='btn1'>
        <button className='baton1'><Link to="/CreateParcel">Create parcel</Link></button>
      </div>
      <div className='btn2'>
        <button><Link to="/TrackParcel">Track your parcel</Link></button>
      </div>
    </div>


  </div>);
};
export default Home;