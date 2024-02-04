export default function About() {
    return (
        <div className="bg-white dark:bg-black px-4 py-2.5 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">About</h2>
            <p className="font-sans p-4 dark:bg-white dark:text-black rounded-xl abt">
                HackaKhan, <a href="https://khanlabschool.org/" target="_blank" rel="noreferrer" className="underline">
                    Khan Lab School
                </a>&apos;s annual hackathon, will take place on June 8th, 2024 from 8:30 am to 11:00 pm.
                It will be at the KLS campus in Mountain View, CA, and is open to all middle and high school students aged 13 to 18 in the Bay Area.
                The theme is <a href="https://en.wikipedia.org/wiki/Educational_technology" target="_blank" rel="noreferrer" className="underline">
                    Education Technology
                </a>. Teams may include up to four participants, and previous coding experience is not required.
                <br /><br />
                The HackaKhan team consists of three high schoolers who are passionate about using technology for social good and want to share our unique opportunities with the wider community.
                We each fell in love with computer science through a mix of attending hackathons and working on independent projects.
                The buzz around <a href="https://www.khanacademy.org/khan-labs" target="_blank" rel="noreferrer" className="underline">
                    Khanmigo
                </a> and <a href="https://openai.com/blog/chatgpt" target="_blank" rel="noreferrer" className="underline">
                    Chat-GPT
                </a>  inspired us to create an event for students to innovate and explore computer science. We want our attendees to draw upon their diverse experiences to redefine education and the use of technology in classrooms.
            </p>
        </div>
    );
}