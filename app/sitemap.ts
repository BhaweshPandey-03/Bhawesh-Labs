import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = ["/", "/products", "/agents", "/writing", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date(),
  }));
}
