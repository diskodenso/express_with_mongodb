// import dotenv
import 'dotenv/config.js';
// import express
import express from 'express';

// call express function in an variable called "app"
const app = express();
// let server know which port to use
const port = process.env.PORT || 5000;
// call express middleware on the whole app to transcript response to json
app.use(express.json());
// call middleware to use main entry route
app.use("/api/users", usersRouter);

//Api Documentation
app.get("/", (req, res) => {
    res.send("<h1>Wir erstellen eine API mit mongoose</h1>");
});

// use listen function on app
app.listen(port, () => console.log(`Server is running on ${port}`));