import { Inter, Sora} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const sora = Sora({subsets: ['latin'], variable: '--font-sora', weight: ['100','200', '300', '400', '500', '600', '700', '800']})

export const metadata = {
  title: 'Vinci Designs',
  description: 'Vinci Design Portfolio',
}

import { Nav, Header, TopLeftImg } from '@/components'

const Layout = ({ children }) => {
  return (
      <div className={`${inter.variable} page bg-site text-white bg-cover bg-no-repeat relative`} >
      <Nav />
      <Header />
      <TopLeftImg />
      {children}
      </div>
  )
}

export default Layout
