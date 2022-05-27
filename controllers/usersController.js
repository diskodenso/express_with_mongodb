// each controller needs to be exported seperately
// ----- get all Users Controller ------ //
export const getAllUsers = (req, res) => {
    
};

// ----- get single User Controller ------ //
export const getSingleUser = (req, res) => {
    
};
// ----- create new Users Controller ------ // use async await
export const createNewUser = async (req, res) => {
    try {
        // use .create function to create a new document in a collection
        const { first_name, last_name, email } = req.body;
        const newUser = await User.create({ first_name, last_name, email });
        console.log(newUser);
    } catch(err) {
        res.status(500).json(err)
    }
};
// ----- delete Users Controller ------ //
export const deleteOneUser = (req, res) => {
    
};
// ----- update User Controller ------ //
export const updateOneUser = (req, res) => {
    
};