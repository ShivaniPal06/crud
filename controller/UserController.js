const User = require('../model/UserModel')    //two dots representing the folder named as 'BACKEND' and subfolder named as 'model' and the file name is 'userModel.js'


//creating a function to create a new user
const createUser = async (req, res) => {
    // const { fname, lname, email, password } = req.body
    try {
        const { fname, lname, email, password } = req.body
        const user = new User({ fname, lname, email, password }); //creating a new user
        await user.save(); //saving the user in the database
        // const user = await User.create({ name, email, password })
        res.status(200).json({ message: "User created successfully!" })
    } catch (error) {
        res.status(500).json({ message: "Server Error", error:error.message });
    }
}

//getting all users data from the database
const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json( user )
    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: "Server Error", error:error.message });
    }
}

//getting spesific(single) user data from the database
const singleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json( user )
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error:error.message });
    }
}

//updating user data in database
const updateUser = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body
        const myUser = await User.findByIdAndUpdate(req.params.id, { fname, lname, email, password })
        res.status(200).json( myUser )
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error:error.message });
    }
}

//deleting user data from the database
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json( user )
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error:error.message });
    }
}

module.exports = { createUser, getUser, singleUser, updateUser, deleteUser };