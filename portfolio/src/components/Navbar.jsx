import { useState } from "react";
import {HiMenuAlt3,HiOutlineX} from 'react-icons/hi'



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap font-mono p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">My Portfolio</span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                >
                    {showMenu ? <HiOutlineX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>
            <div
                className={`${
                    showMenu ? "block" : "hidden"
                } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-lime-400 hover:underline transition duration-75 ease-in-out mr-4"
                    >
                        About me
                    </a>
                    <a
                        href="#skills"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-lime-400 hover:underline transition duration-75 ease-in-out mr-4"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-lime-400 hover:underline transition duration-75 ease-in-out "
                    >
                        Projects
                    </a>
                    <a href="https://todo.exemple.localhost" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-lime-400 hover:underline transition duration-75 ease-in-out ml-4">
                        Todo
                    </a>

                </div>
                <div>
                    <a
                        href="#contact"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-lime-400 hover:border-transparent hover:text-gray-800 hover:bg-lime-400 transition duration-300 shadow-lime-400 ease-in-out mt-4 lg:mt-0 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_3px_#08f]">
                        contact
                    </a>
                </div>
            </div>
        </nav>
    );
};


export default Navbar