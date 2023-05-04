import mongoose from "mongoose";
// Define the schema for the Channel collection
const channelSchema = new mongoose.Schema({
  name: String,
});
// channelSchema.statics.filterByCategory = async function(name) {
//   const channel = await this.find({ name: name });
//   return channel;
// };
const Channel = mongoose.model("Channel", channelSchema);
export default Channel;
