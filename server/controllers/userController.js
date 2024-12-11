import User from '../models/userModel.js'

export const getUsersFoSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;

        // {_id: {$ne: loggedInUserId}} -> this portion will prevent our own chat from displaying in sidebar
        const filteredUsers = User.find({_id: {$ne: loggedInUserId}}).select("-passowrd");

        return res.status(200).json({success: true, filteredUsers});
    }catch(error) {
        console.log('Error in getUsersFroSidebar ',error.message);
        return res.status(500).json({success: false, error: 'Get Users Server Error'});
    }
}