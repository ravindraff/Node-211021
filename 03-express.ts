import * as express from "express";
let app: any = express();
app.get('/', (req: any, res: any): any => {
    res.status(200).json({ message: "Welcome to Typescript" });
})
app.listen(8080)
console.log("Listening on port 8080");