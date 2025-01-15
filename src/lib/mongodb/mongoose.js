import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('MongoDB alrteady connected');
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            dbName: 'nextauth',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');
        initialized = true;
    } catch(error) {
        console.log('MongoDB connection error:', error);
    }
}