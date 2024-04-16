import HeroCategoryCards from "../HeroCategoryCards/HeroCategoryCards";
import SliderComponent from "../Slider/SliderComponent";
import TaglineComponent from "./TaglineComponent";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <SliderComponent />
      </div>

      {/* TAGLINE */}
      <div className="bg-[#221e1f] text-white min-h-[280px] flex flex-col items-center">
        <TaglineComponent />
      </div>

      {/* HERO CARDS */}
      <div>
        <HeroCategoryCards />
      </div>

    </div>
  );
};

export default HeroSection;
