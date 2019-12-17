import express = require("express");
const app = express();

let count = 0;
app.get("/", (req, res) => {
    count++;
    res.send(`Index Page<br>あなたは\${count}番目の訪問者です。`);
});

app.get("/foo", (req, res) => res.send("Foo Page"));

const port = 3000;
app.listen(port, () => console.log("Listening on port " + port));
