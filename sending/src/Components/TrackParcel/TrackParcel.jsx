import React from 'react';
import './TrackParcel.css' ;

const TrackParcel = () => {
  return (<div className='track'>
   
   <div className='track1'>
     <p className='tracker1'>Parcel No</p>
     <p className='tracker1'>Description</p>
     <p className='tracker1'>Current_Location</p>
     <button className='trackbtn'>Cancel</button> 
   </div>
  </div>);
};
export default TrackParcel;