// each controller needs to be exported seperately
// ----- get all Users Controller ------ //
import User from '../models/User.js';
export const getAllUsers = async (req, res) => {
    try {
        // .find is mongoose query method
        const allUsers = await User.find();
        if (allUsers) {
        res.status(200).json({ users: allUsers });
        } else {
        res.status(404).send("There is no Users");
        }
    } catch (err) {
        res.status(500).json(err);
}
};

// ----- get single User Controller ------ //
export const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const findUser = await User.findById(id);
        if (findUser.length == 0) {
        res.status(404).send("There is no User matching this ID");
       } else {
        res.status(200).json(findUser);
        }
    } catch (err) {
        res.status(500).json(err)
    }
};
// ----- create new Users Controller ------ // use async await
export const createNewUser = async (req, res) => {
    try {
        // use .create function to create a new document in a collection
        const { first_name, last_name, email } = req.body;
        const newUser = await User.create({ first_name, last_name, email });
        // console.log(newUser);
        res.status(201).json(newUser)
    } catch(err) {
        res.status(500).json(err)
    }
};
// ----- delete Users Controller ------ //
export const deleteOneUser = async (req, res) => {
    try {
            const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).send("User successfully deleted")
    } catch (err) {
        res.status(500).json(err);
    }
};
// ----- update User Controller ------ //
export const updateOneUser = async (req, res) => {
    try {
        // to update user fid it by id - put route at :/id - get id from params
        const { id } = req.params;
        // save content to update in variable
        const { first_name, last_name, email } = req.body;
        // use the findByIdAndUpdate method pass id to find body to update
        // new option is a boolean - true or false - true to return the modified document!!! by default false
        const updateUser = await User.findByIdAndUpdate(
            id,
            { fist_name, last_name, email },
            { new: true }
        );
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json(err);
    }
};