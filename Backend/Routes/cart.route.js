const express=require("express");
const { CartModel } = require("../model/cart.model");

const CartRouter=express.Router();

CartRouter.get("/",async(req,res)=>{
    // const payload=req.body;
    // const userID_in_req=req.body.userID;
    try {
       const posts=await CartModel.find()
       res.send(posts); 
    } catch (error) {
        
    }
})

CartRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    const posts=await CartModel.find({id:payload.id})
    console.log(posts);
    try {
        if (posts.length>0){
            res.send("Item already in your cart")
        } 
        else {
            const new_post=new CartModel(payload);
            await new_post.save();
            res.send("Added in cart");
        }
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})

CartRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    const post =await CartModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
        if(userID_in_post!==userID_in_req){
            res.send({"msg":"You are not authorized"});
        }
        else{
          await CartModel.findByIdAndUpdate({"_id":id},payload)
          res.send("update the cart");
        }
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})


CartRouter.delete("/delete/:id",async(req,res)=>{
    // const payload=req.body;
    const id=req.params.id;
    const post =await CartModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
        if(userID_in_post!==userID_in_req){
            res.send({"msg":"You are not authorized"});
        }
        else{
          await CartModel.findByIdAndDelete({"_id":id})
          res.send("Deleted the post the cart");
        }
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})

module.exports={
    CartRouter
}