import { Link } from 'react-router-dom';
import './login.css';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import React,{useState} from 'react';
import { login, loginReset } from '../../Redux/Actions/UserAction'
import swal from "sweetalert"
// import { useNavigate } from 'react-router-dom';



const Login = () => {

  const dispatch =useDispatch();

  const newInfo= useSelector(state=>state.user.login)

  const [newData, setNewData]= useState(
    {
      
      email:"",
      password:""
    }
  )

  useEffect (()=>{
    const { user, success, error} = newInfo;
console.log(newInfo);
    if (success ){
      swal({
        icon: "success",
        text:"Login successful"
      })
    }else if (error !==""){
      swal({
        icon: "error",
        text:error
      })
    }
  }, [newInfo])

  useEffect(()=>{
    return ()=>{
dispatch(loginReset())
    }
  },[])
 
  const handleLogin = (e) =>{
    e.preventDefault();

    dispatch(login(newData));
  };

  return (<div className='login'>
     <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email"
         placeholder=""
         value={newData.email}
         onChange={(e)=>{
             setNewData({...newData, email:e.target.value});
         }}
          />
        <label>Password</label>
        <input type="password" 
        placeholder=""
        value={newData.password}
        onChange={(e)=>{
            setNewData({...newData, password:e.target.value});
        }} />
       
        {/* <input type="button" value="Submit" /> */}
        <button onClick={handleLogin}>Login</button>
      </form>
      <p class="para-2">
      Not having an account? <Link to="/signup">Signup here</Link>
    </p>
  </div>);
 
};
export default Login;



