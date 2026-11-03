import { useParams } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import NotFound from "./NotFound";
import { COVER_LAYOUT, DEFAULT_ROWS, getProjectSlug, projects } from "../data/projects";
import { usePageTitle } from "../hooks/usePageTitle";

function Project() {
  const { slug } = useParams();
  const index = projects.findIndex(({ name }) => getProjectSlug(name) === slug);
  const project = projects[index];

  usePageTitle(project?.name);

  if (!project) return <NotFound />;

  // En los extremos, la lista da la vuelta
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

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
      details={project.details}
      gallery={gallery}
      rows={project.rows ?? DEFAULT_ROWS}
      previous={previous.name}
      next={next.name}
    />
  );
}

export default Project;
