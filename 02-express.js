let express = require('express')
let app = express();

app.get('/', (req, res) => {
    res.write("Data received")
    res.end();
})
app.get('/data', (req, res) => {
    res.write("Data received")
    res.end();
})
let port = 8090
app.listen(8080)
console.log("listening port number:"+port)