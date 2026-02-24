import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://historical-translation-project-site.vercel.app",
  integrations: [tailwind()],
  output: "static",
});
