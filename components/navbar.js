import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
    return (
        <nav className="bg-purple px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#intro" className="flex items-center">
                    <Image src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"></Image>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HackaKhan</span>
                </a>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <Link href="#sponsors" scroll={false} className="block py-2 pl-3 pr-4 text-white dark:text-black md:hover:text-green md:p-0">Sponsors</Link>
                        </li>
                        <li>
                            <Link href="#faq" scroll={false} className="block py-2 pl-3 pr-4 text-white dark:text-black md:hover:text-green md:p-0">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/pre-register" scroll={false} className="block py-2 pl-3 pr-4 text-white dark:text-black md:hover:text-green md:p-0">Pre-Register</Link>
                        </li>
                    </ul>
                </div>
                {/* Mobile */}
                {/* <div className="flex md:order-2">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div> */}
            </div>
        </nav>
    );
}