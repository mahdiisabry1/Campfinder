import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const CampGround = mongoose.model("CampGround", CampGroundSchema);
export default CampGround;
