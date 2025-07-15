"use server"
import { brevoApiInstance } from "@/lib/brevo-api-instance"
import { runRateLimiterCheck } from "@/utils/run-rate-limiter-check"
import { SendSmtpEmail } from "@getbrevo/brevo"
import {z, ZodError} from "zod"


type Params = {
    name: string | null,
    email: string | null,
    message: string | null
}

export const sendInterestEmail = async(params: Params)=>{

    //* I am sending both an email to myself notifying me that someone is interested and also an email to the person interested notifying them that I received their email.
    try{
        
        const isRateLimited = await runRateLimiterCheck()

        //* Check if the user is rate limited (only allow two emails per hour)
        if(isRateLimited){
            return {success: false, message: "You can only send two email per hour."}
        }

        const  result = _validateEmail(params)
        
        await _sendSelfEmail({name: result.name, email: result.email, message: result.message})

        await _sendEmailToRequester(result.name, result.email)
        
        return {success: true, message: "Email sent successfully"}
        
        
    }catch(e){
        if(e instanceof ZodError){
            const errrorMessages = e.issues.map((issue)=> issue.message)
            return {success: false, message: errrorMessages[0] as string}
        }
        
        console.dir(e, {depth: 3});
        return {success: false, message: 'Something went wrong: ' + e }
        
    }
}


const _validateEmail = ({name, email, message}: Params)=>{
    const emailSchema = z.object({
        name: z.string().min(1).max(100),
        email: z.string().email().min(1).max(100),
        message: z.string().min(1).max(1000)
    })
    
    return emailSchema.parse({name, email, message}) //$ ".parse" will throw an error if the data is invalid"
}

const _sendSelfEmail = async ({name, email, message}: Params)=>{

    const smtpEmail = new SendSmtpEmail()
    smtpEmail.sender = {email: 'miguel.mendez@miguel-mendez.click', name: 'Miguel'}
    smtpEmail.subject = 'New message from: ' + email
    smtpEmail.to =[{email: 'miguel.mendez@miguel-mendez.click', name: 'Miguel'}]
    smtpEmail.textContent = 'Congrats! ✨ You have a new message from: '  + name + '\n with the following message: \n \n' + message

    const result = await brevoApiInstance.sendTransacEmail(smtpEmail)

    console.log({result});
}


const _sendEmailToRequester = async(name: string, email: string)=>{
    const smtpEmail = new SendSmtpEmail()
    smtpEmail.sender = {email: 'miguel.mendez@miguel-mendez.click', name: 'Miguel'}
    smtpEmail.subject = "Thanks for reaching out – I'll be in touch shortly"    
    smtpEmail.to =[{email, name: 'Miguel'}]
    smtpEmail.textContent = smtpEmail.textContent = _getContentForRequester(name)
    const result = await brevoApiInstance.sendTransacEmail(smtpEmail)

    console.log({result});
}

//* Util functions:
const _getContentForRequester = (name: string)=>{

    return `Hello ${name},

        Thank you for getting in touch. I’ve received your message and will review it as soon as possible.

        Feel free to include any additional information in a reply.

        Best regards,  
        Miguel Mendez`;
}