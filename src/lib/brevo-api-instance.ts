import {TransactionalEmailsApi, TransactionalEmailsApiApiKeys} from '@getbrevo/brevo'

if(!process.env.BREVO_API_KEY){
    throw new Error('BREVO_API_KEY is not defined')
}


export const brevoApiInstance = new TransactionalEmailsApi()

brevoApiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

