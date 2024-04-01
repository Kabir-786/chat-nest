import User from '../models/user.model.js'

export const geUserBySidebar = async (req, res) => {
    try {

        const loggedUserId = req.user._id
        
        const filteredUser = await User.find({ _id: { $ne: loggedUserId } }).select("_password")
        
        return res.status(200).json(filteredUser)

    } catch (error) {
        console.log("Error in geUserBySidebar controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}