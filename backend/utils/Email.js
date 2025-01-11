import nodemailer from 'nodemailer'

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

const sendEmail=async(to,subject,html)=>{
    try {
        const mailOptions={
            from:process.env.EMAIL_USER,
            to,
            subject,
            html
        }
        const info=await transporter.sendMail(mailOptions)
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export {sendEmail}