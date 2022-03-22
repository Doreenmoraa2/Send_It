const express = require("express");
const app = express();
const mssql = require('mssql')
const config = require('./config/config')
app.use(express.json());

app.use('/users', require('./Routes/userRouter'))
app.use('/parcel', require('./Routes/parcelRouter'))
mssql.connect(config).then(pool => {
  if(pool.connecting){
    console.log(" DB Connecting!");
  }
  if(pool.connected){
      console.log("connected");
  }
  
}).catch(e => console.log(e))

const port= 5000;
app.listen(port, () =>
  console.log("Express server is runnig at port no : 5000")
);

