import { TbChevronRight } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return ( 
        <div className="w-full">
            <div className="bg-[#E6E6EB] p-20 flex flex-row justify-center items-center align-middle text-[#252A64]">
                <div className="w-1/2">
                    <Image src="/about-image.png" alt="about image" width="700" height="700" />
                </div>
                <div className="w-1/3 m-10">
                    <div className="my-8">
                        <p className="text-3xl">Why We Are Different</p>
                    </div>
                    <div className="my-8">
                        <ul className="list-disc text-xl">
                            <li className="my-5">Our team of seasoned consultants brings a wealth of knowledge and experience to every project, 
                                and we use a data-driven approach to develop strategies that are tailored to our client’s unique needs.
                            </li>
                            <li className="my-5">
                                Our commitment to integrity, sustainability, and innovation sets us apart from other consulting firms and 
                                ensures that our clients receive the highest level of service. Whether your organization is facing complex 
                                challenges or seeking to seize new opportunities, we are here to help you achieve your goals and succeed in the long term.
                            </li>
                        </ul>
                    </div>
                    <div className="my-8">
                        <button className="bg-[#252A64] hover:bg-[#16193d] text-white p-3 w-36 flex flex-row items-center gap-3 rounded-md border-0">Read More <TbChevronRight /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-around gap-3 m-10">
                <div className="flex flex-row items-center gap-4">
                    <Image src="/polygon1.jpg" alt="polygon" width="80" height="80" />
                    <div className="flex flex-col gap-2">
                       <h2 className="font-bold">INTEGRITY</h2>
                       <p>Integrity is our cornerstone</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Image src="/polygon2.png" alt="polygon" width="80" height="80" />
                    <div className="flex flex-col gap-2">
                       <h2 className="font-bold">COLLABORATION</h2>
                       <p>Collaboration is our strength</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Image src="/polygon3.png" alt="polygon" width="80" height="80" />
                    <div className="flex flex-col gap-2">
                       <h2 className="font-bold">EXCELLENCE</h2>
                       <p>Excellence is our standard</p>
                    </div>
                </div>
            </div>
            <div className="my-16 flex justify-center">
                <h1 className="font-bold text-3xl">We Provide The Best Services</h1>
            </div>
            <div className="flex flex-row gap-20 px-40">
                <div className="border-0 rounded-md w-1/3 flex flex-col p-5 m-10 shadow-md border-b-green items-start justify-start gap-8">
                    <Image src="/explore icons/dashicons_businessperson.png" alt="dash icon" width="50" height="50"/>
                    <h2>Business Consulting</h2>
                    <p>We are constructing an improved operational system to assist your business in transforming through 
                        the potency of technology and innovation, thereby enabling you to make the correct business 
                        decisions for long-term prosperity.
                    </p>
                    <div className="hover:bg-pink-200 hover:text-white py-2 px-4 border-0 rounded-md">
                      <Link href="#">Learn More</Link>
                    </div>
                </div>
                <div className="border-0 rounded-md w-1/3 flex flex-col p-5 m-10 shadow-md border-b-green items-start justify-start gap-8">
                    <Image src="/explore icons/devicon-plain_webpack.png" alt="dash icon" width="50" height="50"/>
                    <h2>Digital Transformation</h2>
                    <p>Maximize the potential of digital transformation to minimize risk and stimulate growth. 
                        Obtain the most up-to-date information on how we can assist in enhancing the durability 
                        of your business in these ever-evolving times.
                    </p>
                    <div className="hover:bg-pink-200 hover:text-white py-2 px-4 border-0 rounded-md">
                      <Link href="#">Learn More</Link>
                    </div>
                </div>
                <div className="border-0 rounded-md w-1/3 flex flex-col p-5 m-10 shadow-md border-b-green items-start justify-start gap-8">
                    <Image src="/explore icons/mdi_people.png" alt="dash icon" width="50" height="50"/>
                    <h2>Training & Mentoring</h2>
                    <p>Receive comprehensive, firsthand training and mentorship from our professionals 
                        who are actively engaged in career development, consulting, coaching, and individual mentoring
                    </p>
                    <div className="hover:bg-pink-200 hover:text-white py-2 px-4 border-0 rounded-md">
                      <Link href="#">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-xl">
                <button type="submit" className="hover:bg-pink-200 hover:text-white py-3 px-5 border-0 rounded-md">Explore All</button>
            </div>
        </div>
     );
}
 
export default About;