import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { STACKS } from "../data/stack";
import { SocialLink } from "@/components/social-link";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import {
  fetchArticles,
  fetchExperienceList,
  fetchProjects,
  isEmpty,
} from "@/utils";
import { ProjectCard } from "@/components/project-card";
import { Project, WorkExperience } from "@/types";
import { TechStack } from "@/components/teck-stack";
import WorkExperienceList from "@/components/work-experience";
import { DownloadIcon } from "@/components/icons";
import { Divider } from "@/components/divider";
import { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import  Profile from "../../Profile.jpg"

export default async function Home() {
  const allMediumArticles = await fetchArticles();
  const mediumArticles = allMediumArticles?.slice(0, 2);

  const allProjects: Project[] = await fetchProjects();
  const workExperiences: WorkExperience[] = await fetchExperienceList();
  const projects = allProjects.slice(0, 2);

  return (
    <section>
      <Image
        src={Profile}
        width={120}
        height={100}
        alt="avatar"
        className="mb-5 cursor-pointer rounded-full"
        unoptimized
      />
      <h1 className="text-2xl font-bold">Danish Jamadar</h1>

      <div className="text-gray-700 dark:text-gray-300">
        <p className="mt-4">
          An Engineer passionate about building seamless, high-performance web applications that drive real impact.
          With a deep understanding of modern frontend architectures, I specialize in creating scalable, modular,
          and user-friendly interfaces that enhance digital experiences.
        </p>
        <p className="mb-4 mt-4">
        Over the years, I've worked on multiple projects to build end-to-end products, focusing on innovation and user-centric solutions.
        Whether designing intuitive user interfaces, improving application efficiency, or ensuring seamless integrations,
        I have a track record of delivering robust applications that meet business goals and exceed user expectations.
        </p>

        <p className="mb-4">
          If you&apos;d like to collaborate, please&nbsp;
          <a
            href="mailto:idanish209@gmail.com"
            className="inline-block border-b"
          >
            send me an email
          </a>
          &nbsp;or reach out on any of my social handles.
        </p>
      </div>

      <div className="mb-2 mt-4 flex space-x-4">
        {SOCIALS.map((social) => (
          <SocialLink
            key={social.label}
            aria-label={`Follow on ${social.label}`}
            href={social.href}
            icon={social.icon}
          >
            {social.label}
          </SocialLink>
        ))}
      </div>
      <p className="mb-5 mt-4 inline-block cursor-pointer ">
        <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
          <span className="flex text-lg font-bold text-blue-600 dark:text-white">
            Download My Professional Story{"   "}
            <DownloadIcon className=" ml-2 h-6 w-6 fill-zinc-500 transition hover:fill-zinc-200" />
          </span>
        </a>
      </p>

      {/* <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" /> */}

      <div>
        <h2 className="m-0 p-0 text-2xl font-bold">
          Building with Modern Technologies
        </h2>

        <div className="hide-scrollbar mb-2 mt-4 flex space-x-4 overflow-x-auto pl-5">
          {STACKS.map((stack) => (
            <TechStack
              key={stack.label}
              aria-label={`Technology - ${stack.label}`}
              icon={stack.icon}
              label={stack.label}
            >
              <span>{stack.label}</span>
            </TechStack>
          ))}
        </div>
      </div>
      <Divider />

      {!isEmpty(workExperiences) && (
        <div className="my-8">
          <WorkExperienceList workExperiences={workExperiences} />
        </div>
      )}

      <Divider />
      {/* MEDIUM */}
      {/* {!isEmpty(mediumArticles) && (
        <>
          <div>
            <Link href={LINKS.BLOG_SECTION}>
              <h2 className="mb-6 text-2xl font-bold">
                Insights from My Recent Work
              </h2>
            </Link>
            <ul>
              {mediumArticles.map((blog: any, index: number) => (
                <li key={blog.slug} className="py-1">
                  <Link
                    href={`${blog.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BlogCard
                      blog={blog}
                      key={blog.slug}
                      isLast={index === mediumArticles.length - 1}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={LINKS.BLOG_SECTION}>
            <span className="align-center flex justify-center">
              View More...
            </span>
          </Link>
          <Divider />{" "}
        </>
      )} */}

      {!isEmpty(projects) && (
        <>
          <div>
            <Link href={LINKS.PROJECTS_SECTION}>
              <h2 className="mb-6 text-2xl font-bold">
                The Projects I’m Proud Of
              </h2>
            </Link>
            <ul>
              {projects.map((project: any, index: number) => (
                <li key={project.slug} className="py-1">
                  <ProjectCard
                    project={project}
                    key={project.slug}
                    isLast={index === projects.length - 1}
                    showThumbnailImage={false}
                    showBottomBorder={true}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Link href={LINKS.PROJECTS_SECTION}>
            <span className="align-center flex justify-center">
              View More...
            </span>
          </Link>
        </>
      )}
    </section>
  );
}


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords.join(", "),
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      type: "website",
      url: siteMetadata.siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title,
      description: siteMetadata.description,
    },
  };
}