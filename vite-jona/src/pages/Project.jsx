import { useParams } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import NotFound from "./NotFound";
import { COVER_LAYOUT, DEFAULT_ROWS, getProjectSlug, projects } from "../data/projects";
import { usePageTitle } from "../hooks/usePageTitle";

function Project() {
  const { slug } = useParams();
  const project = projects.find(({ name }) => getProjectSlug(name) === slug);

  usePageTitle(project?.name);

  if (!project) return <NotFound />;

  // Sin galería propia, el proyecto muestra su portada en la misma grilla
  const gallery = project.gallery ?? [
    { src: project.img, alt: `${project.name} project cover`, layout: COVER_LAYOUT },
  ];

  return (
    <ProjectGallery
      name={project.name}
      description={project.description}
      nameLayout={project.nameLayout}
      descriptionLayout={project.descriptionLayout}
      gallery={gallery}
      rows={project.rows ?? DEFAULT_ROWS}
    />
  );
}

export default Project;
