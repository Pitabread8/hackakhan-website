// fix table on mobile
// fix scroll (spacing, background, parallax)
// footer background
// about section (theme, teams, etc.)
// map component
// move global css to tailwind style
// sponsor section background

import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'
// import NavBar from '../components/navbar'
import Schedule from '../components/schedule'
import About from '../components/about'
import Sponsors from '../components/sponsors'
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
          <Link href="/register" scroll={false} className="mt-6 p-4 border-4 rounded-xl border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black">
            <p className="text-2x md:text-3xl lg:text-4xl">Register!</p>
          </Link>
          <Link href="#info" scroll={false} className="scroll-smooth">
            <FaLongArrowAltDown className="mt-4" size={64} />
          </Link>
        </section>
        {/* <hr className="w-screen h-2 bg-black dark:bg-white" /> */}
        <section className="w-screen h-screen flex flex-col gap-8 items-center justify-center p-20 md:flex-row md:items-start" id="info">
          <About></About>
          <Schedule></Schedule>
          <Sponsors></Sponsors>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101439.09369263265!2d-122.16327054357284!3d37.390502058461514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb1f7c5bf5613%3A0x5b126664a7c5cefb!2sKhan%20Lab%20School!5e0!3m2!1sen!2sus!4v1685389296310!5m2!1sen!2sus" className="w-auto h-auto" style={{style: "border: 0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe> */}
        </section>
        {/* <section className="bg-dark-blue h-[50vh]" id="sponsors"></section> */}
        {/* <section className="h-[50vh]" id="faq"></section> */}
        <footer className="fixed bottom-0 mb-4 hidden md:block md:text-lg lg:text-xl">&copy; {new Date().getFullYear()} HackaKhan. All Rights Reserved.</footer>
      </main>
    </>
  )
}
