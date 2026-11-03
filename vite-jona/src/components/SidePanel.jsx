import MenuButton from "./MenuButton";
import { useDialog } from "../hooks/useDialog";

const SKILLS = [
  "SketchUp",
  "D5 Render",
  "Enscape",
  "V-Ray",
  "Photoshop",
  "React & JavaScript",
  "UI/UX Design",
  "Tailwind CSS",
];

const CONTACT_LINKS = [
  {
    title: "Email",
    href: "mailto:joonacalistro@gmail.com",
    label: "joonacalistro@gmail.com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jonathan-calistro-ab328a14b/",
    label: "linkedin.com/jonathan-calistro",
    external: true,
  },
  {
    title: "GitHub",
    href: "https://github.com/JoonaCP",
    label: "github.com/JoonaCP",
    external: true,
  },
];

function About() {
  return (
    <div className="space-y-4">
      <p className="text-black dark:text-white font-plus font-light leading-relaxed">
        I am an advanced architecture student who also has programming experience.
      </p>
      <p className="text-black dark:text-white font-plus font-light leading-relaxed">
        I work on architectural 3D modeling and rendering across a wide range of software.
      </p>
      <div className="mt-6 space-y-2">
        <h3 className="font-plus font-light text-black dark:text-white">Skills</h3>
        <ul className="space-y-1 text-black dark:text-white font-plus font-light">
          {SKILLS.map((skill) => (
            <li key={skill}>• {skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {CONTACT_LINKS.map(({ title, href, label, external }) => (
          <div key={title}>
            <h3 className="font-plus font-light text-black dark:text-white mb-2">{title}</h3>
            <a
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="text-black dark:text-white font-plus font-light underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// gridAligned: en la grilla de 5 columnas, el panel ocupa exactamente la última
function SidePanel({ open, content, onClose, gridAligned = false }) {
  const panelRef = useDialog(open, onClose);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-modal bg-black bg-opacity-50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={content || "Information"}
        inert={!open}
        className={`fixed top-0 right-0 h-full w-96 max-w-[90vw] ${gridAligned ? "lg:w-[20%]" : ""} flex flex-col bg-white dark:bg-darkBg border-l border-black dark:border-white z-modal transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Alto de la barra superior: su borde coincide con la primera línea de la grilla */}
        <div className="h-[68px] shrink-0 flex items-center justify-between px-5 border-b border-black dark:border-white">
          {content && (
            <h2 className="text-xl font-plus font-light text-black dark:text-white uppercase">
              {content}
            </h2>
          )}
          <MenuButton open onClick={onClose} label="Close panel" className="ml-auto" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto overscroll-contain [overflow-wrap:anywhere]">
          {content === "about" && <About />}
          {content === "contact" && <Contact />}
        </div>
      </div>
    </>
  );
}

export default SidePanel;
