const {DemoUserListService} = require("../services/DemoServices");

exports.demoUserList=async (req,res)=>{
    let result=await DemoUserListService()
    return res.status(200).json(result)
}