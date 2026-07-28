import { getPosts, postPath } from "../lib/content";

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (char) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;"
  })[char] ?? char);
}

export async function GET() {
  const posts = [...(await getPosts("zh")), ...(await getPosts("en"))]
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const items = posts.map((post) => {
    const url = `https://smallgamerun.github.io${postPath(post.data.language, post.data.path)}`;
    return `<item><title>${escapeXml(post.data.title)}</title><description>${escapeXml(post.data.description)}</description><link>${url}</link><guid>${url}</guid><pubDate>${post.data.date.toUTCString()}</pubDate><language>${post.data.language}</language></item>`;
  }).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Xu Yixing</title><link>https://smallgamerun.github.io/</link><description>Quant, AI, engineering, and field notes.</description>${items}</channel></rss>`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
