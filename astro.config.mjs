import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://smallgamerun.github.io",
  output: "static",
  outDir: "./docs",
  trailingSlash: "always"
});
