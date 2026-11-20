import { defineConfig } from "vitepress";

const REPO = "https://github.com/anipoex/anipoex";

export default defineConfig({
  title: "Anipoex",
  description:
    "An AniList manga tracker that compares every source for each manga and syncs privately across iOS, Android, macOS and Windows.",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  cleanUrls: true,
  srcExclude: ["README.md"],
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: REPO }],
    footer: { message: "Released under the MIT License." },
  },
});
