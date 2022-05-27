// create a client js & import mongoose like with pg admin
import mongoose from 'mongoose';

// create variable wich holds key
const uri = process.env.MONGI_URI;

// use .connect to create connection to mongoose - with .then().catch()
// mongoose.connect(uri).then(console.log("Connected")).catch((err) => console.log(err));
// use .connect to create connection to mongoose - with try / catch
try {
    await mongoose.connect(uri);
    console.log("Connected (mit try catch)");
} catch (error) {
    console.log(error);
}
