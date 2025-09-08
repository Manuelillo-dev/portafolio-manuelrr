import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type Project = {
  slug: string;
  name: string;
  stack?: string[];
  repo?: string;
  content: string;
};

export function getProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: data.slug,
      name: data.name,
      stack: data.stack,
      repo: data.repo,
      content,
    } as Project;
  });
}
