const express =require("express");
const bodyParser =require("body-parser");
const app= express();
app.use(bodyParser.json());
const port =process.env.PORT ||3000;

let users =[];
let nextId = 1;

app.get('/users', (req, res)=>{
    res.status(200).send(users);
});

app.post('/users', (req,res)=>{
    const newUser ={id: users.length+1, ...req.body};
    users.push(newUser);
    res.status(201).send(newUser);
})
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});

