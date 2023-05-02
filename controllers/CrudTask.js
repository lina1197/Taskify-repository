

import Task from "../models/Task.js";
// const CreateTask = async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     const savedTask = await task.save();
//     res.status(201).json(savedTask);
//   } catch (err) {
//     res.status(400).json({
//       error: err.message,
//       savedTask: req.body 
//     });
//   }
// };

// const getTaskById = async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.status(200).json(task); 
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};


const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }
    res.send({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};

// const updateTaskById = async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       req.params.id, 
//       req.body, 
//       { new: true } 
//     );
//     if (!updatedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.json(updatedTask);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };


export {
  getAllTasks,
  deleteTaskById,
};