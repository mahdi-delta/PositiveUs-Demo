const OurWorkingProgressCard = ({ id, title, des, Active, setActive }) => {
     return (
          <div
               style={{ backgroundColor: Active == id ? "#B9FF66" : "#f3f3f3" }}
               className={`w-full flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                    Active === id ? "divide-y-1 divide-dark max-h-96" : "max-h-35"
               } p-10 rounded-box border-1 border-b-5 border-dark`}
               onClick={() => setActive(Active === id ? null : id)}
          >
               <div id="top" className="flex justify-between items-center pb-7">
                    <div id="left" className="flex items-center gap-5">
                         <span id="id" className="font-semibold text-5xl max-md:text-4xl">
                              {id}
                         </span>
                         <h2 id="title" className="font-medium text-2xl max-md:text-xl max-sm:text-[17px]">
                              {title}
                         </h2>
                    </div>
                    <div
                         id="right"
                         className="min-w-13 min-h-13 flex justify-center items-center rounded-full border-1 border-b-3 border-r-2 max-sm:scale-70"
                    >
                         <button className="flex justify-center items-center font-semibold text-6xl w-7 h-7 aspect-square max-md:text-5xl">
                              {Active === id ? "-" : "+"}
                         </button>
                    </div>
               </div>
               <div id="bottom" className="pt-7">
                    <p style={{opacity: Active == id ? "100" : "0", transition: "all .5s"}} id="des">{des}</p>
               </div>
          </div>
     );
};

export default OurWorkingProgressCard;
