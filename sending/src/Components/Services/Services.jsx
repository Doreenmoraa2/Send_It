import React from 'react';
import image from '../../images/mans2.png';
import image1 from '../../images/woman1.png';
import './Services.css' ;


const Services = () => {
  return (<div>
    <div className="contain">
      
      <div className='contain-2'>
        <img src={image} alt='' width={380} height={280}></img>
      </div>
      <div className='contain-1'>
        <br></br>
        <br></br>
        <br></br>
        {/* <br></br>
        <br></br> */}
        <h3 style={{color:"blue"}}>Express Courier Services</h3>
         <p>We provide same day delivery<br></br>
         We use bikes, tracks and vans for delivery that is after<br></br>
         you order our services using our app
         We provide same day delivery<br></br>
         We use bikes, tracks and vans for delivery that is after<br></br>
         you order our services using our app
         </p>
      </div>
    </div>



     <div className="contain">
      <div className='contain-1'>
       
        <h3 style={{color:"blue"}}>Packaging</h3>
         <p>We provide packaging for the products <br></br>
         that are going to be distributed by us if<br></br>
         you order our services using our app
         We provide same day delivery<br></br>
         We use bikes, tracks and vans for delivery that is after<br></br>
         you order our services using our app
         </p>
      </div>
      <div className='contain-2'>
        <img src={image1} alt='' width={380} height={280}></img>
      </div>
    </div> 















      {/* <h1>HELLO Services</h1> */}
     {/* <div className='part'>
       <div className='section-1'>
       <img src={image} alt='' width={380} height={380}></img>
       </div>
       <div className='section-2'>
         <h3>Express Courier Services</h3>
         <p>We provide same day delivery<br></br>
         We use bikes, tracks and vans for delivery that is after<br></br>
         you order our services using our app
         </p>
       </div>
     </div> */}
  </div>);
};
export default Services;