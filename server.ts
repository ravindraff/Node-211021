import * as express from "express";
let app:any = express();
import transactions from './transactions'
import accounts from './accounts'
app.use("/trans",transactions)
app.use("/acc",accounts)
app.listen(8080,()=>{
    console.log("Server Started Successully....")
});