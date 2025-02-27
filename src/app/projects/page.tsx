import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "NexStore - Connecting Consumers with Local Shops",
      description:
        `NexStore is a platform designed to bridge the gap between consumers and 
        local shops by improving shop visibility and enabling quick discovery of nearby stores`,
      tags: ["Reactjs", "MySQL", "Shadcn Ui", "Nodejs"],
      link: "https://github.com/gnyarko-dev/NexStore",
    },
   
    {
      title: "KeepClean - Waste Management and Community Engagement Platform",
      description:
        "KeepClean is an innovative waste management platform designed to encourage proper waste disposal, prevent floods, and reward users for contributing to a cleaner environment. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui", "PostgresSQL", "Web3Auth"],
      link: "https://github.com/gnyarko-dev/keep-clean",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
