import * as express from "express";
let app:any = express();
app.get("/sample/user/:uname/pwd/:upwd",(req:any,res:any):any => {
    let uname = req.params.uname
    let upwd = req.params.upwd
    if (uname==="ravi"&&upwd==="123") {
        res.status(200).json({login:"success"})
    }else{
        res.status(500).json({login:"fail"})
    }
})
app.get("/sample1",(req:any,res:any):any=>{
    let uname = req.query.uname
    let upwd = req.query.upwd
    if(uname==="ravi" && upwd==="123"){
        res.status(200).json({message: "Login Success"})
    }else{
        res.status(500).json({message: "Login Failure"})
    }
})
app.listen(8080,()=>{
    console.log("server started successfully......")
})