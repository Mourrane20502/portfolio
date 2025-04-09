import { Button } from "@/components/ui/button";
import { MyProjects } from "@/data/data";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";
import {
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Navbar from "./(me)/components/Navbar";

export default function Home() {
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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <Navbar />
      <section className="flex flex-col items-center justify-center mt-10 px-4">
        <h2 className="text-3xl dark:text-white font-bold text-gray-800 mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 w-full max-w-5xl">
          {MyProjects.map((project) => (
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
                    {" "}
                    Live Demo <BiRightArrow className="ml-1" />{" "}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
