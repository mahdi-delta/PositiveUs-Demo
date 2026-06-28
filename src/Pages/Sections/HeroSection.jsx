import SvgHeroSection from "../../assets/Svgs/Images/HeroSection/SvgHeroSection";
import SvgHeroSectionLogo from "../../assets/Svgs/Icons/HeroSection/SvgHeroSectionLogo";
import Button from "../../Components/Button";

import SvgCompany1 from "../../assets/Svgs/Images/Company/SvgCompany1.jsx";
import SvgCompany2 from "../../assets/Svgs/Images/Company/SvgCompany2.jsx";
import SvgCompany3 from "../../assets/Svgs/Images/Company/SvgCompany3.jsx";
import SvgCompany4 from "../../assets/Svgs/Images/Company/SvgCompany4.jsx";
import SvgCompany5 from "../../assets/Svgs/Images/Company/SvgCompany5.jsx";
import SvgCompany6 from "../../assets/Svgs/Images/Company/SvgCompany6.jsx";

const HeroSection = () => {
     return (
           <section id="hero" className="max-w-full flex flex-col gap-fix ">
                <header className="w-full bg-white py-3 px-[100px] flex flex-row justify-between items-center fixed left-0 top-0 z-100 max-md:justify-center">
                     <div id="icon">
                          <SvgHeroSectionLogo />
                     </div>
                     <div id="Pages" className="flex justify-between items-center gap-8 max-mid:hidden">
                          <ul
                               id="items"
                               className="flex justify-center items-center gap-8 text-dark"
                          >
                               <li><a onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-400 cursor-pointer transition-all duration-300">About Us</a></li>
                               <li><a onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-400 cursor-pointer transition-all duration-300">Servises</a></li>
                               <li><a onClick={(e) => { e.preventDefault(); document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-400 cursor-pointer transition-all duration-300">Use Casses</a></li>
                               <li><a onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-400 cursor-pointer transition-all duration-300">Pricing</a></li>
                               <li><a onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-400 cursor-pointer transition-all duration-300">Blog</a></li>
                          </ul>
                          <Button bg="#ffffff" text="Book a consultation"/>
                     </div>
                </header>

               <main className="flex justify-between items-center gap-fix mt-25 max-md:flex-col">
                    <div id="text-holder" className="flex-1/2 flex items-start flex-col gap-fix/2 max-md:items-center max-md:text-center">
                         <div id="landscape" className="font-medium text-6xl max-mid:text-5xl max-sm:text-4xl">
                              Navigating the digital landscape for success
                         </div>
                         <p id="paragraph" className="max-sm:text-sm">
                              Our digital marketing agency helps businesses grow and succeed online
                              through a range of services including SEO, PPC, social media
                              marketing, and content creation.
                         </p>
                         <Button bg="#191A23" text="Book a consultation" />
                    </div>
                    <div id="image-holder" className="flex-1/2 max-md:w-2/3 max-sm:w-full">
                         <SvgHeroSection />
                    </div>
               </main>

               <div className=" flex max-md:scale-90 flex-wrap justify-between">
                    <SvgCompany1 />
                    <SvgCompany2 />
                    <SvgCompany3 />
                    <SvgCompany4 />
                    <SvgCompany5 />
                    <SvgCompany6 />
               </div>
          </section>
     );
};

export default HeroSection;
