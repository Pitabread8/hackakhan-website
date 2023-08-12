import Image from 'next/image'
import KLS from '/public/kls.png'
import Wolfram from '/public/wolfram.png'
import VaSi from '/public/vasi.png'
import Echo from '/public/echo3d.png'

export default function Sponsors() {
    return (
        <div className="bg-white dark:bg-black px-2 sm:px-4 py-2.5 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Past Sponsors</h2>
            <div className="grid grid-cols-4 p-4 gap-4 items-center justify-center dark:bg-white rounded-xl">
                <Image className="w-full"
                    src={Wolfram}
                    alt="Wolfram Logo"
                />
                <Image className="w-full"
                    src={VaSi}
                    alt="VaSi Logo"
                />
                <Image className="w-full"
                    src={Echo}
                    alt="Echo3D Logo"
                />
                <Image className="w-full"
                    src={KLS}
                    alt="KLS Logo"
                />
            </div>
        </div>
    );
}