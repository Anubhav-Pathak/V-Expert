import express from "express";
const getHome = (req, res, next) => {
    // res.render("client/index");
    res.send("<h1>Hello World</h1>")
}
export const getCart = (req,res,next)=>{
    // res.render("client/cart");
    res.send("<h1>cart section<h1>")
}
export const getServices = (req,res,next)=>{
    res.render("client/services",{});
}
export default getHome;
