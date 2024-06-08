const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

     let  transport= nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{user:"dev.hossain29@gmail.com",pass:"ezfy evpz dget nfne"},
            tls:{rejectUnauthorized:false}
        })


    let mailOption={
         from:'MERN Ecommerce Solution <dev.hossain29@gmail.com>',
         to:EmailTo,
         subject:EmailSubject,
         text:EmailText
    }

    return await transport.sendMail(mailOption)
}

module.exports=EmailSend;