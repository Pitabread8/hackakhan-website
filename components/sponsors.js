import Image from 'next/image'
import KLS from '/public/kls.png'
import Wolfram from '/public/wolfram.png'

export default function Sponsors() {
    return (
        <div className="bg-white dark:bg-black md:w-1/2 px-2 sm:px-4 py-2.5 flex flex-col justify-center items-center self-stretch">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Sponsors</h2>
            <div className="p-4 flex flex-row justify-center items-center dark:bg-white rounded-xl md:flex-row w-full h-full">
                <Image className="my-2 w-1/3"
                    src={Wolfram}
                    alt="Wolfram Logo"
                />
                <Image className="my-2 w-1/3"
                    src={KLS}
                    alt="KLS Logo"
                />
            </div>
        </div>
    );
}