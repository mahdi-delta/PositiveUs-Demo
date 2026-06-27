import { useState } from "react";
import OurWorkingProgressCard from "../../Components/OurWorkingProgressCard";
import { OWPData } from "../../Constants";
import SectionHeader from "../../Components/SectionHeader";

const OurWorkingProcess = () => {
     const [Active, setActive] = useState(0);

     return (
          <section className="flex flex-col gap-fix">
               <SectionHeader
                    title="Our Working Progress"
                    textOne="Step-by-Step Guide to Achieving"
                    textTwo="Your Business Goals"
               />

               <main className="flex flex-col gap-fix/2">
                    {OWPData.map((item) => (
                         <OurWorkingProgressCard
                              id={item.id}
                              title={item.title}
                              des={item.description}
                              Active={Active}
                              setActive={setActive}
                              key={item.id}
                         />
                    ))}
               </main>
          </section>
     );
};

export default OurWorkingProcess;
