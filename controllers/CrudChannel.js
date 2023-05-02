import Channel from "../models/Channel.js";
// const CreateChannel = async (req, res) => {
//   try {
//     const channel = new Channel(req.body);
//     const savedChannel = await channel.save();
//     res.status(201).json(savedChannel);
//   } catch (err) {
//     res.status(400).json({
//       error: err.message,
//       savedChannel: req.body 
//     });
//   }
// };

// const getChannelById = async (req, res) => {
//   try {
//     const channel = await Channel.findById(req.params.id);
//     if (!channel) {
//       return res.status(404).json({ message: "Channel not found" });
//     }
//     res.status(200).json(channel); 
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// const deleteChannelById = async (req, res) => {
//   try {
//     const channel = await Channel.findByIdAndDelete(req.params.id);
//     if (!channel) {
//       return res.status(404).json({ message: "Channel not found" });
//     }
//     res.status(201).json({ message: "Channel deleted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// const updateChannelById = async (req, res) => {
//   try {
//     const updatedChannel = await Channel.findByIdAndUpdate(
//       req.params.id, 
//       req.body, 
//       { new: true } 
//     );
//     if (!updatedChannel) {
//       return res.status(404).json({ message: "Channel not found" });
//     }
//     res.json(updatedChannel);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };
const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
export default getAllChannels;