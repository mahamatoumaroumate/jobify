import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import hero from '@/assets/main.svg'
import Link from 'next/link'
const Home = () => {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <Image src={logo} alt='logo' />
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center '>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            job<span className='text-primary'>tracking</span>app
          </h1>
          <p className='leading-loose max-w-md mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            reiciendis, maxime sit cumque vero fugiat, minus similique atque
            perspiciatis magnam necessitatibus quidem commodi quo cupiditate
            temporibus ipsa alias vel? Recusandae.
          </p>
          <Button asChild className='mt-4 bg-primary'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={hero} alt='landing' className='hidden lg:block' />
      </section>
    </main>
  )
}
export default Home
