import { NextResponse } from "next/server"
import fs from 'node:fs'

export const GET = async()=>{

    const logs = fs.readFileSync('request-logs-GIT-IGNORE.txt', 'utf-8')
        .split('\n').slice(-200).join('\n'); //* Get the last 200 lines


    return new NextResponse(logs, {
        headers: {'Content-Type': 'text/plain'}
    })
}