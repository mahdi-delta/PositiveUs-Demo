import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import { TestimonialsData } from "../../Constants";
import Arrow from "../../assets/Svgs/Icons/Button/Arrow";

const Testimonials = () => {
    const totalItems = TestimonialsData.length;

    const [Active, setActive] = useState(0);
    const [RightShowPosition, setRightShowPosition] = useState(1);
    const [LeftShowPosition, setLeftShowPosition] = useState(totalItems - 1);
    const [RightHidePosition, setRightHidePosition] = useState(2);
    const [LeftHidePosition, setLeftHidePosition] = useState(totalItems - 2);

    const updatePositions = (newActiveIndex) => {
        const newActive = (newActiveIndex + totalItems) % totalItems;
        setActive(newActive);
        setRightShowPosition((newActive + 1) % totalItems);
        setLeftShowPosition((newActive - 1 + totalItems) % totalItems);
        setRightHidePosition((newActive + 2) % totalItems);
        setLeftHidePosition((newActive - 2 + totalItems) % totalItems);
    };

    const handleSlide = (direction) => {
        updatePositions(Active + direction);
    };

    const handleDotClick = (index) => {
        updatePositions(index);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        handleSlide(+1);
      },5000);

      return () => {
        clearInterval(interval)
      }
    }, [Active])

    const getSlideStyle = (index) => {
        if (index === Active) {
            return 'z-20 scale-100 opacity-100'; // Center slide
        }
        if (index === RightShowPosition) {
            return 'z-10 scale-75 opacity-75 translate-x-full';
        }
        if (index === LeftShowPosition) {
            return 'z-10 scale-75 opacity-75 -translate-x-full';
        }
        if (index === RightHidePosition) {
            return 'z-0 scale-50 opacity-25 translate-x-[200%]';
        }
        if (index === LeftHidePosition) {
            return 'z-0 scale-50 opacity-25 -translate-x-[200%]';
        }
        return 'z-0 scale-0 opacity-0';
    };

    return (
        <section id="testimonials" className="flex flex-col gap-fix scroll-mt-20">
            <SectionHeader
                title="Testimonials"
                textOne="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about"
                textTwo="Our Digital Marketing Services"
            />
            <main className="h-130 max-sm:h-150 overflow-hidden py-20 bg-dark grid place-items-center rounded-box relative">
                {TestimonialsData.map((Massage, index) => (
                    <div
                        key={index}
                        className={`max-w-120 bg-dark mx-5 flex flex-col justify-start gap-15 absolute transition-all duration-500 ease-in-out ${getSlideStyle(index)}`}
                    >
                        <div
                            className={`w-full min-h-65 p-10 border-1 border-light-green rounded-box text-white relative
                            after:content-[''] after:absolute after:w-10 after:h-10 after:bg-linear-135 after:from-light-green after:from-0% after:via-light-green after:via-50% after:to-transparent after:to-0% after:left-10 after:-bottom-10
                            before:content-[''] before:absolute before:w-6 before:h-6 before:bg-linear-135 before:from-dark before:from-0% before:via-dark before:via-50% before:to-transparent before:to-0% before:left-10.5 before:-bottom-6 before:z-10
                            `}
                        >
                            {Massage.quote}
                        </div>
                        <div className="w-max px-5 border-x-2 border-light-green rounded-md">
                            <h3 className="text-light-green font-semibold">
                                {Massage.author}
                            </h3>
                            <p className="text-white">{Massage.title}</p>
                        </div>
                    </div>
                ))}
                <div className="absolute bottom-6 flex items-center gap-10 z-30">
                    <button onClick={() => handleSlide(-1)} className="w-8 h-8 rotate-180 active:scale-90 transition-scale duration-200 cursor-pointer">
                        <Arrow className="fill-light-green w-8 h-8" />
                    </button>
                    <div className="flex justify-center items-center gap-2.5">
                        {Array.from({ length: totalItems }, (_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => handleDotClick(index)}
                                className="w-3 h-3 rounded-full transition-colors mt-auto ring-2 cursor-pointer ring-stone-700"
                                style={{
                                    backgroundColor:
                                        Active === index ? "#B9FF66" : "#0C0A09",
                                }}
                            ></button>
                        ))}
                    </div>
                    <button onClick={() => handleSlide(1)} className="w-max h-max active:scale-90 transition-scale duration-200 cursor-pointer">
                        <Arrow className="fill-light-green w-8 h-8" />
                    </button>
                </div>
            </main>
        </section>
    );
};

export default Testimonials;