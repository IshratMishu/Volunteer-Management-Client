import { useState } from "react";
import { GiVanillaFlower } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import Button from "../../Custom/Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    return (
        <div className="flex justify-around items-center fixed w-full z-10 left-0 top-10 p-2 rounded-full bg-[var(--primary-color)]">
            <div className="md:text-3xl text-xl flex justify-between z-50 lg:w-auto w-full items-center">
                <div className="flex items-center gap-1 font-semibold">
                    <GiVanillaFlower />
                    <h1>CaringCrew</h1>
                </div>
                <div onClick={() => setOpen(!open)} className="lg:hidden">
                    {
                        open ? <IoMdClose /> : <TfiMenuAlt />
                    }
                </div>
            </div>
            <ul className="list-none hidden lg:flex gap-10 items-center">
               <Link to='/'> <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li></Link>
                <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                    Need Volunteer
                    <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)} className="relative cursor-pointer">
                    <span className="flex items-center gap-1 hover:text-[var(--tertiary-color)]">Success Stories {
                        dropdown ? <MdArrowDropUp className="text-2xl" /> : <IoMdArrowDropdown className="text-2xl" />}</span>

                    <ul  className={`${dropdown ? 'translate-x-4 opacity-100' : 'translate-x-0 opacity-0'} absolute bg-[var(--primary-color)] p-5 w-60 space-y-4 rounded-md -left-14 transition-all duration-300 ease-in-out transform`}>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Shelter Support Network
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Green Earth Project
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Hope for Health Initiative
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Bright Futures Foundation
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="hidden lg:flex gap-2">
            <Link to='/login'><button className="border border-[var(--secondary-color)] hover:bg-[var(--tertiary-color)] hover:text-white px-2 py-1 rounded-md">Sign In</button></Link>
                <Button title='Request Demo'></Button>
            </div>

            {/* mobile view */}
            <ul className={`lg:hidden bg-[var(--primary-color)] fixed top-0 overflow-y-auto w-full h-full bottom-0 py-24 pl-8 space-y-7 duration-500 ${open ? 'right-0' : '-right-full'}`}>
            <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                    Need Volunteer
                    <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li onClick={() => setDropdown(!dropdown)}>
                    <span className="flex items-center gap-1 cursor-pointer">Success Stories<IoMdArrowDropdown className="text-2xl" /></span>
                    <ul className={`${dropdown ? '' : 'hidden'} bg-[var(--primary-color)] p-5 w-60 space-y-4 rounded-md`}>
                    <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Shelter Support Network
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Green Earth Project
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Hope for Health Initiative
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Bright Futures Foundation
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                    </ul>
                </li>
                <Link to='/login'><button className="border border-[var(--secondary-color)] hover:bg-[var(--tertiary-color)] hover:text-white px-2 py-1 rounded-md">Sign In</button></Link>
                <br />
                <Button title='Request Demo'></Button>
            </ul>
        </div>
    );
};

export default Navbar;