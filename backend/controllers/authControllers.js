import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";



export const SignUp = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password Doesn't Match" })
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "user already exists" })
        }

        //Hash Password here//
        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hassedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
console.log("PR newUser",newUser)
       if(newUser){
     generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();
        console.log("PR res",res)
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
       }
       else{
        res.status(400).json({error:"Invalid user data"})
       }

    } catch (error) {
        console.log("Error in SignupController", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}


export const Login = async (req, res) => {
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
const isPasswordCorrect=await bcrypt.compare(password,user?.password ||"");

if(!user || !isPasswordCorrect){
    return res.status(400).json({error:"Invalid username or password"})
}

generateTokenAndSetCookie(user._id,res);


res.status(200).json({
    _id:user._id,
    fullName:user.fullName,
    username:user.username,
    profilePic:user.profilePic,
});

    } catch (error) {
        console.log("Error in LoginController", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}



export const Logout = (req, res) => {

    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logout Successfully"})
        
    } catch (error) {
        console.log("Error in LoginController", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}