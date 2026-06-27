import Button from "../../Components/Button";
import SectionHeader from "../../Components/SectionHeader";
import ServisesCard from "../../Components/ServisesCard";
import SvgMaking from "../../assets/Svgs/Images/Servises/SvgMaking";

const Servises = () => {
     return (
          <section className="flex flex-col gap-fix">
               <SectionHeader
                    title="Servises"
                    textOne="At our digital marketing agency, we offer a range of services to"
                    textTwo="help businesses grow and succeed online. These services include:"
               />

               <main className="w-full p-0 grid grid-cols-2 gap-8 max-mid:grid-cols-1">
                    <ServisesCard
                         titleOne="Search Engine"
                         titleTwo="Optimizaion"
                         bgColor="#F3F3F3"
                         bgTextColor="#B9FF66"
                         textColor="#191a23"
                         btnColor="#000"
                         btnArrowColor="#B9FF66"
                         btnTextColor="#191A23"
                         imageNumber="0"
                    />
                    <ServisesCard
                         titleOne="Pay - Per - Click"
                         titleTwo="advertising"
                         bgColor="#B9FF66"
                         bgTextColor="#fff"
                         textColor="#191a23"
                         btnColor="#000"
                         btnArrowColor="#B9FF66"
                         btnTextColor="#191A23"
                         imageNumber="1"
                    />
                    <ServisesCard
                         titleOne="Social Media"
                         titleTwo="Marketing"
                         bgColor="#191a23"
                         bgTextColor="#fff"
                         textColor="#191a23"
                         btnColor="#fff"
                         btnArrowColor="#191a23"
                         btnTextColor="#fff"
                         imageNumber="2"
                    />
                    <ServisesCard
                         titleOne="Email"
                         titleTwo="Marketing"
                         bgColor="#f3f3f3"
                         bgTextColor="#B9FF66"
                         textColor="#191A23"
                         btnColor="#000"
                         btnArrowColor="#B9FF66"
                         btnTextColor="#191A23"
                         imageNumber="3"
                    />
                    <ServisesCard
                         titleOne="Content"
                         titleTwo="Creation"
                         bgColor="#B9FF66"
                         bgTextColor="#fff"
                         textColor="#191a23"
                         btnColor="#000"
                         btnArrowColor="#B9FF66"
                         btnTextColor="#191A23"
                         imageNumber="4"
                    />
                    <ServisesCard
                         titleOne="Analytics and"
                         titleTwo="Tracking"
                         bgColor="#191a23"
                         bgTextColor="#fff"
                         textColor="#191a23"
                         btnColor="#fff"
                         btnArrowColor="#191a23"
                         btnTextColor="#fff"
                         imageNumber="5"
                    />
               </main>

               <div className="w-full p-12 flex justify-between items-center bg-gray-light rounded-box mt-[100px] max-h-85 max-md:max-h-max max-md:flex-col max-md:p-10 ">
                    <div
                         id="left-side"
                         className="flex justify-between items-start flex-col gap-10 max-w-1/2 max-md:max-w-full max-md:items-center max-md:text-center"
                    >
                         <h1 className="font-medium text-3xl">Let’s make things happen</h1>
                         <p>
                              Contact us today to learn more about how our digital marketing
                              services can help your business grow and succeed online.
                         </p>
                         <Button bg="#191A23" text="Get Your Free Proposal" />
                    </div>
                    <div id="right-side" className=" max-sm:hidden ">
                         <SvgMaking />
                    </div>
               </div>
          </section>
     );
};

export default Servises;
