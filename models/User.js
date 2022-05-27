import mongoose from "mongoose";

// get schema and model method from mongoose 
//thats how you get methods out of a no es library
const { Schema, model } = mongoose;

// we create a schema to tell how every user document should look like
const userSchema = new Schema({
    first_name: String,
    last_name: Strings,
    // required means the field is becoming a mandatory field to fill in
    email: {type: String, required: true}
});

// use model method to create a collection called UserS
export default model.("User", userSchema);