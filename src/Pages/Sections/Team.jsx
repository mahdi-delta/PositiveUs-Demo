import Button from "../../Components/Button";
import SectionHeader from "../../Components/SectionHeader";
import { TeamData } from "../../Constants";
import SvgLinkedin from "../../assets/Svgs/Images/Team/SvgLinkedin";

const Team = () => {
     return (
           <section id="team" className="flex flex-col gap-fix scroll-mt-20">
               <SectionHeader
                    title="Team"
                    textOne="Meet the skilled and experienced team behind our"
                    textTwo="successful digital marketing strategies "
               />

               <main className="grid grid-cols-3 place-items-center gap-fix/2 max-xl:grid-cols-2 max-md:grid-cols-1">
                    {TeamData.map((person) => (
                         <div
                              key={person.name}
                              className="min-h-90 flex flex-col p-12 divide-y-1 divide-dark border-1 border-dark border-b-5 rounded-box"
                         >
                              <div
                                   id="top"
                                   className="w-full flex justify-start items-end gap-2 relative pb-5"
                              >
                                   <div id="image">
                                        <img src={person.image} alt="Team Image" />
                                   </div>
                                   <div>
                                        <h2 className="text-dark font-semibold text-md">
                                             {person.name}
                                        </h2>
                                        <p className="text-dark">{person.job}</p>
                                   </div>
                                   <div className="absolute top-0 right-0">
                                        <SvgLinkedin />
                                   </div>
                              </div>
                              <div id="bottom" className="pt-5 w-full ">
                                   {person.des}
                              </div>
                         </div>
                    ))}
               </main>

               <div className="flex justify-end items-center max-sm:justify-center">
                    <Button bg="#191A23" text="See all team" />
               </div>
          </section>
     );
};

export default Team;
