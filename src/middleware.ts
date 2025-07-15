import { NextRequest, NextResponse } from "next/server";


export const middleware = (req: NextRequest)=>{
    const unparsedIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')
    const ip = unparsedIp?.split(',')[0] || ''


    const final = NextResponse.next()
    final.headers.set('ip', ip)

    return final

}