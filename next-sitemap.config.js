// /** @type {import('next-sitemap').IConfig} */
// const config = {
//   siteUrl: "https://plumber-app-chakraui.vercel.app/",
//   changefreq: "daily",
//   priority: 0.7,
//   generateRobotsTxt: true,
//   exclude: ["/server-sitemap.xml"],

//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//     ],
//     additionalSitemaps: [
//       "https://plumber-app-chakraui.vercel.app/server-sitemap.xml",
//     ],
//   },
// };

module.exports = {
  siteUrl: "https://plumber-app-chakraui.vercel.app/",
  changefreq: "daily",
  priority: 0.7,
  //   sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://plumber-app-chakraui.vercel.app/server-sitemap.xml",
    ],
  },
};
