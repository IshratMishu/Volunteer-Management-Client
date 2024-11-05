import { GiVanillaFlower } from "react-icons/gi";
import { MdMarkEmailRead, MdPhonePaused } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 bg-[var(--tertiary-color)] items-center my-0 mx-auto md:p-16 p-8">
            <nav className="space-y-3">
                <h2 className="flex items-center gap-1 font-semibold md:text-3xl text-xl"><GiVanillaFlower />CaringCrew</h2>
                <p className="text-balance text-sm">Volunteering is an important and honorable way to help others.</p>
                <div>
                <h1 className="flex items-center gap-2 hover:underline"><MdMarkEmailRead />caringcrew@email.com</h1>
                <h1 className="flex items-center gap-2 hover:underline"><MdPhonePaused />+44 123 456 789</h1>
                </div>
            </nav>

            <nav className="space-y-3">
                <h2 className="font-semibold text-xl">Quick Links</h2>
                <ul className="space-y-2">
                    <li className="hover:underline">Homepage</li>
                    <li className="hover:underline">About Us</li>
                    <li className="hover:underline">Our Events</li>
                    <li className="hover:underline">Contact Us</li>
                </ul>
            </nav>

            <nav className="space-y-3">
                <h2 className="font-semibold text-xl">Urgent Charity</h2>
                <ul className="space-y-2">
                    <li className="hover:underline">Save Worlds</li>
                    <li className="hover:underline">Old People</li>
                    <li className="hover:underline">War Donation</li>
                    <li className="hover:underline">Kids Donation</li>
                </ul>
            </nav>


            <nav className="space-y-4">
                <h2 className="font-semibold text-xl">Subscribe Our Newsletter</h2>
                <p className="text-sm">Get Our Latest Update & New Offers Sales Discount</p>
                <input type="email" placeholder="Email" className="px-2 py-0.5 rounded-md w-40 mr-2 bg-[var(--tertiary-color)] border border-[var(--primary-color)] focus:outline-none placeholder-black" />
                <button className="bg-[var(--secondary-color)] px-2 py-1 rounded-md hover:bg-[var(--primary-color)] text-white hover:text-black">Subscribe</button>
                <div className="flex text-xl gap-3">
                    <CiTwitter className="hover:text-[var(--primary-color)]"/>
                    <FaInstagram className="hover:text-[var(--primary-color)]"/>
                    <FaYoutube className="hover:text-[var(--primary-color)]"/>
                </div>
            </nav>
        </div>
    );
};

export default Footer;