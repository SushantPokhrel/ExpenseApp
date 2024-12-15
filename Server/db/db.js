const mongoose = require('mongoose')
const db = async ()=>{
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb Connected Sucessfully");
    } catch (error) {
        console.log("MongoDb connection error:",error);
    }
}
module.exports = {
    db
}