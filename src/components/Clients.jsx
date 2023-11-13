import Image from "next/image";

const Clients = () => {
    return ( <div>
        <div>
            <div>
                <h1>What Our Clients Are Saying</h1>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <Image src="/clients/clients1.png" alt="clients" width="300" height="300" />
                        </div>
                        <div>
                            <p>John Davies</p>
                            <p>CEO, TechWave Inc.</p>
                        </div>
                    </div>
                    <div>
                        <p>
                        Tobams Logic Consulting has been an instrumental partner in our journey towards excellence. 
                        Their strategic prowess combined with their hands-on approach has redefined the way we operate. 
                        Their commitment to delivering tangible results, coupled with their industry acumen, has propelled 
                        our business to the forefront of innovation and success
                        </p>
                    </div>
                    <div>
                        <Image src="/Stars.png" alt="stars" width="100" height="100" />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <Image src="/clients/clients2.png" alt="clients" width="300" height="300" />
                        </div>
                        <div>
                            <p>Sarah Mitchell</p>
                            <p>COO, Global Solutions Ltd</p>
                        </div>
                    </div>
                    <div>
                        <p>
                        Our collaboration with Tobams Logic Consulting has been a transformative experience. 
                        Their profound insights into market trends and their ability to seamlessly integrate 
                        them into our operations have been a game-changer. Their teams dedication to our success and their 
                        holistic approach to problem-solving have not only maximized our efficiency but also fortified our market presence.
                        </p>
                    </div>
                    <div>
                        <Image src="/Stars.png" alt="stars" width="100" height="100" />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <Image src="/clients/clients3.png" alt="clients" width="300" height="300" />
                        </div>
                        <div>
                            <p>Alex Thompson</p>
                            <p>Director of Marketing, Nexat Industries</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Tobams Logic Consulting is the epitome of strategic vision and operational excellence. Their in-depth grasp of our 
                            industrys intricacies, paired with their innovative strategies, has reshaped our trajectory. From optimizing our 
                            processes to amplifying our revenue streams, their partnership has been a cornerstone of our accomplishments
                        </p>
                    </div>
                    <div>
                        <Image src="/Stars.png" alt="stars" width="100" height="100" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Ready to get started with us? Speak with our team of experts</h1>
            <p>Book a Free consultation call in 5 seconds!</p>
            <button>Contact Us</button>
        </div>
    </div> );
}
 
export default Clients;