import { LINKS } from "@/lib/constants";
import projectListV2 from "../../api/projectListV2.json";
import experienceListV2 from "../../api/experienceListV2.json";

export function getDescriptionFromHtml(htmlString: any, wordLimit = 100) {
  const strippedText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  const words = strippedText.split(/\s+/).slice(0, wordLimit);
  return words.join(" ") + (words.length === wordLimit ? "..." : "");
}

export async function fetchArticles() {
  try {
    const res = await fetch(LINKS.MEDIUM);
    if (!res.ok) {
      return [];
      throw new Error("Failed to fetch articles");
    }
    const mediumArticles = await res.json();
    return mediumArticles.items;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function fetchProjects() {
  const res = await fetch(LINKS.PROJECT);
  // const projectsList = await res.json();
  const projectsList = projectListV2;
  return projectsList;
}

export async function fetchExperienceList() {
  const res = await fetch(LINKS.EXPERIENCE);
  const experienceList = await res.json();
  // const experienceList = experienceListV2;
  return experienceList;
}

export function trimString(str: string, limit: number) {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
}

// utils/arrayUtils.ts

export const isEmpty = (value: any): boolean => {
  // Null or undefined
  if (value == null) return true;

  // For strings
  if (typeof value === "string") return value.trim().length === 0;

  // For arrays
  if (Array.isArray(value)) return value.length === 0;

  // For objects (check if it's an object and has no keys)
  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  }

  // For numbers (0 is considered empty)
  if (typeof value === "number") return value === 0;

  // For boolean values (false is considered empty)
  if (typeof value === "boolean") return value === false;

  // For functions (empty function would be one that has no implementation)
  if (typeof value === "function") return value.toString().includes("[native code]");

  return false;
};
