import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaUserAlt } from "react-icons/fa"

export default function Footer() {
    return (
    <>    
    <footer className="absolute bottom-0 bg-gray-500 w-full p-3 flex justify-between mt-4">
            <div className="mb-2">
                <FaUserAlt className="inline mr-2"/>
                João Júnior &copy; 2023
            </div>
            <div className="flex flex-wrap mt-1">
                <Link href="https://github.com/Joao-Bonifacio" target="blank"> 
                    <FaGithub className="mr-3 text-xl" />
                </Link>
                <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                    <FaLinkedin className="mr-3 text-xl" />
                </Link>
                <Link href="https://www.instagram.com/jao_jj_/" target="blank">
                    <FaInstagram className="text-xl" />
                </Link>
            </div>
        </footer>
    </>
    ) 
}