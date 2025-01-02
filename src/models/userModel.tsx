// Mongoose user model

import mongoose, {Document, Schema} from 'mongoose';

// Define the interface for the User document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string; // This should be hashed in a real application
    createdAt: Date;
    updatedAt: Date;
}

// Create the User schema
const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // Automatically create createdAt and updatedAt fields
    }
);

// Export the User model, if it exists; otherwise, create it
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);