import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage=async(req,res)=>{
    try {
        const{message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
        
let conversation =await Conversation.findOne({
    participants:{$all:[senderId,receiverId]},
})

if(!conversation){
    conversation=await Conversation.create({
        participants:[senderId,receiverId],
    })
}

const newMessage=new Message({
    senderId,
    receiverId,
    message,
})

if(newMessage){
    conversation.messages.push(newMessage._id);
}
// this will not run parallel it waits for first one to run complete
// await conversation.save();
// await newMessage.save();

await Promise.all([conversation.save(),newMessage.save()])

res.status(201).json(newMessage);


    } catch (error) {
        console.log("Error in MessageContoller :",error.message)
        res.status(500).json({error:"Internal Server error"});
        
    }
}


export const getMessage=async(req,res)=>{
    try {
        const{id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");//Not a refrence but actual message

        if(!conversation)return res.status(200).json([]);

        const messages=conversation.messages;

        res.status(200).json(messages)
        
    } catch (error) {
        console.log("Error in the Get Message: ",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}