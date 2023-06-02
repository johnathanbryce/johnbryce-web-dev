// global styles 
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});


export const metadata = {
  title: 'John Bryce - Small Business Web Design and Development',
  description: 'A business page for small business web design and development',
  keywords: 'Johnathan Bryce, John Bryce, web development, web design, small business, small business web design, small business web development, Vancouver, HTML, CSS, Next.js'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
