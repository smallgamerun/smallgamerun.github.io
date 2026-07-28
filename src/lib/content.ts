import { getCollection } from "astro:content";
import type { Language } from "../data/site";

export async function getProjects(language: Language) {
  return (await getCollection("projects"))
    .filter((entry) => entry.data.language === language)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts(language: Language) {
  return (await getCollection("blog"))
    .filter((entry) => entry.data.language === language && !entry.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postPath(language: Language, path: string) {
  return language === "zh" ? `/blog/${path}/` : `/en/blog/${path}/`;
}

export function readingMinutes(body: string) {
  const words = body.trim().split(/\s+/).length;
  const characters = body.replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(Math.max(words / 220, characters / 500)));
}
