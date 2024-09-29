import { PropsWithChildren } from "react";

export const HeroOrbit = ({
    // Define Props
    children, 
    size,
    rotation
}: PropsWithChildren<{size: number; rotation: number}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        
        {/* Ring Container */}
        <div 
            className="" 
            style = {{transform: `rotate(${rotation}deg)`, height: `${size}px`, width: `${size}px`,}}>
            
            {/* Ring Item */}
            <div 
                className="inline-flex flex items-start justify-start"
                style={{transform: `rotate(${rotation * -1}deg)`}}> {children}
            </div>
        </div>
      </div>
    );
};