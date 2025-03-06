import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
