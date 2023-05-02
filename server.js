
import express from 'express';
import cors from 'cors';
// import TaskRouter from './routes/Task.js';
// import ProjectRouter from './routes/Project.js';
import bodyParser from 'body-parser';
import User from './models/User.js';

 const app = express();
 const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => console.log("Backend server live on " + port));
import connectDB from './config/dbConnect.js';
import TaskRouter from './routes/Task.js';
import ChannelRouter from './routes/Channel.js';

connectDB();

app.post('/insert', async(req, res) => {
    const FirstName = req.body.firstName
    const CompanyRole = req.body.companyRole

    const formData = new User({
        name: FirstName,
        role: CompanyRole
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});
app.use('/tasks', TaskRouter);
app.use('/channels', ChannelRouter);

