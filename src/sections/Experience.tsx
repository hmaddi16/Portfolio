// Built Ins
import Image from "next/image";
import { Fragment } from "react";

// Components
import { SectionHeader } from "@/components/SectionHeader";
import {Card} from "@/components/Card";

// Assets
import codeNinjas from "@/assets/images/codeNinjas.jpg";
import dcWitness from "@/assets/images/dcWitness.png";
import college from "@/assets/images/college.png";


// Items for Experience Section
const experience = [
  {
    name: "Data Analytics Intern",
    position: "American Witness | DC Witness",
<<<<<<< HEAD
    text: "Optimized DASH App functionality + UI, enhancing graph readability. Cleaned & categorized incident records using Python libraries by implementing parent-child classifications",
=======
    text: "Optimized the DASH App’s functionality + UI, enhancing graph readability. Cleaned & categorized incident records using Python libraries by implementing parent-child classifications",
>>>>>>> 8b5b087f96db57aa14a5106472beb77e4b4668a5
    avatar: dcWitness,
  },
  {
    name: "Code Ninjas Fairfax",
    position: "Business | Assistant Director",
    text: "Undertake initiatives to enhance curriculum, streamline operations, serve as the primary point of contact among staff, students, & parents. Drove sales by 30% & maintain strong retention rates.",
    avatar: codeNinjas,
  },
  {
    name: "Teaching Assistant",
    position: "GMU | College of Computing & Engineering",
    text: "Offer personalized instruction to 200 students enrolled in the CS Department's foundational Python Course. Ensure theoretical knowledge & effective application.",
    avatar: college,
  },
  {
    name: "Collegiate-Leadership",
    position: "GMU | Clubs/ Soceities",
    text: "STEM Peer Mentor (Early Identification Program), Membership Chair (Women Of Color In STEM); Fundraising Chair (ISA: Indian Student Association), Executive (SISA: South Indian Student Association)",
    avatar: college,
  },
];

export const ExperienceSection = () => {
  return (
    <div id="experience" className="py-12 mt-12">
      <div className="container">
        {/* Section Header Info */}
        <SectionHeader eyebrow="Robust experience" title="Professional Growth" />
        <p className="text-sm mt-2 text-white/60 text-base text-center">Hover on each card to stop animating.</p>

        {/* Wrapper for Experience Cards */}
        <div className="mt-10 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,white_10%,white_70%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:25s] hover:[animation-play-state:paused]">

            {/* Duplicate Cards for Animation */}
            {[...new Array(2)].fill(0).map((_, index) => (

              // Experience Cards Container
              <Fragment key={index}>
                {experience.map((item) => (
                  <Card key={item.name} className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"> 
                    <div className="flex gap-4 items-center">   
                      {/* Project Avatar */}
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">          
                        <Image src={item.avatar} alt={item.name} className="max-h-full"/>
                      </div>

                      {/* Project Eyebrow */}
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-white/40">{item.position}</div>
                      </div>
                    </div> 

                    {/* Project Description */}
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{item.text}</p>          
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
