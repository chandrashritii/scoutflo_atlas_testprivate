import Link from 'next/link';
import Profile from './Profile/index';
import ProductPage from './productPage/index';
import Dashboard from './Dashboard/index';


export default function Home() {
  return (
    <>
      <Link href="/"><Dashboard /></Link>
      {/* <Link href="/product"><ProductPage /></Link>  */}
    </>
  )
}
