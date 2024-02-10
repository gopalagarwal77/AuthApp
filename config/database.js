const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("db connected successfully");
    })
    .catch( (err) =>{
        console.log("error connecting");
        console.error(err); 
        process.exit(1);
    });
}
