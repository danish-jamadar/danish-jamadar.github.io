import { generatePageMetadata } from "../seo";
import { ProjectCard } from "../../components/project-card";
import React from "react";
import { Project } from "@/types";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { fetchProjects } from "@/utils";
export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "View some of my notable open source web apps, npm packages, cli tools and more.",
});

export default async function Projects() {
  const allProjects: Project[] = await fetchProjects();

  return (
    <React.Fragment>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Projects</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 "
        >
          {allProjects.map((project, idx) => (
            <div key={idx}>
                <ProjectCard
                  project={project}
                  showThumbnailImage={true}
                  isLast={allProjects.length == idx}
                  showBottomBorder = {false}
                />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export const revalidate = 60;
