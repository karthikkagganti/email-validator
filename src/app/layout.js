import { Header } from './components/header'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer } from './components/footer'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Login from './Login/page'

const inter = Montserrat({ subsets: ['latin'] })

export default async function Layout({ children }) {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}} = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='h-screen'>
        <Header/>
        {
          session === null ?
          (
            <div className='h-800  bg-white'>
            <Login/>
            </div>
          ):
          (
            <div className='h-800  bg-white'>{children}</div>
          )
        }
        <Footer/>
        </div>
      </body>
    </html>
  )
}
