import Image from "next/image";
import { TbChevronCompactUp } from "react-icons/tb";

const Training = () => {
    return ( <div>
        <div>
            <div className="m-8 px-20">
                <h1 className="font-bold text-4xl">Training & Mentoring At Tobams Logic</h1>
            </div>
            <div className="m-10 flex flex-row justify-between items-start px-20">
                <div className="w-1/3 mr-10">
                    <Image src="/training.png" alt="taining" width="800" height="800" />
                </div>
                <div className="w-2/3 flex flex-col items-start justify-start gap-7 text-xl mx-10">
                    <div><p>Our training and mentoring services are designed to help businesses 
                        develop the skills and knowledge necessary to succeed. We offer a range 
                        of training and mentoring programs, including leadership development, team building, 
                        and skills training. Our experts will work with you to develop a customized program that meets your 
                        specific needs and aligns with your business goals.
                       </p>
                    </div>
                    <div>
                        <div>
                            <p>Online Training</p>
                            <TbChevronCompactUp />
                        </div>
                        <div><p> In todays digital age, learning does not have to be confined to a classroom. Our online training 
                            modules provide the flexibility to learn at your own pace, from anywhere in the world. Stay ahead of the 
                            curve with our accessible online resources. Visit our learning academy to learn more today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center"><button className="hover:bg-pink-200 hover:text-white py-2 px-4 border-0 rounded-md text-lg font-semibold">Learn More</button></div>
        </div>
        <div className="">
            <div className="m-8 px-20">
                <h1 className="font-bold text-4xl">Tobams Logic Business Analysis Training</h1>
            </div>
            <div className="flex flex-col justify-start w-1/2 text-xl px-20 py-3 mx-8">
                <h2 className="font-semibold">Why You are in the Right Place</h2>
                <p>At Tobams Logic Business Analysis Training, we know that Business Analysis is a dynamic field that requires both knowledge 
                    and practical skills. That is why we have created a platform that is tailored especially for you. Here is why you have made the right choice:
                </p>
            </div>
            <div className="m-8 flex flex-row justify-between items-start px-20 gap-20">
                <div className="w-2/3 flex flex-col items-start justify-start gap-7 text-xl">
                    <div>
                        <h3 className="font-semibold">Business Analysis Mastery:</h3>
                        <p>Dive deep into Business Analysis and build a rock-solid foundation. Explore the principles, methodologies, and best practices 
                            that define this profession.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Learn at Your Pace: </h3>
                        <p>Our platform is designed to fit your busy schedule. Whether you are a full-time student or working professional, you have the 
                            flexibility to learn at your own pace.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Real-World Relevance: </h3>
                        <p>Stay updated with the latest industry trends and practices. Our courses are developed by experts and cover a wide spectrum of topics, 
                            from requirements gathering to Agile methodologies.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Certification Opportunities: </h3>
                        <p>Showcase your expertise with our completion certificates. They are a testament to your 
                            commitment and can boost your career prospects.
                        </p>
                    </div>
                    <div>
                        <button className="hover:bg-pink-200 hover:text-white py-2 hover:px-4 border-0 rounded-md">Learn More</button>
                    </div>
                </div>
                <div className="w-1/3 mr-10">
                    <Image src="/analysis.png" alt="analysis" width="600" height="600" />
                </div>
            </div>
        </div>
    </div> );
}
 
export default Training;