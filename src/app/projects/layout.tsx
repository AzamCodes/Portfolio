import { ReactNode } from "react"; // Import ReactNode
import { generateMetadata as fetchMetadata } from "./ProjectMetadata"; // Import the metadata function

// Define the type for params
interface Params {
  id: string; // Adjust the type based on your route parameters
}

// Define the props type for the layout component
interface ProjectLayoutProps {
  children: ReactNode; // Specify that children can be any valid React node
}

export async function generateMetadata({ params }: { params: Params }) {
  return await fetchMetadata({ params }); // Call the metadata function
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return <div>{children}</div>; // Render the project page content
};

export default ProjectLayout;
