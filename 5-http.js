const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end("Here is a short history about us")
    }
    res.end(`<h1>Oops!</h1> <p>Sorry we can't find the page you're looking for</p> <a href='/'>GO BACK</a>`)
})

server.listen(5000)