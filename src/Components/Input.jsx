const Input = ({ type, placeholder, label, lableText, bgColor="transparent", borderColor }) => {
     return (
          <div className="flex flex-col gap-2">
               {label && <label className="text-dark text-md">{lableText}</label>}
               {type !== "textarea" ? (
                    <input
                         type={type}
                         style={{backgroundColor: bgColor, borderColor: borderColor, color:borderColor}}
                         className="min-w-100 w-full px-8 py-4.5 border-1 border-dark rounded-2xl placeholder:text-sm bg-white max-md:min-w-auto max-md:p-3"
                         placeholder={placeholder}
                    />
               ) : (
                    <textarea
                         style={{backgroundColor: bgColor}}
                         placeholder="Massage"
                         className="mt-0 w-full px-8 py-4.5 border-1 border-dark rounded-2xl placeholder:text-sm bg-white max-md:p-3"
                    ></textarea>
               )}
          </div>
     );
};

export default Input;
