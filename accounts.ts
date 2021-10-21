import * as express from "express";
let account:any = express.Router()
account.get('/',(req:any, res:any):any => {
    res.status(200).json({message:"Accounts Deault Get"})
})
account.post('/',(req:any, res:any):any=>{
    res.status(200).json({message:"Accounts Deault Post"})
})
export default account