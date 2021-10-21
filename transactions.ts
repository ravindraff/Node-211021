import * as express  from 'express'
let transactions:any = express.Router()
transactions.get('/',(req:any, res:any):any => {
    res.status(200).json({message:"Transactions Default Get"})
})
transactions.get('/data',(req:any, res:any):any => {
    res.status(200).json({message:"Transactions URL Get"})
})
export default transactions
