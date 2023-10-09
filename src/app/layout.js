
/* eslint-disable @next/next/next-script-for-ga */
import './globals.css'

import { UserProvider } from '@auth0/nextjs-auth0/client';

import Navbar from './components/navbar';

import GoogleAnalytics from './GoogleAnalytics';
import {Julius_Sans_One} from "next/font/google";

const julius = Julius_Sans_One({subsets:["latin"],weight:"400",variable:"--julius-font",display:"swap"});




export const metadata = {
  title: 'Plant World',
  description: 'Plant World will have great experience',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en" >

      <body >

      <UserProvider>
      <div className={`${julius.className}`} style={{position:"fixed",zIndex:1,width:"100%"}}>
        <Navbar />
      </div>
     {children}
      <GoogleAnalytics/>
     </UserProvider>
        </body>
    </html>
  )
}
