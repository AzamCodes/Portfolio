import { projects } from "../../../data"; // Adjust the import path as necessary

// Define the type for params
interface Params {
  id: string; // Adjust the type based on your route parameters
}

export async function generateMetadata({ params }: { params: Params }) {
  const project = projects.find((proj) => proj.id === Number(params.id));

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.shortdesc,
    openGraph: {
      title: project.title,
      description: project.shortdesc,
      url: `https://www.azamportfolio.com/projects/${project.id}`,
      images: [
        {
          url: project.img,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortdesc,
      image: project.img,
    },
  };
}
