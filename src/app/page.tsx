"use client";
import { Button } from "@/components/ui/button";
import { MyProjects } from "@/data/data";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Navbar from "./(me)/components/Navbar";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const getToolIcon = (tool: string) => {
    switch (tool) {
      case "Next.js":
        return <SiNextdotjs className="text-black size-8" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-sky-400 size-8" />;
      case "TypeScript":
        return <SiTypescript className="text-white size-8" />;
      case "React":
        return <SiReact className="text-blue-600 size-8" />;
      case "Shadcn UI":
        return <SiShadcnui className="text-black size-8" />;
      case "MongoDB":
        return <SiMongodb className="text-green-600 size-8" />;
      case "Express.js":
        return <SiExpress className="text-green-600 size-8" />;
      default:
        return null;
    }
  };

  const projectsToShow = showAllProjects ? MyProjects : MyProjects.slice(0, 4);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Light mode background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:hidden"></div>

      {/* Dark mode background */}
      <div className="dark:block hidden absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>

      <Navbar />
      <section className="flex flex-col items-center justify-center mt-10 px-4 z-10">
        <h2 className="text-3xl dark:text-white font-bold text-gray-800 mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 w-full max-w-5xl">
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="group bg-white cursor-pointer border-gray-300 border-4 rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-[500px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-[20%] right-9 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tools.map((tool, index) => (
                    <div key={index} title={tool}>
                      {getToolIcon(tool)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
              <div className="flex justify-between items-center p-3">
                <Button
                  asChild
                  className="text-white dark:bg-black hover:bg-black cursor-pointer py-5 hover:none"
                >
                  <Link href={project.githubRepository} target="_blank">
                    GitHub
                    <GithubIcon className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="text-white dark:bg-black cursor-pointer flex items-center justify-center py-5 hover:none"
                >
                  <Link href={project.liveDemo} target="_blank">
                    Live Demo <BiRightArrow className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {!showAllProjects && (
          <Button
            className="mt-6 text-white dark:bg-black hover:bg-black cursor-pointer py-3"
            onClick={() => setShowAllProjects(true)}
          >
            See All Projects
          </Button>
        )}
      </section>
    </div>
  );
}
