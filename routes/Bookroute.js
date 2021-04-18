const express = require("express");
const router= express.Router();  
const Book = require('../models/Bookmodel.js');

router.post("/addbook",(req,res)=>{

    Book.create(req.body,function(err,newlycreatedbook){
         if (err){
             console.log(err);
         }
         else{
            
             res.json(newlycreatedbook);
             console.log(newlycreatedbook);
         } 
     })
 })

router.get("/getbook",(req,res)=>{
    Book.find({},function(err,booklist){
        if(err)
        {
            console.log(err);
        }
        else{
            
             res.json(booklist);

        }
    })
})

router.get("/getavailablebook",(req,res)=>{
    Book.find({"Availability":"true"},function(err,booklist){
        if(err)
        {
            console.log(err);
        }
        else{
            
             res.json(booklist);

        }
    })
})
router.get("/getnonavailablebook",(req,res)=>{
    Book.find({"Availability":"false"},function(err,booklist){
        if(err)
        {
            console.log(err);
        }
        else{
            
             res.json(booklist);

        }
    })
})
router.post("/updatebook/:id",function(req,res){
    Book.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }else{
            res.json("updated");
        }
    })
})
router.delete("/deletebook/:id",function(req,res){
    Book.findByIdAndRemove(req.params.id,function(err,deleted_customer){
        if(err){
            console.log("err is "+err)
        }
        else{
              res.send("deleted");
              console.log(deleted_customer)
        }
    })
})
router.post("/issuebook/:id",function(req,res){
    Book.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }else{
            res.json("issued");
        }
    })
})
router.get("/checkavailability",function(req,res){
    Book.find({ Name: req.query.Name, Author: req.query.Author},function(err,bookresult){
        if(err)
        {
            console.log("error");
        }
        else{
            res.json(bookresult)
        }
    })
})
 module.exports = router;