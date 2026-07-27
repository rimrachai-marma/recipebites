// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { remarkAlert } from "remark-github-blockquote-alert";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), expressiveCode()],
  markdown: {
    gfm: true,
    remarkPlugins: [remarkAlert],
  },
});