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
  description: 'Blue Wave Dev specializes in custom web design and development services for businesses. Leveraging cutting-edge technologies like Next.js and React, we craft responsive, user-friendly websites tailored to your business goals. From eCommerce solutions to SEO-optimized site design, discover how we can help your business thrive online.',
  keywords: 'Vancouver web design, Vancouver web development, custom web development Vancouver, responsive web design Vancouver, eCommerce development BC, SEO services Vancouver, Next.js, React, small business web solutions, professional website design, website development Vancouver, BC, Canada, Blue Wave Dev',
  robots: 'index, follow',
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
        <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Blue Wave Dev",
              "url": "https://www.bluewavedev.ca",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1189 Howe Street",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "postalCode":"V6Z 2X4",
                "addressCountry": "CA"
              },
              "telephone": "6042207425",
              "description": "A web design and development agency based in Vancouver, specializing in creating custom websites for businesses.",
              "areaServed": "Vancouver, BC",
              "sameAs": [
                "https://www.linkedin.com/company/blue-wave-dev",
                "https://www.linkedin.com/in/johnathanbryce/"
              ]
            })}
        </script>
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
