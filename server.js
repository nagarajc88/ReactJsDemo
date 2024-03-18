const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use('api/login',(req,res)=>{
    res.send({
        token:"123",
    })
});
app.listen(8080,()=> console.log());

