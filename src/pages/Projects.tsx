import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { request, ApiProject } from "../constants";

export default function Projects() {
  const [projects, setProjects] = useState<Array<ApiProject>>([]);

  const getProjects = async () => {
    try {
      const result = await request.get("http://localhost:3000/projects/all");
      console.log("alto resultado viteh");
      console.log(result);
      setProjects(result.data.data);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="mt-32 flex flex-col items-center">
      <h1 className="font-bold">Proyectos</h1>

      <div className="w-5/6 flex justify-center flex-wrap mt-16">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              img={project.thumbnail}
              state={project.project_status.status_name}
              startDate={project.startDate}
              endDate={project.endDate}
              tags={project.tags}
              key={`project_card_${index}`}
            />
          );
        })}
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
}
