import express from "express";
import bodyParser from "body-parser";
const port = process.env.PORT || "3000";
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const arr = [];

let create = function(req,res){
          let data = req.body;
          arr.push(data);
          res.send(arr);
}

let read = function(req,res){
    res.send(arr);
}

let update = function(req,res){
    let n = req.params.num;
    let updarr = arr.findIndex(obj => obj.id == n);
    arr[updarr].name = "Virendra Pathak";
    res.send(arr[updarr]);
}

let delet = function(req,res){
    let n = req.params.num;
    let deleted = arr.splice(n,1);
    res.send(deleted);
}

app.get("/",read);

app.post("/",create);

app.put("/:num",update);

app.delete("/:num",delet);

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
});