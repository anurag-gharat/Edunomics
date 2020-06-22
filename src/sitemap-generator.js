 
const router = require('./router.jsx').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://edunomics.in/')
        .save('../public/sitemap.xml')
);