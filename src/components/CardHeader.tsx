import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
    // Define Props
    title, 
    description,
    className,
}: {
    // Define Props Type
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
        
        {/* Title Content */}
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-color-secondary"/>
          <h3 className="font-serif text-2xl">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
      </div>
    );
}