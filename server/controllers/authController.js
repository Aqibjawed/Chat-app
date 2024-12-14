import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signupUser = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({success: false, error: 'Passwords Do Not Match'})
        }

        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({success: false, error: 'Username already exists'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `http://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `http://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            confirmPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save()

            return res.status(201).json({
                success: true,
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic,
            })
        }else{
            return res.status(400).json({success: false, error: 'Invalid User data'})
        }
    } catch(error) {
        console.log(error.message)
        return res.status(500).json({success: false, error: 'Signup User server error'})
    }
}

export const loginUser = async (req, res) => {
    try{
        const {userName, password} = req.body;

        if (!userName || !password) {
            return res.status(400).json({ success: false, error: 'Username and password are required' });
        }        

        const user = await User.findOne({userName});
        if(!user){
            return res.status(404).json({success: false, error: 'Username Not Found'})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(404).json({success: false, error: 'Incorrect Password'})
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({
            success: true,
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic,
        })

    } catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, error: 'Login User server error'})
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 0})

        return res.status(200).json({message: "Logged Out Successfully"})
    } catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, error: 'Login User server error'})
    }
}