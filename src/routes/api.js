const express=require('express');
const DemoController=require('../controller/DemoController');
const AuthVerification=require('../middlewares/AuthVerification')


const router=express.Router();

router.get('/demoList', DemoController.demoUserList)


module.exports=router;