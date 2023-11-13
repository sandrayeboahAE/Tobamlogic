import About from "@/components/About";
import Courses from "@/components/Courses";
import HomeSlide from "@/components/HomeSlide";
import Contact from "@/components/Contact";
import Training from "@/components/Training";
import Success from "@/components/Success";
import Clients from "@/components/Clients";

const HomePage = () => {
    return ( <div>
        <HomeSlide />
        <About />
        <Contact />
        <Courses />
        <Training />
        <Success />
        <Clients />
    </div> );
}
 
export default HomePage;