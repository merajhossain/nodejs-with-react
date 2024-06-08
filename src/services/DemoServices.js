
const DemoModel = require('../models/DemoModel');
const mongoose = require("mongoose");

const DemoUserListService = async (req) => {
    try {
        let data = await DemoModel.find();
        return {status:"success",message:"Wish List Save Success", data: data}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const DemoUserSaveService = async (req) => {
    try {
        let reqBody=req.body;
        let data=await DemoModel.create(reqBody)
        return {status:"success",message:"Wish List Save Success", data: data}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }

}
const DemoUserUpdateService = async (req) => {
    try {
        let reqBody=req.body;
        let data=await DemoModel.updateOne(reqBody)
        return {status:"success",message:"Wish List Save Success", data: data}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const DemoUserDeleteService = async (req) => {
    try {
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartModel.deleteOne(reqBody);
        return {status:"success",message:"Cart List Remove Success"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

module.exports = {
    DemoUserListService,
    DemoUserSaveService,
    DemoUserUpdateService,
    DemoUserDeleteService
}
