// FIX SPONSOR SECTION HEIGHT

import Image from 'next/image'
import KLS from '/public/sponsors/kls.png'
import VaSi from '/public/sponsors/vasi.png'
import Metarch from '/public/sponsors/metarch.png'
import XYZ from '/public/sponsors/xyz.png'
import AoPS from '/public/sponsors/aops.png'
import Wolfram from '/public/sponsors/wolfram.png'

export default function Sponsors() {
    return (
        <div className="bg-white dark:bg-black px-4 py-2.5 flex flex-col justify-center items-center self-stretch">
            {/* md:w-1/2 */}
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Past Sponsors</h2>
            <div className="grid grid-cols-6 grid-rows-1 p-4 gap-4 items-center justify-center dark:bg-white rounded-xl">
            {/* grid-cols-3 grid-rows-2 */}
            {/* <div className="p-4 flex flex-row justify-center items-center dark:bg-white rounded-xl gap-1 md:flex-col lg:flex-row w-full h-full"> */}
            {/* <div className="grid grid-cols-3 grid-rows-2 p-4 justify-center items-center dark:bg-white rounded-xl gap-4 md:grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 w-full h-full"> */}
                <a href="https://metarch.ai/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={Metarch}
                        alt="Metarch Logo"
                    />
                </a>
                <a href="https://artofproblemsolving.com/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={AoPS}
                        alt="Art of Problem Solving Logo"
                    />
                </a>
                <a href="https://khanlabschool.org/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={KLS}
                        alt="KLS Logo"
                    />
                </a>
                <a href="https://vasi.ai/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={VaSi}
                        alt="VaSi Logo"
                    />
                </a>
                <a href="https://www.wolframalpha.com/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={Wolfram}
                        alt="Wolfram Logo"
                    />
                </a>
                <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
                    <Image className="w-full"
                        src={XYZ}
                        alt="Generation XYZ Logo"
                    />
                </a>
            </div>
        </div>
    );
}