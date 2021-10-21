import * as express from "express";
import transactions from './transactions'
import cards from './cards'
import accounts from './accounts'
let app:any = express();
app.use("/module1",accounts)
app.use("/module2",transactions)
app.use("/module3",cards)
app.listen(8091,()=>{
    console.log("Server Started Successully.......")
})