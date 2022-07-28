//jshint esversion:6
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
    console.log(req)
    
});

app.post("/", function(req,res){
    var num1 = 
    console.log(Number(req.body.num1));
    var num2 = Number(req.body.num2);
    var res = num1 + num2;

    res.send("the sum of "+num1+" and " +num2+ " is : " + res)
})

//BMI CALCULATOR

 app.get("/bmiCalc", function(req, res){
    res.sendFile(__dirname+ "/bmiCalc.html")
 })

 app.post("/bmiCalc",function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);
     res.send("Your BMI is " + bmi);
 })

app.listen(3000,function(){
    console.log("This is running on server port 3000!")
});