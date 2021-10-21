import * as express from "express";
let accounts:any = express.Router();
accounts.get("/",(req:any, res:any):any=>{
    res.status(200).json({message:"Welcome to accounts module"})
})
accounts.post("/login",(req:any, res:any):any => {
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({message:"Login successful"})
    }else{
        res.status(403).json({message: "Login Failure" })
    }
})
export default accounts