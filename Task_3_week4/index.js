const http = require('http');
const url = require('url');
const {parse} = require('querystring');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json');

    if(req.method == 'GET' && req.url === '/hello'){
        res.statusCode =200;
        res.end(JSON.stringify({message: 'Hello, World!'}));
    }
    else if (req.method === 'POST' && req.url ==='/data'){
        let body ='';

        req.on('data', chunk =>{
            body+= chunk;
        });
        req.on('end', ()=>{
            const parsedData =JSON.parse(body);
            res.statusCode =200;
            res.end(JSON.stringify({recievedData: parsedData}));
        });

        req.on('error', ()=>{
            res.statusCode =400;
            res.end(JSON.stringify({error : 'Invalid JSON data'}));
        });
    }
    else{
        res.statusCode =404;
        res.end(JSON.stringify({error: 'Resource not found'}));
    }
});

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});