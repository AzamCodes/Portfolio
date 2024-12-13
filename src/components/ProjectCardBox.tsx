import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface ProjectCardBoxProps {
  id: string;
  title: string;
  img: string;
  project: { title: string; img: string };
}

const ProjectCardBox = ({ project }: ProjectCardBoxProps) => {
  const { title, img } = project;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DirectionAwareHover
        imageUrl={img}
        className="relative md:h-[420px] w-full h-full md:w-[550px]"
      >
        <h3 className="text-xl font-bold">{title}</h3>
      </DirectionAwareHover>
    </div>
  );
};

export default ProjectCardBox;
