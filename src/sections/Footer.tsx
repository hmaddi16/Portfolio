// Assets
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";


// Items for Footer
const footerLinks = [
  {
    title: "LinkedIn",
    href: "http://www.linkedin.com/in/harshitha-maddi-a00303293", 
  },
  {
    title: "GitHub",
<<<<<<< HEAD
    href: "https://github.com/hmaddi16", 
=======
    href: "https://github.com/hmaddi61", 
>>>>>>> 8b5b087f96db57aa14a5106472beb77e4b4668a5
  },
  {
    title: "Home",
    href: "#hero",
  },
]

export const Footer = () => {
  return (
    <footer className="relative -z-2 overflow-x-clip">
      {/* Background Gradient */}
      <div className="absolute h-[400px] w-[1500px] bottom-0 left-1/2 -translate-x-1/2 bg-color-secondary/50 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"> </div>

      <div className="container">
        {/* Footer Wrapper */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Copyright Text */}
          <div className="text-white/60">&copy; 2024. All Rights Reserved.</div>

          {/* Footer Mapping */}
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
                <span className="hover:font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
