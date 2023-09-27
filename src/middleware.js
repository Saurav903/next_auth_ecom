import { NextResponse } from "next/server";


export function middleware(request){
    let cookie = request.cookies.get('appSession');
    if(!cookie){
        
        return NextResponse.rewrite(new URL('/',request.url))
    }
    
}

export const config = {
    matcher: '/blogs',
  }