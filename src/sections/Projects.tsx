// Built Ins
import Image from "next/image";

// Components
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

// Assets
import newsBustr from "@/assets/images/newsBustr1.png";
import novaNest from "@/assets/images/novaNest.png";


// Items for Projects Section
const portfolioProjects = [
  {
    company: "Web App",
    year: "June 2024",
    title: "News Bustr",
    results: [
      { title: "Detects political bias in newspapers." },
      { title: "Uses the Naive Bayes model for sentiment analysis." },
      { title: "94% Model Accuracy; 97% Code Coverage." },
    ],
    link: "#",
    image: newsBustr,
  },
  {
    company: "Web App",
    year: "Sept 2024",
    title: "NOVA Nest",
    results: [
      { title: "Predicts price of properties in Northern Virginia." },
      { title: "Uses Linear Regression model & scikit-learn libraries." },
      { title: "Frontent built with HTML/CSS using Flask App." },
    ],
    link: "#",
    image: novaNest,
  },
];

export const ProjectsSection = () => {
  return ( 
  <section id="projects" className="pb-16 mt-24">    
    <div className="container">  
      <SectionHeader eyebrow="Real application" title="Featured Projects" />    
      
      <div className="flex flex-col mt-10 gap-12">
        {/* Portfolio Projects */}
        {portfolioProjects.map((project) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
          
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Project Details */}
              <div className="lg:pb-16">
                <div className="font-bold uppercase tracking-widest text-sm gap-2">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
                <hr className="border-t-2 border-white/15 mt-4"/>
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result) => (
                    <li className="text-white/60 text-sm" key={result.title}>{result.title}</li>
                  ))}
                </ul>
              </div>
              
              {/* Project Image */}
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};
