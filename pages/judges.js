import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'

export default function Judges() {
  return (
    <>
      <Head>
        <title>HackaKhan</title>
        <meta name="description" content="The first ever HackaKhan, hosted by Khan Lab School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-screen h-full flex justify-center items-center flex-col gap-2 bg-fixed pt-8">
          <Image className="mb-4"
            src={Logo}
            width={128}
            alt="HackaKhan Logo"
          />
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">Judges</h1>
          <section className="w-screen h-full flex justify-start items-stretch flex-col gap-2 bg-fixed p-8" >
            <h2 className="text-2xl">Parth Iyer</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Parth is an Undergraduate in Computer Science with a minor in Robotics. In his free time, he works on developing games and making Autonomous Vehicles utilizing Computer Vision and Lidar Technology.</p>
            </div>
            <h2 className="text-2xl">Vandana Sikka</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Vandana is a Computer Scientist. One of the early computer science graduate women, she is an Entrepreneur and founder of Learnee (a sponsor of this Hackathon). She is also a Board Member at Code.org, the world&apos;s largest nonprofit focused on Coding and CS literacy.</p>
            </div>
            <h2 className="text-2xl">Vishal Sikka</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Vishal is a Computer Scientist. He has a PhD from Stanford in AI. Currently, the CEO/founder of Vian AI. He is also a Board member of Oracle, a large SW company as well as BMW and GlaxoSmithKline. He is the former CEO of Infosys and prior to that the CTO and board member at SAP.</p>
            </div>
            <h2 className="text-2xl">Yvonne Nachtigall</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Yvonne is a Technologist with 20+ yrs of experience implementing IT solutions for Marketing, Customer Service, Sales, Finance, Payroll, HR and Legal customers. Currently, Yvonne manages a technology team for the “Customer Interaction Management Systems” team at Google which includes building reusable solutions and integrations for Customer Experience teams.</p>
            </div>
            <h2 className="text-2xl">Aryan Prodduturi</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Aryan is a KLS alumnus and current Georgia Tech CS student with proficiency in JS Web Development, Java, and Python. He has a 100% hackathon win-rate. In his free time, he likes making (online and board) games.</p>
            </div>
            <h2 className="text-2xl">Vikram Nagulakonda</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Vikram has 25+ years experience working on building high performance, scalable & distributed systems. Vikram is currently an Architect at Yahoo Mail implementing new features for users and improving application performance. At Yahoo Mail, Vikram works on the mail api servers that receive around 2 billion messages daily with more than 70 million daily active users. Prior to Yahoo, Vikram worked at various early stage startups in energy, medical fields.</p>
            </div>
            <h2 className="text-2xl">Kevin Frans</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Kevin is an incoming PhD student at Berkeley, studying machine learning and decision making. He recently graduated from MIT with a B.S. and M.Eng in Computer Science. Kevin enjoys building games, working with AI creative tools, and messing around with procedural generation methods.</p>
            </div>
            <h2 className="text-2xl">Anoop Sinha</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Anoop is a director of AI and Future Technologies at Google. He worked at Meta FAIR, Apple Siri, and more. His degrees include a PhD from the Berkeley EECs program and a BS in CS from Stanford.</p>
            </div>
            <h2 className="text-2xl">Shin Adachi</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Shin is an engineer, musician, and educator from Tokyo, Japan. He&apos;s been teaching Calculus, APCSA, and Intro to CS at Khan Lab School for this past year. Shin&apos;s engineering career has spanned many disciplines. He has worked on projects such as the ATHLETE lunar rover, the LauncherOne satellite launch vehicle, Google Fi, and the Riffit text-to-music algorithm. He also taught engineering at Synergy Academies in Los Angeles, and has spent many weekends playing Calypso music at the Six Flags theme park.</p>
            </div>
            <h2 className="text-2xl">Drew Bent</h2>
            <div className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt mb-4">
              <p>Drew is co-founder and COO of Schoolhouse.world. He previously wrote code at Khan Academy, taught high school math at Khan Lab School, and has been tutoring for a decade. He studied physics and computer science at MIT, and has an education master&apos;s from Stanford.</p>
            </div>
          </section>
        </section>
        {/* <footer className="w-screen text-center bg-black fixed bottom-0 py-4 hidden md:block md:text-lg lg:text-xl">&copy; {new Date().getFullYear()} HackaKhan. All Rights Reserved.</footer> */}
      </main>
    </>
  )
}
