"use server"
import { brevoApiInstance } from "@/lib/brevo-api-instance"
import { mainPageLogsPath } from "@/lib/variables"
import { logAction } from "@/utils/action-log"
import { runRateLimiterCheck } from "@/utils/run-rate-limiter-check"
import { SendSmtpEmail } from "@getbrevo/brevo"
import {z, ZodError} from "zod"


type Params = {
    requesterName: string | null,
    requesterEmailAddress: string | null,
    requesterMessageBody: string | null
}

//prettier-ignore
export const sendInterestEmail = async(params: Params)=>{

    //* I am sending both an email to myself notifying me that someone is interested and also an email to the person interested notifying them that I received their email.
    try{
        const isRateLimited = await runRateLimiterCheck()

        //* Check if the user is rate limited (only allow two emails per hour)
        if(isRateLimited) return {success: false, message: "You can only send 4 emails per hour."}

        const  {requesterName, requesterEmailAddress, requesterMessageBody} = _zodValidateEmail(params) //*  Validate ALL email data
        
        await _sendSelfEmail({ requesterName, requesterEmailAddress,  requesterMessageBody }) //* Send email to myself 

        await _sendEmailToRequester(requesterName, requesterEmailAddress) //* Send email to requester
        
        await logAction({ //* Log the request
            filePath: mainPageLogsPath, 
            action: 'Sent interest email', 
            additionalLogInfo: JSON.stringify({requesterName, requesterEmailAddress, requesterMessageBody})
        }) 

        return {success: true, message: "Email sent successfully"}
        
    }catch(e){
        if(e instanceof ZodError){
            const errorMessages = e.issues.map((issue)=> issue.message)
            return {success: false, message: errorMessages[0] as string}
        }
        
        console.dir(e, {depth: 3});
        return {success: false, message: 'Something went wrong: ' + e }
    }
}


const _zodValidateEmail = ({requesterName, requesterEmailAddress, requesterMessageBody}: Params)=>{
    const emailSchema = z.object({
        requesterName: z.string().min(1).max(100),
        requesterEmailAddress: z.string().email().min(1).max(100),
        requesterMessageBody: z.string().min(1).max(1000)
    })
    
    return emailSchema.parse({requesterName, requesterEmailAddress, requesterMessageBody}) //$ ".parse" will throw an error if the data is invalid"
}

const _sendSelfEmail = async ({requesterName, requesterEmailAddress, requesterMessageBody}: Params)=>{

    const smtpEmail = new SendSmtpEmail()
    smtpEmail.sender = {email: 'miguel.mendez@miguel-mendez.click', name: 'Miguel'}
    smtpEmail.subject = 'New message from: ' + requesterEmailAddress
    smtpEmail.to =[{email: 'miguel.mendez@miguel-mendez.click', name: 'Miguel'}]
    smtpEmail.textContent = 'Congrats! ✨ You have a new message from: '  + requesterName + '\n with the following message: \n \n' + requesterMessageBody

    await brevoApiInstance.sendTransacEmail(smtpEmail)

}

        //% Name of  them, email address of them ⬇️
const _sendEmailToRequester = async(name: string, email: string)=>{
    const smtpEmail = new SendSmtpEmail()
    smtpEmail.sender = {email: 'miguel.mendez@miguel-mendez.click', name: 'Miguel'}
    smtpEmail.subject = "Thanks for reaching out – I'll be in touch shortly"    
    smtpEmail.to =[{email, name: 'Miguel'}]
    smtpEmail.textContent = smtpEmail.textContent = _getContentForRequester(name)

    await brevoApiInstance.sendTransacEmail(smtpEmail)
}


//* Util functions:
const _getContentForRequester = (name: string)=>{

    return `Hello ${name},

        Thank you for getting in touch. I’ve received your message and will review it as soon as possible.

        Feel free to include any additional information in a reply.

        Best regards,  
        Miguel Mendez`;
}