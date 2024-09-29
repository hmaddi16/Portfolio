// Components
import { HeroOrbit } from "@/components/HeroOrbit";

// Assets
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";


export const HeroSection = () => {
  return (
  <div id="hero" className="py-32 md: py-50 lg:py-56 relative z-0 overflow:x-clip"> {/*py-32 md:py-48 lg:py-60 */}

    {/* Background Components */}
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_10%,transparent)] -z-30 overflow-x-clip">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage: `url(${grainImage.src})`}}>
      </div>

      {/* Rings */}
      <div className="size-[640px] hero-ring"></div> 
      <div className="size-[840px] hero-ring"></div> 
      <div className="size-[1040px] hero-ring"></div> 
      <div className="size-[1240px] hero-ring"></div> 
      
      {/* Stars */}
      <HeroOrbit size={800} rotation={-30}> <StarIcon className="size-28 text-color-secondary"/> </HeroOrbit>
      <HeroOrbit size={670} rotation={-36}> <StarIcon className="size-8"/> </HeroOrbit>
      <HeroOrbit size={590} rotation={-4}> <StarIcon className="size-16 text-color-secondary"/> </HeroOrbit>
      <HeroOrbit size={700} rotation={-70}> <StarIcon className="size-16"/> </HeroOrbit>
      <HeroOrbit size={650} rotation={118}> <StarIcon className="size-10 text-color-secondary"/> </HeroOrbit>
      <HeroOrbit size={650} rotation={110}> <StarIcon className="size-20 opacity-80"/> </HeroOrbit>
      <HeroOrbit size={530} rotation={175}> <StarIcon className="size-12"/> </HeroOrbit>
      <HeroOrbit size={820} rotation={140}> <StarIcon className="size-24 text-color-secondary"/> </HeroOrbit>
      <HeroOrbit size={720} rotation={100}> <div className="size-3 rounded-full bg-white/30"/> </HeroOrbit>
      <HeroOrbit size={650} rotation={-50}> <div className="size-3 rounded-full bg-white/30"/> </HeroOrbit>
      <HeroOrbit size={650} rotation={160}> <div className="size-4 rounded-full bg-white/40"/> </HeroOrbit>
    </div>

    {/* Hero Content */}
    <div className="container">
      {/* Lottie Robot Animation */}
      <div className="flex flex-col items-center">
        <iframe 
          loading="lazy" 
          src="https://lottie.host/embed/0720847b-5642-4666-8f5d-eb23b8f4ed95/o0IabfgqAu.json" 
          className="size-[200px]">
        </iframe>
      </div>

      {/* Hero Text */}
      <div className="max-width-lg mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mt-0 tracking-wide"> 
          Hi! I'm <span className="text-color-secondary">Harshitha</span> Maddi.
        </h1>

        <p className="mt-1 text-center text-white/60 md:text-lg">
          A Computer Science student with a passion in the intersection          
          <br></br>of business &  technology. With practical experience, I seek to explore
          <br></br> new opportunities. Browse my page to learn more about me!
        </p>
      </div>
      
      {/* Hero Button */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-7">
        <button className="inline-flex items-center bg-color-secondary text-white px-5 py-2 rounded-full text-m font-semibold hover:bg-white/20 hover:text-white transition duration-300">
          <span><a href="https://docs.google.com/document/d/1xD5NcGzeMG-ToGYj_DT9288PoZ0py_75LruCarfEiNs/edit?usp=sharing">Resume 📄</a></span>
        </button>
      </div>
    </div>
  </div>
  );
};
