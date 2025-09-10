"use client";

// Built Ins 
import { useState } from "react";

// Assets 
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";


export const ContactSection = () => {
  // Define states for Like Clicker 
  const [likeCount, setLikeCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); 

  // Define Like Clicker function
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1); 
    setIsAnimating(true); 

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        
        {/* Wrapper for Gradient */}
        <div className="bg-gradient-to-r from-color-primary to-color-secondary p-8 text-white py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}> </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Contact Text */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Stay In Touch</h2>
              <p className="text-sm mt-2 text-white/60">Navigate to my contact details to connect & explore possible opportunities!</p>
            </div>

            {/* Contact Buttons */}
            <div>
              <button
                className="text-white bg-color-dark inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max hover:bg-gray-800"
                onClick={handleLikeClick}
              >
                <span className="font-semibold">
                  Like{" "}
                  <span
                    style={{
                      fontSize: isAnimating ? "18px" : "16px", 
                      transition: "font-size 0.3s ease", 
                    }}
                  >
                    🤍
                  </span>{" "}
                  {likeCount}
                </span>
              </button>
              
              {/* Email Button */}
              <button className="text-white bg-color-dark inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6 w-max ml-4 hover:bg-gray-800">
                <span className="font-semibold">
                  <a href="mailto:hmaddi61@gmail.com">Contact Me</a>
                </span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
