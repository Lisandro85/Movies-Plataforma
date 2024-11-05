require("dotenv").config();
const mongoose=require("mongoose");

const dbCon= async ()=>{
await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.l29xq.mongodb.net/${process.env.DB_NAME}`);
};

module.exports=dbCon;

