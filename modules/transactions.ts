import * as express from "express";
let tranactions:any = express.Router();
let auth1:any = (req:any,res:any,next:any):any => {
    let allHeaders:any = req.headers
    let token:any = allHeaders.token
    if(token==="abc"){
        next();
    }else{
        res.status(500).json({auth:"Token Authentication Failure"});
    }
}
let auth2:any = (req:any,res:any,next:any):any => {
    let allHeaders:any = req.headers
    let wish:any = allHeaders.wish
    if(wish==="hello"){
        next();
    }else{
        res.status(500).json({auth:"Wish Authentication Failure"});
    }
}
tranactions.get("/",[auth1,auth2],(req:any, res:any):any=>{
    res.status(200).json({message:"Welcome to Transactions module"})
})

export default tranactions;