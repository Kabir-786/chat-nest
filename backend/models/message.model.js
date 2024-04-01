import mongoose from "mongoose";

// Define the schema for the message
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },

    message: {
        type: String,
        required: true
    },


},
    { timestamps: true }
);

// Create a model from the schema
const Message = mongoose.model('Message', messageSchema);

// Export the model
export default Message;
