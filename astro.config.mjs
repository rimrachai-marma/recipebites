// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import { unified } from "@astrojs/markdown-remark";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  integrations: [react(), expressiveCode()],
  markdown: {
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkAlert],
    }),
  },
});
