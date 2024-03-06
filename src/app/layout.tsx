// global styles 
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});


export const metadata = {
  title: 'Blue Wave Dev',
  description: 'A business page for small business web design and development',
  keywords: 'Blue Wave Dev, Blue Wave, development, Johnathan Bryce, John Bryce, web development, web design, small business, small business web design, small business web development, Vancouver, HTML, CSS, Next.js, React, web development Vancouver, British Columbia, Canada'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
