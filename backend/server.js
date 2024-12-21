import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";
import authRoute from './routes/auth.route.js'
dotenv.config();
const app=express();
const PORT = process.env.PORT;
app.use(express.json());
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
    connectDB();
});
app.use("/api/auth",authRoute);
