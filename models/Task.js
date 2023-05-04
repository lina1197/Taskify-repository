import mongoose from 'mongoose';

// Define the schema for the Task collection
const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  priority:{
    type: String,
    enum: [null,'low', 'medium','high'],
    default : null},
 
});
// taskSchema.statics.filterByPriority = async function(priority) {
//   const tasks = await this.find({ priority: priority });
//   return tasks;
// };


const Task = mongoose.model('Task', taskSchema);

export default Task;
