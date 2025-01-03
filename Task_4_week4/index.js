const http =require('http');
const port =process.env.PORT || 3000;
const {parse} =require('url');

let users=[];
let nextId= 1;

const server =http.createServer((req, res)=>{
    const parsedUrl =parse(req.url, true);
    const method=req.method;
    console.log(parsedUrl.pathname, method)

    res.setHeader('Content-Type', 'application/json');

    //GET /users: Return all users
    if(method === 'GET' && parsedUrl.pathname === '/users'){
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }
    else if(method === 'POST' && parsedUrl.pathname === '/users'){
        let body ='';

        req.on('data', chunk =>{
            //each chunk is a buffer needs to be converted to string
            body+= chunk.toString();
        })
        req.on('end', ()=>{
            const newUSer =JSON.parse(body);
            newUSer.id=nextId++;
            users.push(newUSer);
            res.writeHead(201);//201 --new user has been successfully created
            res.end(JSON.stringify(newUSer));
        })
    }
    else if(method === 'PUT' && parsedUrl.pathname.startsWith('/users/')){ // targeting users based on their id
        const id = parseInt(parsedUrl.pathname.split('/')[2], 10);  //extract user ID from the URL
        let body ='';
        req.on('data', chunk =>{
            //each chunk is a buffer needs to be converted to string
            body+= chunk.toString();
        })
        console.log("BOdy", body)
        req.on('end',()=>{
            const updatedData = JSON.parse(body);
            const index = users.findIndex(user=>user.id === id);
            console.log("Index", index, users)
            if(index!== -1){
                users[index]={...users[index], ...updatedData};
                res.writeHead(200); // 200 --ok update was successful
                res.end(JSON.stringify(users[index]));
            }
            else{
                res.writeHead(404); //404  not found status code 
                res.end(JSON.stringify({message: 'user not found'}));
            }
        })

    }
    else if(method === '/DELETE' && parsedUrl.pathname.startsWith === '/users/'){ // targeting users based on their id
        const id = parseInt(parsedUrl.pathname.split('/')[2], 10);  //extract user ID from the URL
            const index =users.findIndex(user=>user.id === id);
            if(index!== -1){
                users.splice(index, 1);
                res.writeHead(200); // 200 --ok update was successful
                res.end(JSON.stringify(users[index]));
            }
            else{
                res.writeHead(404); //404  not found status code 
                res.end(JSON.stringify({message: 'user not found'}));
            }
    }
    else{
        res.writeHead(404);
        res.end(JSON.stringify({message: 'Not found'}));
    }

});

server.listen(port, ()=>{
    console.log("App is running on port", port);
});

    


