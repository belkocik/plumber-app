import { getServerSideSitemap } from "next-sitemap";
import { getProjectsSlugs } from "../../lib/data";

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const slugs = await getProjectsSlugs();
  console.log(slugs);
  const fields = slugs.projects.map((slug) => ({
    loc: `https://plumber-app-chakraui.vercel.app/projects/${slug.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
