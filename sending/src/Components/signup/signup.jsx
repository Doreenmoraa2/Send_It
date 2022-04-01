
import { Link } from 'react-router-dom';
import React,{useState} from 'react';
import { signup } from '../../Redux/Actions/UserAction';
import './signup.css';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';

const Signup = () => {

  const dispatch =useDispatch();

  const newUserInfo= useSelector(state=>state.user.signup)

  const [newUserData, setNewUserData]= useState(
    {
      
      username:"",
      full_name:"",
      phone_number:"",
      password:""
    }
  )

  useEffect (()=>{
    const { success, error} = newUserInfo;

    if (success){
      console.log('Signup successful')
    }else{
      console.log(`Signup failed: ${error}`);
    }
  }, [newUserInfo])

  const handleSignup = (e) =>{
    e.preventDefault();

    dispatch(signup(newUserData));
  };



  return (<div className='signup'>
     <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form onSubmit={handleSignup}>
        <label>Full Name</label>
        <input type="text" 
        placeholder="" 
        value={newUserData.full_name}
        onChange={(e)=>{
            setNewUserData({...newUserData, full_name:e.target.value});
        }}
        />


        <label>Username</label>
        <input type="text"
         placeholder="" 
         value={newUserData.username}
         onChange={(e)=>{
             setNewUserData({...newUserData, username: e.target.value});
         }}/>

        <label>Email</label>
        <input type="email" 
        placeholder="" 
        value={newUserData.email}
        onChange={(e)=>{
            setNewUserData({...newUserData, email:e.target.value});
        }}/>

        

        <label>Phone Number</label>
        <input type="phone_number"
         placeholder="" 
         value={newUserData.phone_number}
         onChange={(e)=>{
             setNewUserData({...newUserData, phone_number:e.target.value});
         }}/>

      <label>Password</label>
        <input type="password"
         placeholder=""
         value={newUserData.password}
         onChange={(e)=>{
             setNewUserData({...newUserData, password:e.target.value});
         }} />

        
        <button>submit</button>
      </form>
     <h5> Already have an account? <Link to="/login">Login here</Link></h5>
   
  </div>
  );
 
};
export default Signup;
