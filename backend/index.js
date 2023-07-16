var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json())

const multer = require('multer');

var cors = require('cors');
app.use(cors());

const filename1= Date.now() +"-"+
Math.round(Math.random()*999999);



const pictureUpload = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'images/');
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname +'-'+filename1+'.jpg');
    },
});

const upload = multer({storage: pictureUpload});

//set base path

app.get("/",function(req,res){
    res.send("ok");
});

//upload pic Api

app.post('/uploadpic', upload.single("picture"),function(req,res){
    res.send("Single File upload success");
});


app.listen(5000,()=>{
    console.log("app is running on port 5000")

})