// npm init -y  commond se package.json file created

// console.log('building server in node.js')

import http from 'http'
const server = http.createServer((req,res) =>{
//     console.log(req.url)
// res.end("<h1>You are requesting something</h1>");

if(req.url=== '/wdm'){
    res.end("welcome to the node js")
}else if(req.url=='/srk'){
    res.end("we are not able")
} else {
    res.end('invalid request')
}

});


const port =3000;
server.listen(port,()=>console.log(`server is running on port ${port}`))
