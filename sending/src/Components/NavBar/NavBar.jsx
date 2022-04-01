import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

// const menuu=()=>{
//   const menu = document.getElementById('bar')
//   menu.style.display='block';
// }
// const menu=()=>{
//   const menu = document.getElementById('navright')
//   menu.style.display='none';
// }
const NavBar = () => {
  return (<div className="nav" > 
  <ul style={{listStyle:"none"}}> 
  {/* <link onClick={()=>{menuu()}} to='/'><li>&#9776;</li></link> */}
 
  <div className='navright' id='navright2'>
   
      <Link style={{textDecoration:"none"}} to="/"><li>Home</li></Link>
      <Link  style={{textDecoration:"none"}} to="/CreateParcel"><li>CreateParcel</li></Link>
       <Link style={{textDecoration:"none"}}  to="/TrackParcel"><li>TrackParcel</li></Link>
        <Link  style={{textDecoration:"none"}} to="/Services"><li>Services</li></Link>
        </div>
        <div className='navleft'>
        {/* <Link  style={{textDecoration:"none"}} to="/login"><button className='btn'><li>login</li></button></Link> */}
        <Link  style={{textDecoration:"none"}} to="/login"><li>Login</li></Link>
        </div>
      
    </ul>

      </div>);
};

export default NavBar;
