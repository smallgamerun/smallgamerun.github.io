export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://smallgamerun.github.io/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain" }
  });
}
