import Image from "next/image";
import Link from "next/link";
import { TbBrandFacebookFilled, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitterFilled, TbCopyright, TbLocation, TbMail, TbPhone } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
    return ( <div>
        <div className="w-full bg-[rgba(229, 230, 243, 0.50)] flex flex-row items-start justify-between gap-8 py-20 px-64 border rounded-tr-2xl rounded-tl-2xl">
            <div className="w-1/5 flex flex-col">
                <Link href="/">
                   <Image src="/tobam-logo.png" alt="logo" width="200" height="200" />
                </Link>
                <p className="mt-10">
                    We are a consulting firm that provides a range of services 
                    including sustainability consulting, business consulting, digital transformation, 
                    training and mentoring, strategy planning, and specialist services.
                </p>
                <div className="flex flex-row my-5 gap-6">
                    <div className="border-0 bg-white p-2 rounded-md">
                        <TbBrandFacebookFilled size="26"/>
                    </div>
                    <div className="border-0 bg-white p-2 rounded-md">
                        <TbBrandInstagram size="26"/>
                    </div>
                    <div className="border-0 bg-white p-2 rounded-md">
                        <TbBrandTwitterFilled size="26"/>
                    </div>
                    <div className="border-0 bg-white p-2 rounded-md">
                        <TbBrandLinkedin size="26"/>
                    </div>
                </div>
            </div>
            <div className="w-3/5 flex flex-row items-start justify-start gap-10 mx-10">
                <div className="flex flex-col gap-5 mx-5">
                    <h2 className="text-[#252A64] font-bold text-xl">Our Services</h2>
                    <p>Business Consulting</p>
                    <p>Digital Transformation</p>
                    <p>Training & Mentoring</p>
                    <p>Strategy Planning</p>
                    <p>Sustainability Consulting</p>
                    <p>Specialist Services</p>
                </div>
                <div className="flex flex-col gap-5 mx-5">
                    <h2 className="text-[#252A64] font-bold text-xl">Explore</h2>
                    <p>Tobams Logic Academy</p>
                    <p>Who We Are</p>
                    <p>Careers</p>
                    <p>News & Publications</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex flex-col gap-5 mx-5">
                    <h2 className="text-[#252A64] font-bold text-xl">Contact</h2>
                    <div className="flex flex-row items-center gap-2">
                        <TbPhone size="26"/>
                        <p>07886600748</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <TbMail size="26" />
                        <p>theteam@tobamslogic.com</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <TbLocation size="26" />
                        <p>64 Nile Street, International House, London N1 7SR</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#252A64] text-white flex flex-row justify-between items-center py-4 px-5">
            <div className="flex flex-row items-center justify-between gap-3">
                <p>Tobams Logic</p>
                <TbCopyright />
                <p>(2023).  All Rights Reserved</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-3">
                <Link href="#">
                   <p>Terms and Conditions</p>
                </Link>
                <GoDotFill />
                <Link href="#">
                    <p>Privacy Policy</p>
                </Link>
                <GoDotFill />
                <Link href="#">
                    <p>Cookies</p>
                </Link>
            </div>
        </div>
        </div>)
}
 
export default Footer;