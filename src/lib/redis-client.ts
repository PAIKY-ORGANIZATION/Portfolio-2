import {createClient} from  'redis'


export const redisClient =  createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
    }
})

try{
    redisClient.connect()
}catch(e){
    console.log('⚠️⚠️⚠️⚠️ Could not connect to redis:');
    
    console.log(e);	
}