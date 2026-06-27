import Arrow from "../assets/Svgs/Icons/Button/Arrow";
import Svg1 from "../assets/Svgs/Images/Servises/Svg1";
import Svg2 from "../assets/Svgs/Images/Servises/Svg2";
import Svg3 from "../assets/Svgs/Images/Servises/Svg3";
import Svg4 from "../assets/Svgs/Images/Servises/Svg4";
import Svg5 from "../assets/Svgs/Images/Servises/Svg5";
import Svg6 from "../assets/Svgs/Images/Servises/Svg6";

const ServisesCard = ({
    titleOne,
    titleTwo,
    bgColor,
    bgTextColor,
    textColor,
    btnColor,
    btnArrowColor,
    btnTextColor,
    imageNumber,
}) => {

    // The useEffect hook has been removed completely.

    return (
        <div
            style={{ backgroundColor: bgColor }}
            className="flex justify-between p-10 border-2 border-dark shadow-[0_3px_0_0_#000] rounded-box min-h-75 overflow-hidden max-mid:w-3/4 max-mid:odd:ml-auto max-mid:even:mr-auto max-md:w-full max-sm:flex-col transition-all duration-300 hover:shadow-[0px] hover:translate-y-[4px] "
        >
            <div id="left-side" className="flex flex-col justify-between max-sm:flex-col max-sm:gap-3">
                <div id="title">
                    <div
                        id="lineOne"
                        style={{ backgroundColor: bgTextColor, color: textColor }}
                        className="text-2xl font-semibold rounded-md w-max px-1 py-0.5"
                    >
                        {titleOne}
                    </div>
                    <div
                        id="lineTwo"
                        style={{ backgroundColor: bgTextColor, color: textColor }}
                        className="text-2xl font-semibold rounded-md w-max px-1 py-0.5"
                    >
                        {titleTwo}
                    </div>
                </div>
                <div id="btn" className="flex justify-center items-center gap-3 max-sm:justify-start">
                    <button style={{ backgroundColor: btnColor }} className="rounded-full p-1">
                        <Arrow
                            fill={btnArrowColor}
                            className={`bg-${btnColor} w-8 h-8 transition-rotate duration-300 -rotate-20 hover:rotate-0`}
                        />
                    </button>
                    <div id="text" style={{ color: btnTextColor }} className="font-medium">
                        Learn more
                    </div>
                </div>
            </div>
            <div id="right-side" className="text-black text-8xl mt-auto max-md:scale-70">
                {imageNumber == 0 ? (
                    <Svg1 />
                ) : imageNumber == 1 ? (
                    <Svg2 />
                ) : imageNumber == 2 ? (
                    <Svg3 />
                ) : imageNumber == 3 ? (
                    <Svg4 />
                ) : imageNumber == 4 ? (
                    <Svg5 />
                ) : (
                    <Svg6 />
                )}
            </div>
        </div>
    );
};

export default ServisesCard;