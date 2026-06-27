import CaseStudies from "../Sections/CaseStudies";
import ConnectUs from "../Sections/ConnectUs";
import Footer from "../Sections/Footer";
import HeroSection from "../Sections/HeroSection";
import OurWorkingProcess from "../Sections/OurWorkingProcess";
import Servises from "../Sections/Servises";
import Team from "../Sections/Team";
import Testimonials from "../Sections/Testimonials";

const HomePage = () => {
     return (
          <section className="max-w-screen min-h-screen max-mid:px-[60px] max-sm:px-[30px] h-max pt-1 px-[100px] font-Space flex flex-col gap-[130px] overflow-hidden scroll-m-60">
               {/* Hero Section */}
               <HeroSection />
               {/* Servises Section */}
               <Servises />
               {/* Case Studies */}
               <CaseStudies />
               {/* Our Working Process */}
               <OurWorkingProcess />
               {/* Team */}
               <Team />
               {/* Testimonials */}
               <Testimonials />
               {/* Connect Us */}
               <ConnectUs />
               {/* Footer */}
               <Footer />
          </section>
     );
};

export default HomePage;
