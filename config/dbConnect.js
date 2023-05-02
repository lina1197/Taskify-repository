import mongoose from 'mongoose';
import 'dotenv/config';
const connectDB = async () => {
    try {
        const URI=process.env.URI;

        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).then(() => {
            console.log("connected");
        }).catch((err) => {
            console.error(err);
        });
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;
