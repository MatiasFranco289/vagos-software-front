import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="mt-32 flex flex-col items-center">
      <h1 className="font-bold">Proyectos</h1>

      <div className="w-5/6 flex justify-center flex-wrap mt-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
