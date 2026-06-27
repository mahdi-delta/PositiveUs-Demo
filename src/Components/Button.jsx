// const Button = ({ bg, color , text, width="auto"}) => {
//      return (
//           <button style={{backgroundColor: bg, color: color, width: width}} className="w-max px-7 py-4 border-1 rounded-xl border-dark cursor-pointer transition-all duration-300 ">
//             {text}
//           </button>
//      );
// };

// export default Button;
const Button = ({ bg , text, width="auto"}) => {
     return (
          <button style={{width: width}} className={`w-max px-7 py-4 border-1 rounded-xl border-dark cursor-pointer transition-all duration-300 hover:scale-105 ${bg == "#191A23" ? "bg-dark text-white hover:bg-light-green hover:text-dark border-light-green" : "bg-white text-dark hover:bg-dark hover:text-white border-dark"}`}>
            {text}
          </button>
     );
};

export default Button;
