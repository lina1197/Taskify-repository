import express from 'express';


const TaskRouter = express.Router();
import { getAllTasks,deleteTaskById,CreateTask } from '../controllers/CrudTask.js';
TaskRouter.post('/create', CreateTask);
TaskRouter.delete('/:id',deleteTaskById )
// TaskRouter.get('/:id', getTaskById);
// TaskRouter.get('/getAll', getAllTasks);

// TaskRouter.patch('/:id', updateTaskById);

TaskRouter.get('/getAll', getAllTasks);



export default TaskRouter;