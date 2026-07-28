import { getPosts, postPath } from "../lib/content";

export async function GET() {
  const staticPaths = ["", "projects/", "blog/", "about/", "en/", "en/projects/", "en/blog/", "en/about/"];
  const posts = [...(await getPosts("zh")), ...(await getPosts("en"))];
  const urls = [
    ...staticPaths.map((path) => `https://smallgamerun.github.io/${path}`),
    ...posts.map((post) => `https://smallgamerun.github.io${postPath(post.data.language, post.data.path)}`)
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${url}</loc></url>`).join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
