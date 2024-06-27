import Image from "next/image";

const Contact = () => {
    return ( <div className="flex flex-col">
        <div className="flex flex-col w-screen px-36 py-8">
            <div className="m-10">
                <h1 className="font-bold text-3xl">How it Works</h1>
            </div>
            <div className="m-10 flex flex-row justify-between items-start">
                <div className="w-1/2 mr-10">
                    <Image src="/contact images/Rectangle 75.png" alt="contact" width="800" height="800" />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-7 text-lg mx-10">
                    <div className="flex flex-col items-start gap-5 my-3">
                        <div className="flex flex-row items-start gap-3">
                            <Image src="/contact images/Frame 26086449.png" alt="contact" width="40" height="40" />
                            <h2>Contact Us</h2>
                        </div>
                        <div>
                            <p>Contacting us is easy. We are available via phone, email, or through our website. Our team 
                                is always ready to hear about your business challenges and provide you with the support you need to ensure success.
                            </p>
                        </div>
                   </div>
                   <div className="flex flex-col items-start gap-5 my-3">
                       <div className="flex flex-row items-start gap-3">
                            <Image src="/contact images/Frame 26086449.png" alt="contact" width="40" height="40" />
                            <h2>Discovery Call</h2>
                        </div>
                        <div>
                            <p>An opportunity for us to learn more about your business and for you to learn about our consulting services.  At the end of the call, 
                                we will provide you with a proposal that outlines our recommended approach, timeframe, and costs.</p>
                        </div>
                   </div>
                   <div className="flex flex-col items-start gap-5 my-3">
                       <div className="flex flex-row items-start gap-3">
                            <Image src="/contact images/Frame 26086449 (1).png" alt="contact" width="40" height="40" />
                            <h2>Research and Analysis</h2>
                        </div>
                        <div>
                            <p>Our team conducts extensive research and analysis to develop the right strategy for your business. We use a data-driven approach that 
                                includes market research, customer surveys, competitor analysis, and financial modeling. 
                            </p>
                        </div>
                   </div>
                   <div className="flex flex-col items-start gap-5 my-3">
                       <div className="flex flex-row items-start gap-3">
                            <Image src="/contact images/Frame 26086449 (1).png" alt="contact" width="40" height="40" />
                            <h2>Follow a Proven Plan</h2>
                        </div>
                        <div>
                            <p>Our approach is based on a proven plan that has helped many businesses succeed. We have a framework that we follow to ensure that we address 
                                all the critical aspects of your business. This framework includes market analysis, customer research, strategy etc 
                            </p>
                        </div>
                   </div>
                </div>
            </div>
            <div className="flex items-center justify-center"><button className="hover:bg-pink-200 hover:text-white py-3 px-5 border-0 rounded-md">Contact Us</button></div>
        </div>
        <div className="flex flex-row justify-center gap-36 items-center p-5">
            <div>
                <Image src="/contact images/Rectangle 57.png" alt="contact us" width="150" height="150" />
            </div>
            <div>
                <Image src="/contact images/Collxx.png" alt="contact us" width="150" height="150" />
            </div>
            <div>
                <Image src="/contact images/Rare Eat logo.png" alt="contact us" width="150" height="150" />
            </div>
            <div>
                <Image src="/contact images/Jite Newton logo.png" alt="contact us" width="150" height="150" />
            </div>
            <div>
                <Image src="/contact images/Hotels Fashion Logo.png" alt="contact us" width="150" height="150" />
            </div>
            <div>
                <Image src="/contact images/Laughing Women Logo.png" alt="contact us" width="150" height="150" />
            </div>
        </div>
    </div> );
}
 
export default Contact;