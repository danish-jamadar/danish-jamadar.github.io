import { GitHubIcon, LinkIcon } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import { Project } from "@/types";
import { trimString } from "@/utils";
import Image from "next/image";
import ProjectImage from "./project-image";
import Link from "next/link";
import { LINKS } from "@/lib/constants";

type Props = {
  project: Project;
  showThumbnailImage: boolean;
  isLast: boolean;
  showBottomBorder: boolean;
};

export const ProjectCard = (props: Props) => {
  const {
    project,
    showThumbnailImage = true,
    isLast,
    showBottomBorder,
  } = props;
  return (
    <div className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50">
      <Link href={`${LINKS.PROJECTS_SECTION}/${project.slug}`} passHref>
        <div key={project.title}>
          {showThumbnailImage && (
            <ProjectImage
              src={project?.thumbnail || ""}
              alt={project?.title || "Project Thumbnail"}
              className="mb-6 h-auto w-full rounded-lg border-black shadow-lg"
            />
          )}
          <div className="p-4">
            <div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {project.title}
            </div>
            <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
              {trimString(project.description, 225)}
            </div>
            {project?.companyName && project?.year && (
              <div className="  mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="text-base  tracking-tight text-zinc-800 dark:text-zinc-100">
                  Company :{" "}
                </span>
                {project?.companyName} - {project?.year}
              </div>
            )}
            <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
              {project.tags.map((techStackItem, index) => (
                <p
                  className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                  key={index}
                >
                  {techStackItem}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <div className="mb-3 ml-5 flex items-center">
        {!project?.repoLinkExpired && (
          <SocialLink
            icon={GitHubIcon}
            href={project.repo}
            className="h-6 w-6 flex-none"
          />
        )}
        {!project?.liveLinkExpired && (
          <SocialLink
            icon={LinkIcon}
            href={project?.liveLink}
            className="h-6 w-6 flex-none"
          />
        )}
      </div>

      {showBottomBorder && !isLast && (
        <hr className="my-4 border-gray-300 dark:border-gray-700" />
      )}
    </div>
  );
};
