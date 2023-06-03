// footer background
// about section (theme, teams, etc.) line break
// move global css to tailwind style
// image sizing/spacing
// column width

import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'
// import NavBar from '../components/navbar'
import About from '../components/about'
import Sponsors from '../components/sponsors'
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
        {/* <NavBar></NavBar> */}
        <section className="w-screen h-screen flex justify-center items-center flex-col gap-2 bg-fixed" id="intro">
          <div className="w-screen fixed top-0 text-center opacity-90 hidden md:block lg:block bg-black dark:bg-white">
            <p className="my-4 text-base text-white md:text-lg lg:text-xl dark:text-black">Want to support HackaKhan? Read our <a href="/prospectus" target="_blank" rel="noreferrer" aria-label="Prospectus" className="underline">sponsorship prospectus</a>.</p>
          </div>
          <Image className="mb-4"
            src={Logo}
            width={128}
            alt="HackaKhan Logo"
          />
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">HackaKhan</h1>
          <div className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">
            <Typewriter onInit={(typewriter) => {
              typewriter
                .typeString("June 10 2023").start()
                .pauseFor(500)
                .typeString("<br>Mountain View CA").start()
            }} />
          </div>
          <div className="flex justify-center items-center gap-3 mb-4 h-auto">
            <a href="https://www.instagram.com/hackakhan_" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={48} />
            </a>
            <a href="mailto:hackakhancontact@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <FaRegEnvelope size={48} />
            </a>
          </div>
          <Link href="/waitlist" scroll={false} className="mt-6 p-4 border-4 rounded-xl border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black">
            <p className="text-2x md:text-3xl lg:text-4xl">Join the Waitlist!</p>
          </Link>
          {/* <Link href="#info" scroll={false} className="scroll-smooth"> */}
            <FaLongArrowAltDown className="mt-4" size={64} />
          {/* </Link> */}
        </section>
        {/* <hr className="w-screen h-2 bg-black dark:bg-white" /> */}
        <section className="w-screen h-max mb-4 md:mb-8 flex flex-col gap-8 items-center justify-center px-2 md:px-20 md:flex-row md:items-start">
          <About></About>
          <Sponsors></Sponsors>
        </section>
        <section className="w-screen h-max mt-4 md:mt-8 md:mb-16 flex flex-col gap-8 items-center justify-center px-2 md:px-20 md:flex-row md:items-start">
          <Schedule></Schedule>
          <Map></Map>
        </section>
        {/* <section className="bg-dark-blue h-[50vh]" id="sponsors"></section> */}
        {/* <section className="h-[50vh]" id="faq"></section> */}
        <footer className="fixed bottom-0 mb-4 hidden md:block md:text-lg lg:text-xl">&copy; {new Date().getFullYear()} HackaKhan. All Rights Reserved.</footer>
      </main>
    </>
  )
}
