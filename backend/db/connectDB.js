import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected Sucessfully");
    } catch (error) {
        console.log(`Error in connecting DB : ${error}`)
        process.exit(1);
    }
}
export default connectDB;