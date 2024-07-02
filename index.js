//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req, res) => {
    if(req.body.password=== "Ahmed"){
    res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.redirect("/?error=1");

    }
  });



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});