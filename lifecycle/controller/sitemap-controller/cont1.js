const path = require('path');
const fs = require('fs');

const createSiteMap = require('../../../miscellaneous/utils/custom-sitemap')

async function cont1(req, res, next) {
  // res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  // res.setHeader('Pragma', 'no-cache');
  // res.setHeader('Expires', '0');

  const PROJECT_ROOT = path.join(__dirname, '../../../');
  const xmlFilePath = path.join(PROJECT_ROOT, 'public', 'sitemap', 'sitemap.xml');
  const backlinksDir = path.join(__dirname, '../../../backlinks');

  // const xmlFilePath = path.join(__dirname, 'public', 'sitemap', 'sitemap.xml');

  // Delete the existing XML file if it exists
  if (fs.existsSync(xmlFilePath)) {
    fs.unlinkSync(xmlFilePath);
    console.log('Deleted existing sitemap.xml file');
  }

  const now = new Date();
  console.log('now -> ', now);

  let last_modified_1 = '2024-08-14T00:34:21.928Z';
  let last_modified_1_date = new Date(last_modified_1);


  let urls = []



  const discarded_object_ids = [8, 9, 10];


  // French pages
  const all_data_per_page_fr = await db.all_data_per_page_fr.findAll({
    raw: true
  });

  if (!all_data_per_page_fr) {
    const error = new Error("No service pages found!")
    return next(error)
  }

  all_data_per_page_fr.forEach(all_data_per_page_fr => {

    if (discarded_object_ids.includes(all_data_per_page_fr.id)) { return; }

    let lastmod = new Date(all_data_per_page_fr.last_modified)

    urls.push({
      URL: all_data_per_page_fr.page_url_identify,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1,
      alt: all_data_per_page_fr.eq_lang_page,
      alt_lang: 'en'
    });
  });





  // English pages
  const all_data_per_page_en = await db.all_data_per_page_en.findAll({
    raw: true
  });

  if (!all_data_per_page_en) {
    const error = new Error("No service pages found!")
    return next(error)
  }

  all_data_per_page_en.forEach(all_data_per_page_en => {

    if (discarded_object_ids.includes(all_data_per_page_en.id)) { return; }

    let lastmod = new Date(all_data_per_page_en.last_modified)

    urls.push({
      URL: all_data_per_page_en.page_url_identify,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1,
      alt: all_data_per_page_en.eq_lang_page,
      alt_lang: 'fr'
    });
  });



  // console.log(urls)
  // return res.end()
















  const extra_service_pages_fr = await db.extra_service_page_fr.findAll({
    attributes: ['slug', 'title', 'last_modified', 'eq_lang_page'],
    raw: true
  });

  if (!extra_service_pages_fr) {
    const error = new Error("No service pages found!")
    return next(error)
  }


  extra_service_pages_fr.forEach(extra_service_page_fr => {
    let url = `/service/${extra_service_page_fr.slug}`;
    let alt = `/service/${extra_service_page_fr.eq_lang_page}`

    // console.log(extra_service_page_fr.last_modified)
    let lastmod = new Date(extra_service_page_fr.last_modified)


    urls.push({
      URL: url,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1,
      alt: alt,
      alt_lang: 'en'
    });
  });





  const extra_service_pages_en = await db.extra_service_page_en.findAll({
    attributes: ['slug', 'title', 'last_modified', 'eq_lang_page'],
    raw: true
  });

  if (!extra_service_pages_en) {
    const error = new Error("No service pages found!")
    return next(error)
  }


  extra_service_pages_en.forEach(extra_service_page_en => {
    let url = `/service/${extra_service_page_en.slug}`;
    let alt = `/service/${extra_service_page_en.eq_lang_page}`

    // console.log(extra_service_page_en.last_modified)
    let lastmod = new Date(extra_service_page_en.last_modified)


    urls.push({
      URL: url,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1,
      alt: alt,
      alt_lang: 'fr'
    });
  })




  // console.log(urls)
  // return res.end()







  const blog_elements_fr = await db.blog_element_fr.findAll({
    attributes: ['slug', 'title', 'datetime_edited'],
    include: [
      {
        model: db.category_fr,
        as: 'category',
        attributes: ['category_name', 'slug']
      }
    ],
    raw: true,
    nest: true
  });

  if (!blog_elements_fr) {
    const error = new Error("No blog elements found!")
    return next(error)
  }


  const blog_elements_en = await db.blog_element_en.findAll({
    attributes: ['slug', 'title', 'datetime_edited'],
    include: [
      {
        model: db.category_en,
        as: 'category',
        attributes: ['category_name', 'slug']
      }
    ],
    raw: true,
    nest: true
  });

  if (!blog_elements_en) {
    const error = new Error("No blog elements found!")
    return next(error)
  }


  // console.log("blog_elements_en -> ", blog_elements_en)


  // Remove '/en' from category.slug for each element in blog_elements_en
  const blog_elements_en_updated = blog_elements_en.map(element => {
    // Check if category.slug ends with '/en' and remove it
    if (element.category.slug.endsWith('/en')) {
      element.category.slug = element.category.slug.replace(/\/en$/, '');
    }
    return element;
  });


  // console.log("blog_elements_en_updated -> ", blog_elements_en_updated)
  // return res.end()


  const blog_elements = [...blog_elements_fr, ...blog_elements_en_updated]


  // console.log("blog_elements -> ", blog_elements)
  // return res.end()




  blog_elements.forEach(blog_element => {

    let url = `/blog/${blog_element.category.slug}/blog-posting/${blog_element.slug}`;

    let datetime_edited = new Date(blog_element.datetime_edited)

    urls.push({
      URL: url,
      lastmod: datetime_edited,
      changefreq: "monthly",
      priority: 0.8
    });


  })





  
  // return res.end()


  const backlink_pages_edited_date = '2026-02-06T17:29:37.655Z'
  const lastmod = new Date(backlink_pages_edited_date);

  const files = fs.readdirSync(backlinksDir);

  for (const file of files) {
    const match = file.match(/^backlink(\d+)\.txt$/i);
    if (!match) continue;

    const number = match[1];

    urls.push({
      url: `/backlink/${number}`,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 0.8
    });
  }


  console.log(JSON.stringify(urls, null, 2));  

  const xml = createSiteMap(urls, res.locals.protocoled_domain);

  // console.log(xml)

  fs.writeFileSync(xmlFilePath, xml, 'utf-8');
  console.log('New sitemap.xml file generated');

  // return res.render('sitemap');
  // return res.sendFile('sitemap.html', { root: 'public' });
  return res.redirect(301, '/');
  // return res.end()
}




module.exports = {
  cont1
}