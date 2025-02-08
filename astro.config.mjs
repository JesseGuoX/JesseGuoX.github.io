/*
 * @Date: 2025-02-07 21:23:45
 * @LastEditors: JessGuo
 * @LastEditTime: 2025-02-08 08:33:03
 * @FilePath: /astro-nano/astro.config.mjs
 */
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig(
{
  site: 'https://JesseGuoX.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
