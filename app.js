const express =require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
// const https=require("https");

let tasks=[];  // Making array of the new tasks
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs'); 

app.get("/",(req,res)=>{

    let dayDate=date();
    res.render("list",{listTitle:dayDate,newTask:tasks}) ;     // ejs list.ejs ko dhundega views folder ke andar fir {key:value}


})

app.post("/",(req,res)=>{
    
    let task=req.body.addTask; 
    if(req.body.list==="Work"){         // yaha list button ka name hai
        workItems.push(task);
        res.redirect("/work");
    }
    else{
        tasks.push(task);
        res.redirect("/");

    }
    // console.log(task);
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",newTask:workItems});
})

app.get("/about",(req,res)=>{
    res.render("about");
})
 

app.listen(80,()=>{
    console.log("Server is running at port 80");
})


//   Purane tarike naya tarika sikho
    // let currentDay=today.getDay();
    // let day="";
    // switch (currentDay) {
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    // }