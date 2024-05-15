import Image from 'next/image'
import KLS from '/public/sponsors/kls.png'
import VaSi from '/public/sponsors/vasi.png'
import Manifold from '/public/sponsors/manifold.png'
import XYZ from '/public/sponsors/xyz.png'

export default function Sponsors() {
    return (
        <div className="bg-white dark:bg-black px-4 py-2.5 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Sponsors</h2>
            <div className="grid grid-cols-4 p-4 gap-4 items-center justify-center dark:bg-white rounded-xl">
                <a href="https://vasi.ai/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={VaSi}
                        alt="VaSi Logo"
                    />
                </a>
                <a href="https://www.manifoldrg.com/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={Manifold}
                        alt="Manifold Logo"
                    />
                </a>
                <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={XYZ}
                        alt="Generation XYZ Logo"
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