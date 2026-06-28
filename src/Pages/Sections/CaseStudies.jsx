import Arrow from "../../assets/Svgs/Icons/Button/Arrow";
import SectionHeader from "../../Components/SectionHeader";

const CaseStudies = () => {
     return (
           <section id="case-studies" className="flex flex-col gap-fix scroll-mt-20">
               <SectionHeader
                    title="Case Studio"
                    textOne="Explore Real-Life Examples of Our Proven Digital Marketing"
                    textTwo="Success through Our Case Studies"
               />

               <main className="w-full h-max flex justify-center items-center px-7 py-12 bg-dark rounded-box divide-x divide-light-green max-md:flex-col max-md:divide-y-1 max-md:divide-x-0">
                    <div className="px-3 flex flex-col gap-3 max-md:pb-3 max-md:px-0">
                         <div id="text" className="text-white">
                              For a local restaurant, we implemented a targeted PPC campaign that
                              resulted in a 50% increase in website traffic and a 25% increase in
                              sales.
                         </div>
                         <div className="flex items-center gap-3">
                              <p className="text-light-green">learn more</p>
                              <button className="bg-dark rounded-full p-1">
                                   <Arrow fill="#B9FF66" className={`bg-dark w-6 h-6 -rotate-20`} />
                              </button>
                         </div>
                    </div>
                    <div className="px-3 flex flex-col gap-3 max-md:py-3 max-md:px-0">
                         <div id="text" className="text-white">
                              For a B2B software company, we developed an SEO strategy that resulted
                              in a first page ranking for key keywords and a 200% increase in
                              organic traffic.
                         </div>
                         <div className="flex items-center gap-3">
                              <p className="text-light-green">learn more</p>
                              <button className="bg-dark rounded-full p-1">
                                   <Arrow fill="#B9FF66" className={`bg-dark w-6 h-6 -rotate-20`} />
                              </button>
                         </div>
                    </div>
                    <div className="px-3 flex flex-col gap-3 max-md:pt-3 max-md:px-0">
                         <div id="text" className="text-white">
                              For a national retail chain, we created a social media marketing
                              campaign that increased followers by 25% and generated a 20% increase
                              in online sales.
                         </div>
                         <div className="flex items-center gap-3">
                              <p className="text-light-green">learn more</p>
                              <button className="bg-dark rounded-full p-1">
                                   <Arrow fill="#B9FF66" className={`bg-dark w-6 h-6 -rotate-20`} />
                              </button>
                         </div>
                    </div>
               </main>
          </section>
     );
};

export default CaseStudies;
