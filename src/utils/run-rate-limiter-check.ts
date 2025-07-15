import {isRateLimited} from 'redis-rate-limiter-express'
import { RedisClientType } from "redis";
import { redisClient } from '@/lib/redis-client';
import { cookies,  } from 'next/headers';


//? Hopefully I can get the unique user identifier to be emails instead of IP addresses.
export const runRateLimiterCheck = async(): Promise<boolean>=> {

    const uniqueUserIdentifier = await _getOrSetUniqueUserIdentifier()
       
    return isRateLimited(redisClient as RedisClientType, {
        requestLimit: 2,
        windowSizeSecs: 3600,
        uniqueUserIdentifier,
    })
}




const _getOrSetUniqueUserIdentifier = async(): Promise<string>=>{
    //* If we can get the IP address from middleware, use it

    const cookieStore = await cookies()
    let cookieUUID: string | undefined

    cookieUUID = cookieStore.get('RATE_LIMIT_COOKIE') as string | undefined

    //* If it is the first time the client sends a request, set a unique UUID as a cookie.
    if(!cookieUUID){
        cookieUUID = crypto.randomUUID()

        cookieStore.set('RATE_LIMIT_COOKIE', cookieUUID, { httpOnly: true, })
    }

    return cookieUUID
}