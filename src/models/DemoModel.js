const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        name:{type:String, required:true},
        description:{type:String, required:true}
    },
    {timestamps:true,versionKey:false}
)
const UserModel=mongoose.model('users',DataSchema)
module.exports=UserModel