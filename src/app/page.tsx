import Navbar from "@/components/Navbar/page";
import Landing from "@/sections/Landing/page";
import Section2 from "@/sections/Section2/page";
import Section3 from "@/sections/Section3/page";
import Section4 from "@/sections/Section4/page";
import Section5 from "@/sections/Section5/page";
import Slider from "@/sections/Slider/page";
import Section7 from "@/sections/Section7/page";
import Section8 from "@/sections/Section8/page";
import Contact from "@/sections/Contact/page";
import Footer from "@/sections/Footer/page";
function Home() {
  return (
    <div className="bg-primary font-poppins relative z-[10] overflow-hidden">
      <Navbar />
      <Landing />
      <Section3 />
      <Section4 />
      <Section5 />
      <Slider />
      <Section7 />
      <Section8 />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
