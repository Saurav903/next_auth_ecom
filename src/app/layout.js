/* eslint-disable @next/next/next-script-for-ga */
import './globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from './components/navbar';
import { cookies } from 'next/headers'
import GoogleAnalytics from './GoogleAnalytics';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const cookieStore = cookies()
  const cook = cookieStore.get('appSession');
  return (
    <html lang="en">
      <head>
      <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NGLTNXHW')`}} />
        
      </head>
      <UserProvider>

      <body className={inter.className}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGLTNXHW"
height="0" width="0" style={{display:'none',visibility:"hidden"}}></iframe></noscript>
      <div style={{position:"fixed",zIndex:1,width:"100%"}}>
        <Navbar cook={cook}/>

      </div>
      <GoogleAnalytics/>
     {children}
       
        </body>
      </UserProvider>
    </html>
  )
}
