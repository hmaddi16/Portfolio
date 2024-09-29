"use client";

// Built Ins 
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Components 
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { Card } from "@/components/Card";

// Assets 
import college from "@/assets/images/college.png";
import HTMLIcon from "@/assets/icons/html5.svg";
import mapImage1 from "@/assets/images/map1.png";
import smileMemoji from "@/assets/images/memoji-smile.png";


// Items for Tech Toolbox (to be mapped)
const toolboxItems = [
  {
    title: 'Java',  
    iconType: HTMLIcon,
  },
  {
    title: 'Python',  
    iconType: HTMLIcon,
  },
  {
    title: 'C/ C#',  
    iconType: HTMLIcon,
  },
  {
    title: 'HTML/ CSS',  
    iconType: HTMLIcon,
  },
  {
    title: 'MySQL',  
    iconType: HTMLIcon,
  },
  {
    title: 'React',  
    iconType: HTMLIcon,
  },
];

// Items for Hobbies (to be mapped)
const hobbies = [
  {
    title: 'Cooking',  
    emoji: '👩‍🍳',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Baking',  
    emoji: '🍰',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Fitness',  
    emoji: '💪',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Shopping',  
    emoji: '🛍️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Movies',  
    emoji: '🎬',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Reading',  
    emoji: '📖',
    left: '5%',
    top: '65%',
  },
];

export const AboutSection = () => {
  // Refs for animation
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-10">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="Narrative In A Nutshell"></SectionHeader>
        
        {/* Wrapper for Grid */}
        <div className="mt-14 flex flex-col gap-8">

          {/* First Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">          
            {/* Education Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Education" description="George Mason University | B.S Computer Science (GPA: 3.7); Aug 2022 - Dec 2025"/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={college} alt="GMU Honors College Cover"/>
              </div>
            </Card>

            {/* Toolbox Card */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="Tech Toolbox" description="" className=""/>
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:25s]"/>
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:25s]"/>
            </Card>
          </div>

          {/* Second Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Hobbies Card */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="(BTS) Behind The Syntax" description="Discover my hobbies & the activities I enjoy!" className="px-6 py-6"/>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((item) => (
                  <motion.div key={item.title} className="inline-flex items-center gap-2 px-5 bg-gradient-to-r from-color-primary to-color-secondary rounded-lg rounded-full py-1.5 absolute" style={{left: item.left, top: item.top}} drag dragConstraints={constraintRef}> 
                    <span className="font-medium text-sm text-white/90">{item.title}</span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Location Card */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage1} alt="Location" className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-color-secondary/90 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="Memoji of me" className="size-12"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
