export default function Map() {
    return (
        <div className="bg-white dark:bg-black md:w-[150%] px-2 sm:px-4 py-2.5 flex flex-col justify-center items-center self-stretch">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101439.09369263265!2d-122.16327054357284!3d37.390502058461514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb1f7c5bf5613%3A0x5b126664a7c5cefb!2sKhan%20Lab%20School!5e0!3m2!1sen!2sus!4v1685389296310!5m2!1sen!2sus" className="w-full h-full rounded-xl" style={{style: "border: 0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>
        </div>
    );
}