export default function Schedule() {
    return (
        <div className="bg-white dark:bg-black px-2 sm:px-4 py-2.5 flex justify-center items-center flex-col">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Schedule</h2>
            <table className="w-96 border-separate border-4 rounded-xl text-left font-sans border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arrival</td>
                        <td><time>8:00 AM</time></td>
                    </tr>
                    <tr>
                        <td>Opening Ceremony</td>
                        <td><time>8:30 AM</time></td>
                    </tr>
                    <tr>
                        <td>Mini-TWOW</td>
                        <td><time>9:00 AM</time></td>
                    </tr>
                    <tr>
                        <td>Hacking Begins</td>
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
                        <td>Hacking Ends, Judging Begins</td>
                        <td><time>9:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Closing Ceremony</td>
                        <td><time>10:30 PM</time></td>
                    </tr>
                    <tr>
                        <td>Departure</td>
                        <td><time>11:00 PM</time></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}