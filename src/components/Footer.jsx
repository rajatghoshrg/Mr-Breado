import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { MdLocationOn, MdCall } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#f5f5f5] text-gray-700 pt-12 pb-6 px-6 md:px-12">

            {/*  TOP GRID */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* About */}
                <div>
                    <h3 className="font-semibold mb-4">About Us</h3>
                    <p className="text-sm mb-2 hover:text-red-500 cursor-pointer">
                        About Mr. Breado
                    </p>
                    <p className="text-sm hover:text-red-500 cursor-pointer">
                        Blog
                    </p>
                </div>

                {/* Partner */}
                <div>
                    <h3 className="font-semibold mb-4">Partner with Us</h3>
                    <p className="text-sm mb-2 hover:text-red-500 cursor-pointer">
                        Register as a Restaurant
                    </p>
                    <p className="text-sm mb-2 hover:text-red-500 cursor-pointer">
                        Become a Gintaa Rider
                    </p>
                    <p className="text-sm hover:text-red-500 cursor-pointer">
                        Order online
                    </p>
                </div>

                {/* Mumbai */}
                <div>
                    <h3 className="font-semibold mb-4">Mumbai</h3>
                    <p className="text-sm leading-6">
                        Mittal Court, Office no. 132, 13th Floor, <br />
                        (C Wing) at 224, Nariman Point, <br />
                        Maharashtra, Mumbai - 400021
                    </p>
                </div>

                {/* Bangalore */}
                <div>
                    <h3 className="font-semibold mb-4">Bangalore</h3>
                    <p className="text-sm leading-6">
                        Down-Town Park II, Plot 22, Adjacent <br />
                        Prestige Tech Cloud, Bengaluru
                    </p>
                </div>

                {/* Kolkata */}
                <div>
                    <h3 className="font-semibold mb-4">Kolkata</h3>
                    <p className="text-sm leading-6">
                        Gintaa Tower, Mohisgote, New Town <br />
                        Opposite DLF 1, Gate No.5, <br />
                        West Bengal-700102, India
                    </p>
                </div>
            </div>

            {/*  CORPORATE ADDRESS */}
            <div className="flex items-center justify-center gap-2 mt-10 text-gray-800 font-medium">
                <MdLocationOn className="text-red-500 text-xl" />
                Corporate Address
            </div>

            {/*  SUPPORT */}
            <div className="flex flex-col items-center mt-6">
                <div className="flex items-center gap-2 font-medium text-gray-800">
                    <MdCall className="text-red-500 text-xl" />
                    For help & support
                </div>
                <p className="text-sm mt-2">080-69188101</p>
                <p className="text-sm">customer@mrbreado.com</p>
            </div>

            {/*  SOCIAL + BUTTONS */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">

                {/* Social */}
                <div>
                    <p className="font-medium mb-2">Connect with Us</p>

                    <div className="flex gap-3">

                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#3b5998] p-2 rounded text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        {/* Twitter / X */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black p-2 rounded text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition duration-300"
                        >
                            <FaXTwitter />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0077b5] p-2 rounded text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition duration-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-pink-500 to-yellow-500 p-2 rounded text-white hover:from-red-500 hover:to-orange-500 transition duration-300"
                        >
                            <FaInstagram />
                        </a>

                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300">
                        Get Mr. Breado app
                    </button>
                    <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300">
                        Get Rider app
                    </button>
                    <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300">
                        Get Restaurant app
                    </button>
                </div>
            </div>

            {/*  BOTTOM */}
            <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
                © 2026 Mr. Breado. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;