const HomeSlide = () => {
    return ( 
        <div className="bg-[url(/home-banner.jpg)] bg-cover border rounded-3xl p-28 mx-28 mb-8">
            <div className="w-1/3 flex flex-col items-start justify-center gap-5">
                <div className="m-3"><p className="text-pink-400 text-md">CONSULTING AGENCY</p></div>
                <div className="m-3">
                    <p className="text-white text-5xl text-bold">Business Consulting</p>
                </div>
                <div className="text-white m-3">
                    <p>We are constructing an improved operational 
                        system to assist your business in transforming 
                        through the potency of technology and innovation, 
                        thereby enabling you to make the correct business 
                        decisions for long-term prosperity.
                    </p>
                </div>
                <div className="flex flex-row justify-start gap-8 items-center m-3">
                    <div>
                        <button type="sumbit" className="bg-pink-500 text-white border-0 rounded-md p-3 w-36 hover:bg-pink-700">Learn More</button>
                    </div>
                    <div>
                        <button type="sumbit" className="border p-3 border-pink-400 text-pink-500 rounded-md w-36 hover:bg-pink-500 hover:text-white">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeSlide;