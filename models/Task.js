import mongoose from 'mongoose';

// Define the schema for the Task collection
const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  priority:{
    type: String,
    enum: [null,'low', 'medium','high'],
    default : null}
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
