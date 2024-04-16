const mongoose=require('mongoose');
require('dotenv').config();

const conectdb= async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGODB_URL_LOCAL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=conectdb;