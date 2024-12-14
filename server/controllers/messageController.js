import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req, res)=> {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId, 
            receiverId, 
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save()
        // await newMessage.save()

        // This will run in parallel saving time
        await Promise.all([conversation.save(), newMessage.save()]);
        
        // Socket io functionality will go here
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // io.to(socketId).emit() this method is used to send events to specific clients
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        return res.status(201).json(newMessage)
    } catch(error) {
        console.log('Error in message controller',error.message);
        return res.status(500).json({success: false, error: 'Send Message Server Error'});
    }
}

export const getMessage = async (req, res) => {
    try{
         const {id: userToChatId} = req.params;
         const senderId = req.user._id;
         const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId] },
         }).populate('messages');

         if(!conversation){
            return res.status(200).json([]);
         }

         const messages = conversation.messages;

         return res.status(200).json(messages);
    }catch(error){
        console.log('Error in message controller',error.message);
        return res.status(500).json({success: false, error: 'Get Message Server Error'});
    }
}