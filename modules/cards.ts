import * as express from "express";
let cards:any = express.Router();
cards.get('/',(req:any, res:any):any => {
    res.status(200).json({message:"Welcome To Cards module"})
})
export default cards;