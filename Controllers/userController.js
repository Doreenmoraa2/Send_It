const mssql = require('mssql')
const config = require('../config/config')
const{v4:uuidv4}=require('uuid')



  //register user
  async function createUsers (req, res){
    const {id, username, full_name, phone_number, email, password, isAdmin, isDeleted, isSent} = req.body
    console.log(username)
    try {
      let pool = await mssql.connect(config)
      await pool.request()
      .input('id', mssql.VarChar, uuidv4 (id))
      .input('username',mssql.VarChar, username)
      .input('full_name',mssql.VarChar, full_name)
      .input('phone_number', mssql.VarChar, phone_number)
      .input('email', mssql.VarChar, email)
      .input('password', mssql.VarChar, password)
      .input('isAdmin',mssql.Int, isAdmin)
      .input('isDeleted',mssql.Int, isDeleted)
      .input('isSent',mssql.Int, isSent)
      .execute('createUsers')
      res.send("Registration successful!")
    } catch (err) {
      console.log(err);
    }
  }
  
  //login user
  async function loginUser (req, res){
    const {email, password} = req.body
    try {
      let pool = await mssql.connect(config)
      let {recordset} = await pool.request()
      .input('email', mssql.VarChar, email)
      .input('password', mssql.VarChar, password)
      .execute('loginUser')
      const user = recordset[0];
      res.json(results)
    } catch (err) {
      console.log(err);
    }
  }
  //getUser
  async function getAUser(req,res){
    const id=req.params.id
    try{

      let pool = await mssql.connect(config)
      let answ = await pool.request()
      .input('id', mssql.VarChar, id)
      .execute('getAUser')
      res.send(answ.recordset)
    } catch (err) {
      console.log(err);
    }
  }

//fetch all users
async function getUsers (req, res){
    try{
      await mssql.connect(config);
      const results = await (new mssql.Request())
      .execute('getUsers');
      res.send(results.recordset);
    }
    catch (err){
      console.log(err);
    }
  }
  
  //delete a user
  async function deleteUsers (req, res){
    const id = req.params.id
    try {
      let pool = await mssql.connect(config)
      let answ = await pool.request()
      .input('id', mssql.VarChar, id)
      .execute('deleteUsers')
      res.send("User deleted!")
    } catch (err) {
      console.log(err);
    }
  }
 
  //update user
  async function updateUsers (req, res){
    const id = req.params.id;
    const {username, full_name, phone_number, email, password, isAdmin, isDeleted, isSent} = req.body
    try {
      let pool = await mssql.connect(config)
      await pool.request()
      .input('id', mssql.VarChar, id)
      .input('username', mssql.VarChar, username)
      .input('full_name', mssql.VarChar, full_name)
      .input('phone_number', mssql.VarChar, phone_number)
      .input('email', mssql.VarChar, email)
      .input('password', mssql.VarChar, password)
      .input('isAdmin', mssql.Int, isAdmin)
      .input('isDeleted', mssql.Int, isDeleted)
      .input('isSent', mssql.Int, isSent)
      .execute('updateUsers')
      res.send("User updated!")
    } catch (err) {
        
      console.log(err);
    }
  }

  module.exports = {createUsers, getAUser, getUsers, deleteUsers, updateUsers, loginUser}
  
  