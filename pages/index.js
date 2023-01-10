import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import Typewriter from 'typewriter-effect';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function Site() {
  return (
    <>
      <Head>
        <title>HackaKhan</title>
        <meta name="description" content="The first ever HackaKhan, hosted by Khan Lab Schhol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <NavBar></NavBar> */}
        <section className="h-screen flex justify-center items-center flex-col gap-2" id="intro">
          <h1 className="mb-4 text-5xl text-center font-bold text-black md:text-6xl lg:text-7xl dark:text-white">HackaKhan</h1>
          <div className="mb-4 text-1xl text-center font-mono text-black md:text-2xl lg:text-3xl dark:text-white">
            <Typewriter onInit={(typewriter) => { typewriter.typeString("Coming Summer 2023").start(); }}/>
          </div>
          <div className="flex justify-center items-center gap-3 mb-4 h-auto">
            <a href="https://www.instagram.com/hackakhan_" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={48} className="text-black dark:text-white" />
            </a>
            <a href="mailto:hackakhancontact@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <FaRegEnvelope size={48} className=" text-black dark:text-white" />
            </a>
          </div>
        </section>
        {/* <section className="bg-dark-blue h-[50vh]" id="sponsors"></section> */}
        {/* <section className="h-[50vh]" id="faq"></section> */}
        <footer className="fixed bottom-0 mb-4">&copy; {new Date().getFullYear()} HackaKhan. All Rights Reserved.</footer>
      </main>
    </>
  )
}
