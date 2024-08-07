// FIX AM AND PM FOR MOBILE

export default function Schedule() {
    return (
        <div className="bg-white dark:bg-black md:w-1/2 px-2 sm:px-4 py-2.5 flex justify-center items-center flex-col self-stretch">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Schedule</h2>
            <table className="w-full h-full border-separate border-4 rounded-xl text-left font-sans border-white dark:bg-white dark:text-black">
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
                        <td>Hacking Begins</td>
                        <td><time>9:00 AM</time></td>
                    </tr>
                    <tr>
                        <td>Git & GitHub Workshop</td>
                        <td><time>11:00 AM</time></td>
                    </tr>
                    <tr>
                        <td>Lunch (provided): Ike&apos;s Sandwiches</td>
                        <td><time>12:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Dinner (provided): Costco Pizza</td>
                        <td><time>6:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Devpost Workshop</td>
                        <td><time>7:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Hacking Ends, Judging & SSBU Tournament Begin</td>
                        <td><time>8:00 PM</time></td>
                    </tr>
                    <tr>
                        <td>Closing Ceremony</td>
                        <td><time>9:30 PM</time></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}