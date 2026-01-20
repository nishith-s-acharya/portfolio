import '../styles/globals.css'
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import Cursor from '../components/Common/Cursor'

import ThemeSwitcher from '../components/Common/ThemeSwitcher';
import Background from '../components/Common/Background';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Cursor />
      <ThemeSwitcher />
      <Background />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
