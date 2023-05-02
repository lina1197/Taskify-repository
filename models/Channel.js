import mongoose from "mongoose";
// Define the schema for the Channel collection
const channelSchema = new mongoose.Schema({
  name: String,
});
const Channel = mongoose.model("Channel", channelSchema);
export default Channel;
