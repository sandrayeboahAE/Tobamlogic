import { Flex } from "@mantine/core";
import { TbChevronDown } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( <div>
        <div className="flex flex-row items-center justify-around border shadow-md p-3">
            <div className="p-2">
                <Link href="/">
                   <Image src="/tobam-logo.png" alt="page logo" width="120" height="120" />
                </Link>
            </div>
            <div className="flex flex-row justify-between items-center gap-6 text-md">
                <div>
                    <Link href="/about"><p>Who We Are</p></Link>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Link href="/service"><p>Our Services</p></Link>
                    <TbChevronDown />
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Link href="/News"><p>News & Publications</p></Link>
                    <TbChevronDown />
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Link href="/training"><p>Training</p></Link>
                    <TbChevronDown />
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Link href="/academy"><p>Learning Academy</p></Link>
                    <TbChevronDown />
                </div>
                <div>
                    <Link href="/career"><p>Careers</p></Link>
                </div>
            </div>
            <div>
                <button type="submit" className="bg-[#252A64] text-white border rounded-md p-3">Book A Consultation</button>
            </div>
        </div>
    </div> );
}
 
export default Navbar;