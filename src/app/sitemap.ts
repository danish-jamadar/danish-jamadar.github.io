import { MetadataRoute } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { fetchArticles, fetchProjects } from "@/utils";
import { BlogCardProps, Project } from "@/types";
import { LINKS } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl;

  const allMediumArticles: BlogCardProps[] = await fetchArticles();
  const mediumRoutes = allMediumArticles.map(({ pubDate, link }) => ({
    url: link,
    lastModified: pubDate,
  }));

  const allProjects: Project[] = await fetchProjects();
  const projectRoutes = allProjects.map(({ slug }) => ({
    url: `${siteUrl}${LINKS.PROJECTS_SECTION}/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "blog", "projects"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...mediumRoutes, ...projectRoutes];
}
