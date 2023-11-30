import Image from 'next/image'
import KLS from '/public/sponsors/kls.png'
import Wolfram from '/public/sponsors/wolfram.png'
import VaSi from '/public/sponsors/vasi.png'
import Echo from '/public/sponsors/echo3d.png'

export default function Sponsors() {
    return (
        <div className="bg-white dark:bg-black px-4 py-2.5 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Past Sponsors</h2>
            <div className="grid grid-cols-4 p-4 gap-4 items-center justify-center dark:bg-white rounded-xl">
                <a href="https://www.wolframalpha.com/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={Wolfram}
                        alt="Wolfram Logo"
                    />
                </a>
                <a href="https://vasi.ai/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={VaSi}
                        alt="VaSi Logo"
                    />
                </a>
                <a href="https://www.echo3d.com/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={Echo}
                        alt="Echo3D Logo"
                    />
                </a>
                <a href="https://khanlabschool.org/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={KLS}
                        alt="KLS Logo"
                    />
                </a>
            </div>
        </div>
    );
}