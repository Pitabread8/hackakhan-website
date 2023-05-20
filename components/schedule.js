// import Link from 'next/link'

export default function Schedule() {
    return (
        <div className="bg-white dark:bg-black px-2 sm:px-4 py-2.5 w-full h-screen flex justify-center items-center flex-col">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Schedule</h2>
            <table className="w-96 mt-10 border-separate border-4 rounded-xl text-left font-sans border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>Arrival Period</td>
                        <td><time>7:30 AM</time></td>
                    </tr> */}
                    <tr>
                        <td>Opening Ceremony</td>
                        <td><time>8:30 AM</time></td>
                    </tr>
                    <tr>
                        <td>Mini-TWOW</td>
                        <td><time>9:00 AM</time></td>
                    </tr>
                    <tr>
                        <td>Hacking</td>
                        <td><time>9:00 AM</time></td>
                    </tr>
                    <tr>
                        <td>Speaker</td>
                        <td><time>11:30 AM</time></td>
                    </tr>
                    <tr>
                        <td>Lunch (provided)</td>
                        <td><time>12:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>SQL Workshop</td>
                        <td><time>2:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>SSBU/MarioKart Tournament</td>
                        <td><time>3:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Workshop 2</td>
                        <td><time>4:30 PM</time></td>
                    </tr>
                    <tr>
                        <td>Dinner (provided)</td>
                        <td><time>6:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Judging</td>
                        <td><time>9:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Closing Ceremony</td>
                        <td><time>10:30 PM</time></td>
                    </tr>
                    {/* <tr>
                        <td>Cleanup Period</td>
                        <td><time>11:00 PM</time></td>
                    </tr> */}
                </tbody>
            </table>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405236.53297267!2d-121.95849998834572!3d37.486440384429066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb1f7c5bf5613%3A0x5b126664a7c5cefb!2sKhan%20Lab%20School!5e0!3m2!1sen!2sus!4v1684370706209!5m2!1sen!2sus" style={{style: "border: 0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe> */}
        </div>
    );
}