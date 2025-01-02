// Database connection logic

import mongoose from 'mongoose';
import {NextResponse} from "next/server";

const connectDB = async () => {
    // Check if connection is already established
    if (mongoose.connection.readyState >= 1) {
        return; // Connection already established
    }

    const dbURI = process.env.MONGODB_URI;

    // Check if dbURI is defined
    if (!dbURI) {
        throw new Error('Please define the MONGODB_URI environment variable.');
    }

    try {
        // Connect to the MongoDB database
        await mongoose.connect(dbURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Could not connect to the database');
    }
};

export default connectDB;