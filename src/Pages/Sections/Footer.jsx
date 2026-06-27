import SvgHeroSectionLogo from "../../assets/Svgs/Icons/HeroSection/SvgHeroSectionLogo";
import SvgFaceBook from "../../assets/Svgs/Images/Footer/SvgFaceBook"
import SvgLinkedin from "../../assets/Svgs/Images/Footer/SvgLinkedin"
import SvgTwieter from "../../assets/Svgs/Images/Footer/SvgTwieter"
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const Footer = () => {
     return (
          <footer className="bg-dark w-full p-12 pb-20 rounded-t-box flex flex-col gap-8">
               <div className="w-full flex justify-between items-center max-mid:flex-col max-mid:gap-3">
                    <SvgHeroSectionLogo fill="white" />
                    <div>
                        <ul className="flex gap-3 text-md text-white underline justify-center max-md:flex-wrap">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Use Cases</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <SvgFaceBook />
                        <SvgLinkedin />
                        <SvgTwieter />
                    </div>
               </div>

               <div className="flex justify-between items-center max-mid:flex-col max-mid:gap-3">
                    <div className="flex-1/3 max-w-70 text-white text-sm flex flex-col gap-5 max-mid:text-center">
                        <h1 className="text-xl text-light-green font-mediumd">Connect Us</h1>
                        <h2>Email: ExampleEmail@gmail.com</h2>
                        <h2>Phone: +123 456 789</h2>
                        <h2>Address: 1234 Street Name, City Name, Country Name</h2>
                    </div>
                    <div className="flex-2/3 w-full px-10 py-15 rounded-xl flex justify-center items-center gap-5 bg-[#292A23] max-md:flex-col">
                        <Input type="text" placeholder="Email" bgColor="#292A32" borderColor="white"/>
                        <Button bg="#B9FF66" text="Subscribe to News"/>
                    </div>
               </div>
               <div className="w-full border-t-1 border-white flex justify-between items-center text-white pt-5 font-light  text-sm max-sm:flex-col">
                    <h1>2024 Positivus - Made With <a className="underline">Astro</a> by <a className="underline">Manul</a></h1>
                    <h1>Credits ( <a className="underline">Olga</a>, <a className="underline">Esteban</a>) & <a className="underline">Licence</a></h1>
               </div>
          </footer>
     );
};

export default Footer;
