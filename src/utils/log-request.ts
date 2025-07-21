import { headers } from "next/headers"
import { logRequest } from "req-logger-express"

export const requestLog = async({filePath, action, additionalLogInfo}: {filePath: string, action: string, additionalLogInfo?: string})=>{

    //* If we are in development, avoid writing to the file system because it triggers a lot of hot reloads 
    if(process.env.NODE_ENV === 'production'){
        const headerStore = await headers()
        const ip = headerStore.get('ip') || '' //$ The IP is set by middleware
    
        await logRequest({
            fileName: filePath, //! this is actually the file path.
            ip,
            action: action,
            appName: 'Portfolio',
            additionalLogInfo
            
        })
    }

}