interface ProjectLinkProps {
  children: React.ReactNode;
  link: string;
  linkText: string;
}

function ProjectLink({ children, link, linkText }: ProjectLinkProps) {
  return (
    <button className="flex items-center gap-2.5">
      {children}
      <span className="cursor-pointer text-[15px] text-gray-100 underline transition-transform duration-300 hover:scale-95">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </span>
    </button>
  );
}

export default ProjectLink;
