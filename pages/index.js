import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'
import About from '/components/about'
import Sponsors from '/components/sponsors'
import Gallery from '/components/gallery'
import Schedule from '../components/schedule'
import Map from '../components/map'
import Typewriter from 'typewriter-effect';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaLongArrowAltDown } from 'react-icons/fa';

export default function Site() {
  return (
    <>
      <Head>
        <title>HackaKhan</title>
        <meta name="description" content="The first ever HackaKhan, hosted by Khan Lab School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-screen h-screen">
          {/* <div className="w-screen fixed top-0 text-center opacity-90 hidden md:block lg:block bg-black dark:bg-white z-10">
            <p className="my-4 text-base text-white md:text-lg lg:text-xl dark:text-black">Want to support HackaKhan? Read our <a href="/prospectus.pdf" target="_blank" rel="noreferrer" aria-label="Prospectus" className="underline">sponsorship prospectus</a>.</p>
          </div> */}
          <div className="hidden md:block md:w-screen md:h-screen md:fixed md:-z-10">
            <Image
              src={'/photos/1.JPG'}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              priority
              alt="HackaKhan Background Photo"
            />
          </div>
          <div className="w-screen h-screen flex justify-center items-center flex-col gap-2 md:backdrop-brightness-50 text-white">
            <Image className="mb-4"
              src={Logo}
              width={150}
              alt="HackaKhan Logo"
            />
            <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">HackaKhan</h1>
            <div className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">
              <Typewriter onInit={(typewriter) => {
                typewriter
                  .typeString("June 8 2025").start()
                  .pauseFor(500)
                  .typeString("<br>Mountain View CA").start()
              }} />
            </div>
            <div className="flex justify-center items-center gap-3 mb-4 h-auto">
              <a href="https://www.instagram.com/hackakhan_" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={48} />
              </a>
              <a href="mailto:contact@hackakhan.org" target="_blank" rel="noreferrer" aria-label="Email">
                <FaRegEnvelope size={48} />
              </a>
            </div>
            <Link href="/register" scroll={false} className="mt-6 p-4 border-4 rounded-xl border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black">
              <p className="text-2x md:text-3xl lg:text-4xl">Register</p>
            </Link>
            {/* <FaLongArrowAltDown className="mt-4" size={64} /> */}
          </div>
        </section>
        {/* <hr className="w-screen h-2 bg-black dark:bg-white" /> */}
        {/* <section className="w-screen bg-white dark:bg-black">
          <div className="w-screen h-max mb-4 md:mb-8 flex flex-col gap-8 items-center justify-center px-2 md:px-20 md:flex-row md:items-start">
            <About></About>
            <Sponsors></Sponsors>
          </div>
          <div className="w-screen h-max mt-4 md:mt-8 md:mb-16 flex flex-col gap-8 items-center justify-center px-2 md:px-20 md:flex-row md:items-start">
            <Schedule></Schedule>
            <Map></Map>
          </div>
        </section> */}
        <section className="w-screen bg-white dark:bg-black flex items-center justify-center">
          <div className="w-full md:w-3/4 h-fit md:mb-16 flex flex-col gap-8 items-center justify-center pt-8 px-2 md:px-20">
            <div className="h-max mb-4 flex flex-col gap-8 items-center justify-center md:flex-row md:items-start">
              <About></About>
              <Map></Map>
            </div>
            <Sponsors></Sponsors>
            <Gallery></Gallery>
          </div>
        </section>
        <footer className="w-screen text-center bg-white dark:bg-black dark:text-white fixed bottom-0 py-4 hidden md:block md:text-lg lg:text-xl">&copy; {new Date().getFullYear()} HackaKhan. All Rights Reserved.</footer>
      </main>
    </>
  )
}
