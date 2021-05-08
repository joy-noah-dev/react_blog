require("@babel/preset-react");

const router = require('router/SitemapRouter').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
  .build(process.env.PUBLIC_URL)
  .save('public/sitemap.xml')
