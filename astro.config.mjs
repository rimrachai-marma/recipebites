// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { remarkAlert } from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    gfm: true,
    remarkPlugins: [remarkAlert],
  },
});
