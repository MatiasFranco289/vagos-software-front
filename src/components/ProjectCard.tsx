interface ProjectCardProps {
  title: string;
  img: string;
  state: string;
  startDate: string;
  endDate: string;
  tags: Array<string>;
}

export default function ProjectCard({
  title = "Project title",
  img = "https://lh3.googleusercontent.com/a/ACg8ocJc4xXvwYl6TRzZNaf8Vg5SNtzN0FrnJkq3uPUsHvbX_rKZ0L8=s288-c-no",
  state = "Undefined",
  startDate = "00/00/0000",
  endDate = "00/00/0000",
  tags = ["Undefined", "Undefined", "Undefined"],
}: ProjectCardProps) {
  return (
    <div
      className="w-[300px] min-w-[300px] min-h-[300px]
    m-3 flex flex-col items-center p-3 border-2 bg-zinc-900
    hover:scale-105 duration-100 cursor-pointer"
    >
      <h2 className="font-bold text-2xl pb-3">{title}</h2>

      <div className="border-2 p-2 w-4/6">
        <div className="border-2 p-2">
          <img src={img} alt="project_img" />
        </div>
      </div>

      <div className="pt-3 w-full flex flex-col mt-3 p-2">
        <div className="flex justify-between">
          <div className="w-3/12">
            <p>
              <p className="font-medium mr-2">Estado: </p>
            </p>
          </div>

          <div className="w-8/12">
            <p className="font-thin">{state}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-3/12">
            <p>
              <p className="font-medium mr-2">Inicio: </p>
            </p>
          </div>

          <div className="w-8/12">
            <p className="font-thin">{startDate}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-3/12">
            <p>
              <p className="font-medium mr-2">Fin: </p>
            </p>
          </div>

          <div className="w-8/12">
            <p className="font-thin">{endDate}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-3/12">
            <p>
              <p className="font-medium mr-2">Tags: </p>
            </p>
          </div>

          <div className="w-8/12 flex flex-wrap">
            {tags.map((str, index) => {
              let text: string = str;
              if (index != tags.length - 1) {
                text += ",";
              }

              return <p className="font-thin mr-1">{text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
