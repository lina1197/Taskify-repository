import mongoose from 'mongoose';

// Define the schema for the Task collection
const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
