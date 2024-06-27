import { Flex } from "@mantine/core";
import Image from "next/image";

const Courses = () => {
    return ( <div className="flex flex-col items-center m-10 justify-center">
        <div className="flex flex-col items-center justify-center p-32 gap-10">
            <div className="m-3">
                <h1 className="font-bold text-3xl">Tobams Logic Academy</h1>
            </div>
            <div className="flex flex-row justify-between items-start gap-10 p-10">
                <div className="flex flex-col items-start gap-5 w-1/2">
                    <h2 className="font-semibold text-xl">About</h2>
                    <p className="text-lg">At Tobams Logic Academy, our platform is a dynamic space where learning knows no bounds. 
                        Whether you are a seasoned professional looking to upskill or a curious mind eager to explore new horizons, we offer a diverse range of courses tailored to your needs. With experienced instructors, interactive resources, and a commitment to your growth, we are here to fuel your journey towards excellence. Join us and embark on a path of discovery and achievement with Tobams Logic Academy.
                    </p>
                    <h2 className="font-semibold text-xl">How to get our courses:</h2>
                    <p className="text-lg">Browse through our extensive catalogue of courses spanning various domains and industries, and enrol in your chosen course to unlock a world of knowledge. Our enrollment process is user-friendly 
                        and seamless, ensuring you can begin learning right away.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className="w-1/3">
                    <Image src="/logic image.png" alt="logic" width="500" height="500" />
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <div className="m-5 flex self-center">
                <h1 className="font-bold text-4xl">Most Popular Courses</h1>
            </div>
            <div className="w-screen flex">
                <div className="flex flex-col bg-white w-1/3 m-5 gap-5">
                    <div className="">
                        <Image src="/courses images/Frame 21.png" alt="courses2" width="400" height="400"/>
                    </div>
                    <div>
                        <p>Tobams Logic</p>
                        <Image src="/courses images/Stars (1).png" alt="stars" width="50" height="50" />
                    </div>
                    <div>
                        <h3>Business Analysis</h3>
                    </div>
                    <div>
                        <p>Immerse yourself in dynamic lessons that <br/> combine 
                            the power of sight and sound to <br/> enhance your understanding. Whether you are a <br/> visual learner or an 
                        </p>
                    </div>
                    <div>
                        <p>110.00</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="flex flex-col bg-white w-1/3 m-5 gap-5">
                    <div>
                        <Image src="/courses images/Frame 21 (1).png" alt="courses2" width="400" height="400"/>
                    </div>
                    <div>
                        <p>Tobams Logic</p>
                        <Image src="/courses images/Stars (1).png" alt="stars" width="50" height="50" />
                    </div>
                    <div>
                        <h3>Business Analysis</h3>
                    </div>
                    <div>
                        <p>Immerse yourself in dynamic lessons that <br/> combine 
                            the power of sight and sound to <br/> enhance your understanding. Whether you are a <br/> visual learner or an 
                        </p>
                    </div>
                    <div>
                        <p>110.00</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="flex flex-col bg-white w-1/3 m-5 gap-5">
                    <div>
                        <Image src="/courses images/Frame 21 (2).png" alt="courses2" width="400" height="400" />
                    </div>
                    <div>
                        <p>Tobams Logic</p>
                        <Image src="/courses images/Stars (1).png" alt="stars" width="50" height="50" />
                    </div>
                    <div>
                        <h3>Business Analysis</h3>
                    </div>
                    <div>
                        <p>Immerse yourself in dynamic lessons that <br/> combine 
                            the power of sight and sound to <br/> enhance your understanding. Whether you are a <br/> visual learner or an 
                        </p>
                    </div>
                    <div>
                        <p>110.00</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button>Explore All Courses</button>
        </div>
    </div> );
}
 
export default Courses;