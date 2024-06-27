import Image from "next/image";

const Clients = () => {

    const clients = [
        {
            image: '/clients/clients1.png',
            name: 'John Davies',
            position: 'CEO, TechWave Inc.',
            details: 'Tobams Logic Consulting has been an instrumental partner in our journey towards excellence. Their strategic prowess combined with their hands-on approach has redefined the way we operate. Their commitment to delivering tangible results, coupled with their industry acumen, has propelled our business to the forefront of innovation and success',
            stars: '/Stars.png'
        },
        {
            image: '/clients/clients2.png',
            name: 'Sarah Mitchell',
            position: 'COO, Global Solutions Ltd',
            details: 'Our collaboration with Tobams Logic Consulting has been a transformative experience. Their profound insights into market trends and their ability to seamlessly integrate them into our operations have been a game-changer. Their teams dedication to our success and their holistic approach to problem-solving have not only maximized our efficiency but also fortified our market presence.',
            stars: '/Stars.png'
        },
        {
            image: '/clients/clients3.png',
            name: 'Alex Thompson',
            position: 'Director of Marketing, Nexat Industries',
            details: 'Tobams Logic Consulting is the epitome of strategic vision and operational excellence. Their in-depth grasp of our industrys intricacies, paired with their innovative strategies, has reshaped our trajectory. From optimizing our processes to amplifying our revenue streams, their partnership has been a cornerstone of our accomplishments',
            stars: '/Stars.png'
        }
    ]

    const clientsList = clients.map((list) => (
        <div key={list} className="border-0 shadow-md w-96 h-96">
            <div className="flex flex-row justify-start items-center p-2 gap-4">
                <div>
                    <Image src={list.image} alt="clients" width="80" height="80" className="border-0 rounded-full"/>
                </div>
                <div>
                    <p>{list.name}</p>
                    <p>{list.position}</p>
                </div>
            </div>
            <div className="p-4">
                <p>{list.details}</p>
            </div>
            <div className="p-3">
                <Image src={list.stars} alt="stars" width="100" height="100" />
            </div>
        </div>
    ))
    return ( <div>
        <div className="my-20">
            <div  className="m-8 px-20 flex items-center justify-center py-9">
                <h1 className="font-bold text-4xl">What Our Clients Are Saying</h1>
            </div>
            <div className="flex flex-row justify-center items-center gap-40">
                {clientsList}
            </div> 
        </div>
        <div className="bg-[#bec2f0] flex flex-col justify-center items-center p-10 gap-2 text-xl">
            <h1>Ready to get started with us? Speak with our team of experts</h1>
            <p>Book a Free consultation call in 5 seconds!</p>
            <button className="bg-[#242b7c] hover:bg-[#141633] px-5 py-3 border-0 rounded-md text-white">Contact Us</button>
        </div>
    </div> );
}
 
export default Clients;