import Image from 'next/image'
import KLS from '/public/kls.png'
import Wolfram from '/public/wolfram.png'

export default function Sponsors() {
    return (
        <div className="bg-white dark:bg-black px-2 sm:px-4 py-2.5 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Sponsors</h2>
            <div className="flex flex-row justify-center items-center bg-white rounded-xl md:flex-col">
                <Image className="mb-4"
                    src={Wolfram}
                    width={128}
                    alt="Wolfram Logo"
                />
                <Image className="mb-4"
                    src={KLS}
                    width={128}
                    alt="KLS Logo"
                />
            </div>
        </div>
    );
}