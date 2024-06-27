import { Flex } from "@mantine/core";
import Image from "next/image";

const Courses = () => {

    const courses = [
        {
            image: '/courses-images/Frame-1.png',
            name: 'Tobams Logic',
            stars: '/courses-images/Stars.png',
            title: 'Business Analysis',
            details: 'Immerse yourself in dynamic lessons that combine the power of sight and sound to enhance your understanding. Whether you are a visual learner or an ',
            price: '110.00'
        },
        {
            image: '/courses-images/Frame-2.png',
            name: 'Tobams Logic',
            stars: '/courses images/Stars (1).png',
            title: 'Business Analysis',
            details: 'Immerse yourself in dynamic lessons that combine the power of sight and sound to enhance your understanding. Whether you are a visual learner or an ',
            price: '110.00'
        },
        {
            image: '/courses-images/Frame-3.png',
            name: 'Tobams Logic',
            stars: '/courses-images/Stars.png',
            title: 'Business Analysis',
            details: 'Immerse yourself in dynamic lessons that combine the power of sight and sound to enhance your understanding. Whether you are a visual learner or an ',
            price: '110.00'
        }
    ]

    const courseList = courses.map((list) =>(
        <div key={list} className="border-0 rounded-lg w-96 shadow-md flex flex-col">
            <div><Image src={list.image} alt="courses2" width="400" height="400"/></div>
            <div className="px-3 py-2">
                <p>{list.name}</p>
                <Image src={list.stars} alt="stars" width="50" height="50" />
            </div>
            <div className="px-3 py-2">
                <h3 className="font-semibold">{list.title}</h3>
            </div>
            <div className="px-3 py-2">
                <p>{list.details}</p>
            </div>
            <div className="px-3 py-2">
                <p>{list.price}</p>
                <button className="hover:bg-pink-200 hover:text-white py-2 hover:px-3 border-0 rounded-md">Learn More</button>
            </div>
        </div>
    ))
    return ( <div className="flex flex-col items-center m-5 justify-center">
        <div className="flex flex-col items-center justify-center py-32 px-8 gap-10">
            <div className="m-5">
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
                    <button className="hover:bg-pink-200 hover:text-white py-2 px-4 border-0 rounded-md">Learn More</button>
                </div>
                <div className="w-1/3">
                    <Image src="/logic image.png" alt="logic" width="500" height="500" />
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <div className="m-8 flex self-center">
                <h1 className="font-bold text-4xl">Most Popular Courses</h1>
            </div>
            <div className="w-full m-auto flex gap-20">
                {courseList}
            </div>
        </div>
        <div className="m-5">
            <button className="hover:bg-pink-200 hover:text-white py-2 px-4 border-0 rounded-md font-semibold text-lg">Explore All Courses</button>
        </div>
    </div> );
}
 
export default Courses;