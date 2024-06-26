import '../styles/globals.css'
import { Header } from '../components/header'

export const metadata = {
  title: 'Lucas Mah'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' data-theme='lofi'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className='antialiased text-black'>
        <Header />
        <div className='flex flex-col min-h-screen bg-grid-pattern'>
          <div className='grow'>{children}</div>
        </div>
      </body>
    </html>
  )
}
