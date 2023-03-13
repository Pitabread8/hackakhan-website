import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'
import NavBar from '../components/navbar'
import Typewriter from 'typewriter-effect';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

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
        <section className="h-screen flex justify-center items-center flex-col gap-2" id="intro">
          {/* <div className="w-screen fixed top-0 text-center opacity-90 bg-black dark:bg-white">
            <p className="my-4 text-base text-white md:text-lg lg:text-xl dark:text-black">Want to support HackaKhan? Read our <a href="#" target="_blank" rel="noreferrer" aria-label="Prospectus" className="underline">sponsorship prospectus</a>.</p>
          </div> */}
          <Image className="mb-4"
            src={Logo}
            width={128}
            alt="HackaKhan Logo"
          />
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">HackaKhan</h1>
          <div className="mb-4 text-xl md:text-2xl lg:text-3xl">
            <Typewriter onInit={(typewriter) => { typewriter.typeString("June 10 2023").start(); }} />
          </div>
          <div className="flex justify-center items-center gap-3 mb-4 h-auto">
            <a href="https://www.instagram.com/hackakhan_" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={48} />
            </a>
            <a href="mailto:hackakhancontact@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <FaRegEnvelope size={48} />
            </a>
          </div>
          <Link href="/pre-register" scroll={false} className="mt-10 p-4 border-4 rounded-xl border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black">
            <p className="text-2x md:text-3xl lg:text-4xl">Pre-Register!</p>
          </Link>
        </section>
        {/* <section className="bg-dark-blue h-[50vh]" id="sponsors"></section> */}
        {/* <section className="h-[50vh]" id="faq"></section> */}
        {/* <footer className="fixed bottom-0 mb-4">&copy; {new Date().getFullYear()} HackaKhan. All Rights Reserved.</footer> */}
      </main>
    </>
  )
}
