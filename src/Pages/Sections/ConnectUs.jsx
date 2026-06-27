import { useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import ConnectUsImage from "../../assets/Svgs/Images/ConnectUs/ConnectUs.jpg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const ConnectUs = () => {
     const [ActiveCheck, setActiveCheck] = useState(0);

     return (
          <section className=" flex flex-col gap-fix">
               <SectionHeader
                    title="Contact Us"
                    textOne="Connect with Us: "
                    textTwo="Let's Discuss Your Digital Marketing Needs"
               />

               <main className="w-full flex justify-between items-start bg-gray-light rounded-box ">
                    <div className="w-140 h-full p-15 flex flex-col gap-4 max-md:w-full max-md:p-10">
                         <div id="radios" className="flex items-center gap-5">
                              <div className="flex items-center gap-3">
                                   <input
                                        type="radio"
                                        onChange={() => setActiveCheck(0)}
                                        checked={ActiveCheck === 0 ? true : false}
                                        className="w-6 h-6 "
                                   />
                                   <label htmlFor="">Say Hi</label>
                              </div>
                              <div className="flex items-center gap-3">
                                   <input
                                        type="radio"
                                        onChange={() => setActiveCheck(1)}
                                        checked={ActiveCheck === 1 ? true : false}
                                        className="w-6 h-6"
                                   />
                                   <label htmlFor="">Get a Quote</label>
                              </div>
                         </div>
                         <Input type="text" placeholder="Name" label={true} lableText="Name*" />
                         <Input type="text" placeholder="Email" label={true} lableText="Email*" />
                         <Input type="textarea" placeholder="Massage*" label={true} lableText="Massage*" />

                         <Button bg="#191A23" text="send"/>
                    </div>
                    <div className=" w-max max-md:hidden">
                         <img src={ConnectUsImage} className="w-80 rounded-box" />
                    </div>
               </main>
          </section>
     );
};

export default ConnectUs;
