'use client';

import { Button, Navbar } from 'flowbite-react';
import logo from "./img/logo.png"
function Navbars() {
    return (
        <div>
            <Navbar className=' bg-[#6b7280] border-none dark:border-gray-800 dark:text-white'
                fluid
                rounded
            >
                <Navbar.Brand href="/">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src={logo}
                    />
                    <span className="self-center whitespace-nowrap lg:text-xl text-[15px] font-semibold flex gap-1 dark:text-white">
                        <span className='text-black'>
                            MSP
                        </span>
                        <span className='text-red-500'>
                            Computer
                        </span>
                        <span className='text-blue-400'>
                            College
                        </span>
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <button type="button" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0 lg:py-4 lg:h-10 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='text-xl '>
                    <Navbar.Link

                        href="/"
                    >
                        <p className='text-lg text-white '>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/about">
                        <p className='text-lg text-white'>
                            About Us </p>
                    </Navbar.Link>
                    <Navbar.Link href="/courses">
                        <p className='text-lg text-white'>
                            Courses </p>
                    </Navbar.Link>
                    <Navbar.Link href="/gallery">
                        <p className='text-lg text-white'>
                            Gallery </p>
                    </Navbar.Link>
                    <Navbar.Link href="/result">
                        <p className='text-lg text-white'>
                            Results </p>
                    </Navbar.Link>
                    <Navbar.Link href="/contact">
                        <p className='text-lg text-white'>
                            Contact </p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

export default Navbars