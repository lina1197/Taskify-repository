import express from 'express';
import getAllTasks from '../controllers/CrudTask.js';

const TaskRouter = express.Router();

// TaskRouter.post('/create', CreateTask);
// TaskRouter.delete('/:id', deleteTaskById);
// TaskRouter.get('/:id', getTaskById);
// TaskRouter.get('/getAll', getAllTasks);

// TaskRouter.patch('/:id', updateTaskById);

TaskRouter.get('/getAll', getAllTasks);



export default TaskRouter;
