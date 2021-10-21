import * as express from "express";
let app:any = express();
let auth:any = (req:any,res:any,next:any):any => {
    let allHeaders = req.headers;
    if(allHeaders.token==="admin"){
        next();
    }else{
        res.status(500).json({auth:"Authentication Fail"});
    }
}
app.get("/login",[auth], (req:any, res:any):any => {
    let user = req.query.user
    let password = req.query.password
    if(user==="admin"&&password==="123"){
        res.status(200).json({success:"Login Success"})
    }else{
        res.status(403).json({success:"Login Failure"})
    }
})
app.listen(8080,()=>{
    console.log("Server Statred Successully..........");
})