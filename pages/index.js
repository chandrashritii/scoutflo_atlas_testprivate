import { ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'
import ProductPage from './productPage'
import Dashboard from './Dashboard/index'
import theme from '../styles/atlas_theme'


export default function Home() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <Link href="/"><Dashboard /></Link>
      {/* <Link href="/product"><ProductPage /></Link>  */}
      </ThemeProvider>
    </>
  )
}
