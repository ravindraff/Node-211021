let http = require("http")
let url = require("url")
let server = http.createServer((req,res)=>{
    let obj = url.parse(req.url,true).query
    uname = obj.uname
    pwd = obj.pwd
    if(uname==="ashok" && pwd==="123"){
        res.write("Login success");
    }else{
        res.write("Login failure");
    }
    res.end()
})
server.listen(8080)
console.log("Server Listening Port : 8080")
