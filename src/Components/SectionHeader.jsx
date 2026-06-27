const SectionHeader = ({ title, textOne, textTwo }) => {
     return (
          <header className="flex justify-start gap-8 max-md:flex-col">
               <div
                    id="title"
                    className="flex justify-center items-center px-2 rounded-md bg-light-green font-semibold text-3xl leading-2"
               >
                    {title}
               </div>
               <div className="flex flex-col items-start justify-between max-md:items-center max-md:text-center">
                    <h3>{textOne}</h3>
                    <h3>{textTwo}</h3>
               </div>
          </header>
     );
};

export default SectionHeader;
