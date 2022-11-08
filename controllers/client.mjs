import express from "express";
const getHome = (req, res, next) => {
    res.render("client/index");
}
export default getHome;