import express from "express";
import {CreateChannel,getAllChannels,deleteChannelById} from "../controllers/CrudChannel.js";
const ChannelRouter = express.Router();
ChannelRouter.get('/getAll', getAllChannels);
ChannelRouter.post('/create', CreateChannel);
ChannelRouter.delete('/:name', deleteChannelById);
// ChannelRouter.get('/:id', getChannelById);


// TaskRouter.patch('/:id', updateTaskById);



export default ChannelRouter;