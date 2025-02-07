/*
 * @Date: 2025-02-07 21:23:45
 * @LastEditors: JessGuo
 * @LastEditTime: 2025-02-07 21:26:44
 * @FilePath: /astro-nano/astro.config.mjs
 */
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://JesseGuoX.github.io',
  base: 'blog',
  integrations: [mdx(), sitemap(), tailwind()],
});
