const mssql = require('mssql')
const config = require('../config/config')
const{v4:uuidv4}=require('uuid')

//get all parcel  orders
async function getParcels (req, res){
    try{
      await mssql.connect(config);
      const results = await (new mssql.Request).execute('getParcels');
      res.send(results.recordset);
    }
    catch (err){
      console.log(err);
    }
  }
 
  // a specific parcel delivery 
  async function getAParcel (req, res){
    const id = req.params.id
    try {
      let pool = await mssql.connect(config)
      let results = await pool.request()
      .input('id', id)
      .execute('getAParcel')
      res.json(results)
    } catch (err) {
      console.log(err);
    }
  }
 
   // a specific user
   async function getaParcel (req, res){
    
    try {
      let pool = await mssql.connect(config)
      let results = await pool.request()
     
      .execute('getaParcel')
      res.send(results)
    } catch (err) {
      console.log(err);
    }
  }
 
  //cancel the specific parcel  order
  async function deleteParcel (req, res){
    const id = req.params.id
    try {
      let pool = await mssql.connect(config)
      let answ = await pool.request()
      .input('id',id)
      .execute('deleteParcel')
      res.json("Parcel delivery order cancelled!")
    } catch (err) {
      console.log(err);
    }
  }
  
  //create a parcel delivery order
  async function createParcel (req, res){
    const {id, description, sender_number, receiver_number, start_location, end_location, isDeleted, isUpdated, isSent, isDelivered, current_location, sender_id} = req.body
    try {
      let pool = await mssql.connect(config)
      await pool.request()
      .input('id', mssql.VarChar, uuidv4 (id))
      .input('description', mssql.VarChar, description)
      .input('sender_number', mssql.VarChar, sender_number)
      .input('receiver_number', mssql.VarChar, receiver_number)
      .input('start_location', mssql.VarChar, start_location)
      .input('end_location', mssql.VarChar, end_location)
      .input('isDeleted', mssql.Int, isDeleted)
      .input('isUpdated', mssql.Int, isUpdated)
      .input('isSent', mssql.Int, isSent)
      .input('isDelivered', mssql.Int, isDelivered)
      .input('current_location', mssql.VarChar, current_location)
      .input('sender_id', mssql.VarChar, sender_id)
      .execute('createParcel')
      res.json("You have successfully created a parcel!")
    } catch (err) {
      console.log(err);
    }
  }

   //update a parcel delivery order
   async function updateParcel (req, res){
       const id = req.params.id
    const {description, sender_number, receiver_number, start_location, end_location, isDeleted, isUpdated, isSent, isDelivered, current_location, sender_id} = req.body
    try {
      let pool = await mssql.connect(config)
      await pool.request()
      .input('id',id)
      .input('description', mssql.VarChar, description)
      .input('sender_number', mssql.VarChar, sender_number)
      .input('receiver_number', mssql.VarChar, receiver_number)
      .input('start_location', mssql.VarChar, start_location)
      .input('end_location', mssql.VarChar, end_location)
      .input('isDeleted', mssql.Int, isDeleted)
      .input('isUpdated', mssql.Int, isUpdated)
      .input('isSent', mssql.Int, isSent)
      .input('isDelivered', mssql.Int, isDelivered)
      .input('current_location', mssql.VarChar, current_location)
      .input('sender_id', mssql.VarChar, sender_id)
      .execute('updateParcel')
      res.json("You have successfully updated a parcel delivery order!")
    } catch (err) {
      console.log(err);
    }
  }
 
  module.exports = {getParcels, getAParcel, getaParcel, deleteParcel, createParcel, updateParcel}