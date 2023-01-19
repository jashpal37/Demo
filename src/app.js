const express = require('express');
const app = express();
const User = require('./models/user');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
require("./db/conn");

app.get('/', (req, res) => {
    res.send("Hello from Express");
});

app.post('/register', async (req, res) => {
    try{
        const registerEmployee = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        });
        const user = await registerEmployee.save();
        res.status(201).send(user);
    }catch(err){
        console.log(err);
    };
});
app.listen(3000, () => { 
    console.log("Server is running on port 3000");
});