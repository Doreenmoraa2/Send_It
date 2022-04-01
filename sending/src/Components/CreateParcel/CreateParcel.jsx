
import './CreateParcel.css';
import {useDispatch,useSelector} from 'react-redux';
import React,{useState} from 'react';
import { useEffect } from 'react';



const CreateParcel = ()=> {

    const dispatch =useDispatch();
  
    const newParcelInfo= useSelector(state=>state.parcel.createparcel)
  
    const [newParcelData, setNewParcelData]= useState(
      {
        
        description:"",
        sender_number:"",
        receiver_number:"",
        start_location:"",
        end_location:""
      }
    )
    useEffect (()=>{
        const { parcel,success, error} = newParcelInfo;
    
        if (success){
          console.log('Parcel created successful')
        }else{
          console.log(`Parcel creation failed: ${error}`);
        }
      }, [newParcelInfo])
    
      const handleCreateparcel = (e) =>{
        e.preventDefault();
    
        dispatch(CreateParcel(newParcelData));
      };
  

    return(<div className='CreateParcel'>

     <form >
     <label>Description</label>
    <input type="text" 
    placeholder="write.."
    value={newParcelData.description}
    onChange={(e)=>{
        setNewParcelData({...newParcelData, description:e.target.value});
    }}
    />
    <label>Sender_Number</label>
    <input type="text" 
    placeholder="+254...." 
    value={newParcelData.sender_number}
    onChange={(e)=>{
        setNewParcelData({...newParcelData, sender_number:e.target.value});
    }}/>
    <label>Receiver_Number</label>
    <input type="text"
     placeholder="+254...."  
     value={newParcelData.receiver_number}
     onChange={(e)=>{
        setNewParcelData({...newParcelData, receiver_number:e.target.value});
     }}

     />
    <label>Start_Location</label>
    <input type="text" 
    placeholder="...." 
    value={newParcelData.start_location}
    onChange={(e)=>{
        setNewParcelData({...newParcelData, start_location:e.target.value});
    }}
     />
    <label>End_Location</label>
    <input type="text" 
    placeholder=""   
    value={newParcelData.end_location}
    onChange={(e)=>{
        setNewParcelData({...newParcelData, end_location:e.target.value});
    }}
    />
    {/* <input type="button" value="Submit" /> */} 
     <button onClick={handleCreateparcel}>Create</button>


    </form> 
    
    </div>
    );
}
export default CreateParcel;