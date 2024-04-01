import mongoose from "mongoose";

// Define the schema for the conversation
const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    }],

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message', // Reference to the Message model
        default: []
    }],

},
    { timestamps: true }
);

// Create a model from the schema
const Conversation = mongoose.model('Conversation', conversationSchema);

// Export the model
export default Conversation;
