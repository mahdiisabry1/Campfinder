import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Stores te suer objectId
    ref: "User",
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
