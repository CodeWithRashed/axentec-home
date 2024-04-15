import SliderComponent from "../Slider/SliderComponent";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <SliderComponent />
      </div>

      {/* TAGLINE */}
      <div className="bg-[#221e1f] text-white min-h-[280px] flex flex-col items-center">
        <h1 className="text-right">INNOVATE, INTEGRATE</h1>
        <h1 className="text-left">INSPIRE</h1>
      </div>
    </div>
  );
};

export default HeroSection;
