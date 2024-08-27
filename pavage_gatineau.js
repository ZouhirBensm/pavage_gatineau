// 1231231111
const express = require('express')
const path = require('path');
const ejs = require('ejs');

const fs = require('fs');

require('dotenv').config()

const { Sequelize } = require('sequelize');
const { initModels } = require(`./models/init-models`);

const createSiteMap = require('./miscellaneous/utils/custom-sitemap')

const Compression = require('./miscellaneous/services/compression/compression-middleware')




const dialect = 'mysql'

const sequelize = new Sequelize(process.env['DB_NAME'], process.env['DB_USERNAME'], process.env['DB_USERPASSWORD'], {
  host: process.env['DB_HOST'],
  dialect: dialect,
  logging: false,
});


const PORT = process.env['PORT']

const { ENVIRONMENT, SIGNAL } = require('./miscellaneous/const/env')


const app = express()

app.use(Compression);



const middleware0 = require('./lifecycle/middleware/mid0')
const middleware1 = require('./lifecycle/middleware/mid1')
const middleware1_en = require('./lifecycle/middleware/mid1_en')
const middleware2 = require('./lifecycle/middleware/mid2')
const middleware2_en = require('./lifecycle/middleware/mid2_en')
const middleware3 = require('./lifecycle/middleware/mid3')
const middleware3_en = require('./lifecycle/middleware/mid3_en')
const middleware4 = require('./lifecycle/middleware/mid4')
const middleware4_en = require('./lifecycle/middleware/mid4_en')
const middleware5 = require('./lifecycle/middleware/mid5')
const middleware5_en = require('./lifecycle/middleware/mid5_en')
const middleware6 = require('./lifecycle/middleware/mid6')
const middleware6_en = require('./lifecycle/middleware/mid6_en')
const middleware7 = require('./lifecycle/middleware/mid7')
const middleware7_en = require('./lifecycle/middleware/mid7_en')
const middleware8 = require('./lifecycle/middleware/mid8')
const middleware9 = require('./lifecycle/middleware/mid9')
const middleware9_en = require('./lifecycle/middleware/mid9_en')



app.set('view engine', 'ejs');
app.set('etag', 'strong');


app.use(express.static('public'));



app.use((req, res, next) => {

  global.is_english = req.path.endsWith('/en');


  res.locals.env = process.env.NODE_ENV;
  res.locals.production = ENVIRONMENT.PRODUCTION;


  const req_path = req.path
  const req_url = req.url

  console.log(req_path, req_url)

  res.locals.req_path = req_path


  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.locals.fullUrl = fullUrl


  res.locals.domain = process.env['DOMAIN']
  res.locals.protocoled_domain = `https://${res.locals.domain}`


  return next()
});

// Middlewares


require('./miscellaneous/db/db')


// Controllers
const get_catch_controller = require('./lifecycle/controller/get-catch-controller/cont1')
const data_error_handler_controller = require('./lifecycle/controller/error-controller/cont1');
const middleware = require('./lifecycle/middleware/mid6_en');




// For SEO Keep until google identifies that the pages are gone
const goneUrls = [
  "/some/url/path"
];






goneUrls.forEach(url => {
  app.get(url, (req, res) => {
    res.status(410).send('This page has been permanently removed.');
  });
});










app.get(['/', '/en'], middleware1.mid1, middleware1_en.mid1_en, async (req, res) => {


  // return res.end()
  // let viewName = is_english ? 'index_en' : 'index';


  // return res.end()

  return res.render('index', { ...res.locals.index_page_data });
  // return res.render(viewName, { ...res.locals.index_page_data });
});








// /demande-de-devis-gratuit/:en?

app.get(['/demande-de-devis-gratuit', '/request-a-free-quote/en'], middleware2.mid1, middleware2_en.mid1, async (req, res) => {

  // return res.end()
  return res.render('demande-de-devis-gratuit', { ...res.locals.index_page_data });
});











app.get(['/organisation', '/organization/en'], middleware3.mid1, middleware3_en.mid1, (req, res) => {

  // res.end()

  return res.render('organisation', { ...res.locals.index_page_data });
});







app.get(['/a-propos', '/about/en'], middleware3.mid1, middleware3_en.mid1, (req, res) => {

  return res.render('a-propos', { ...res.locals.index_page_data });
});









app.get(['/service/pavage-residentiel-et-commercial-a-gatineau', '/service/residential-and-commercial-paving-in-gatineau/en'], middleware4.mid1, middleware4_en.mid1, (req, res) => {

  // return res.end()
  return res.render('pavage-residentiel-et-commercial', { ...res.locals.index_page_data });

});









app.get(['/service/revetement-maintenance-en-asphalte-gatineau', '/service/asphalt-maintenance-coating-gatineau/en'], middleware4.mid1, middleware4_en.mid1, (req, res) => {

  // return res.end()
  return res.render('revetement-en-asphalte', { ...res.locals.index_page_data });

});








app.get(['/service/travaux-en-beton-residentiel-et-commercial-a-gatineau', '/service/residential-and-commercial-concrete-works-in-gatineau/en'], middleware4.mid1, middleware4_en.mid1, (req, res) => {

  // return res.end()
  return res.render('travaux-en-beton-residentiel-et-commercial', { ...res.locals.index_page_data });

});







app.get(['/service/:page_de_services_supplementaires_seo', '/service/:page_de_services_supplementaires_seo/en'], middleware4.mid1, middleware4_en.mid1, middleware5.mid1, middleware5_en.mid1, async (req, res, next) => {

  return res.render('page_de_services_supplementaires_seo', { ...res.locals.index_page_data });


});












app.get(['/blog', '/blog/en'], middleware4.mid1, middleware4_en.mid1, middleware6.mid1, middleware6_en.mid1, async (req, res, next) => {



  // return res.end()
  return res.render('blog', { ...res.locals.index_page_data });

});








app.get(['/blog/:category', '/blog/:category/en'], middleware4.mid1, middleware4_en.mid1, middleware7.mid1, middleware7_en.mid1, async (req, res, next) => {

  console.log("\n\n(*)->\n\n", res.locals.index_page_data)

  // return res.end()
  return res.render('categorie', { ...res.locals.index_page_data });
});





app.get('/blog/:category/blog-posting/:title', middleware0.mid1, middleware4.mid1, middleware4_en.mid1, middleware8.mid1,  async (req, res, next) => {


  // console.log("\n\n______________________\n\n (*)->: \n", res.locals.index_page_data)

  return res.render('blog-posting', { ...res.locals.index_page_data });

});










app.get(['/tiroir1/mention-legale', '/drawer1/legal-notice/en'], middleware4.mid1, middleware4_en.mid1, async (req, res) => {


  let legal_notice_page_fr, legal_notice_page_en


  if(is_english) {
    // english
    legal_notice_page_en = await db.legal_notice_page_en.findOne({
      raw: true
    });
  
    if (!legal_notice_page_en) {
      const error = new Error("No legal_notice_page_en found!")
      return next(error)
    }
  
  } else {
    // french
    legal_notice_page_fr = await db.legal_notice_page_fr.findOne({
      raw: true
    });
  
    if (!legal_notice_page_fr) {
      const error = new Error("No legal_notice_page_fr found!")
      return next(error)
    }
  }

  const legal_notice_page = legal_notice_page_fr || legal_notice_page_en

  console.log(legal_notice_page)


  // return res.end()

  res.locals.index_page_data = {
    ...res.locals.index_page_data,
    legal_notice_page: legal_notice_page
  }

  return res.render('mention-legale', { ...res.locals.index_page_data });
});




app.get(['/tiroir1/politique-de-confidentialite', '/drawer1/privacy-policy/en'], middleware4.mid1, middleware4_en.mid1, async (req, res) => {


  let privacy_policy_page_fr, privacy_policy_page_en, rendered_privacy_policy_page_en, rendered_privacy_policy_page_fr


  if(is_english) {
    // english
    privacy_policy_page_en = await db.privacy_policy_page_en.findOne({
      raw: true
    });
  
    if (!privacy_policy_page_en) {
      const error = new Error("No privacy_policy_page_en found!")
      return next(error)
    }

    rendered_privacy_policy_page_en = ejs.render(privacy_policy_page_en.html_content, { 
      business_data: res.locals.index_page_data.business_data
    });

  
  } else {
    // french
    privacy_policy_page_fr = await db.privacy_policy_page_fr.findOne({
      raw: true
    });
  
    if (!privacy_policy_page_fr) {
      const error = new Error("No privacy_policy_page_fr found!")
      return next(error)
    }

    rendered_privacy_policy_page_fr = ejs.render(privacy_policy_page_fr.html_content, { 
      business_data: res.locals.index_page_data.business_data
    });

  }

  const privacy_policy_page = privacy_policy_page_fr || privacy_policy_page_en

  const rendered_privacy_policy_page = rendered_privacy_policy_page_fr || rendered_privacy_policy_page_en



  // return res.end()

  res.locals.index_page_data = {
    ...res.locals.index_page_data,
    privacy_policy_page: {
      ...privacy_policy_page,
      rendered_privacy_policy_page
    }
  }

  console.log(res.locals.index_page_data)

  return res.render('politique-de-confidentialite', { ...res.locals.index_page_data });
});













// app.get('/sitemap/sitemap', async (req, res, next) => {
//   console.log("TTTT")
//   return res.end()
// })









app.get('/sitemap/sitemap-3', async (req, res, next) => {
  // Define the path to the XML file
  const xmlFilePath = path.join(__dirname, 'public', 'sitemap', 'sitemap.xml');

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
    
    if (discarded_object_ids.includes(all_data_per_page_fr.id)) {return;}

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
    
    if (discarded_object_ids.includes(all_data_per_page_en.id)) {return;}

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
  });













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


  });




  
  console.log(urls)
  // return res.end()







  const xml = createSiteMap(urls, res.locals.protocoled_domain);

  console.log(xml)

  fs.writeFileSync(xmlFilePath, xml, 'utf-8');
  console.log('New sitemap.xml file generated');

  // return res.render('sitemap');
  // return res.sendFile('sitemap.html', { root: 'public' });
  // return res.redirect(301, '/');
  return res.end()
});





























app.get(['/plan-du-site', '/sitemap/en'], middleware4.mid1,  middleware4_en.mid1, middleware9.mid1, middleware9_en.mid1, async (req, res, next) => {




  // console.log("\n\n________________________ \n\nres.locals.index_page_data -> \n\n", res.locals.index_page_data)



  // return res.end()

  return res.render('plan-du-site', { ...res.locals.index_page_data });

});
























app.use(get_catch_controller.cont1)

// Error thrown on server, return 200 and respond with json object describing server error
app.use(data_error_handler_controller.error_cont1)



const server = app.listen(PORT, async () => {
  // sequelize
  try {
    await sequelize.authenticate();
    console.log('\n\nAuthentication using sequelize succeeded');
  } catch (err) {
    console.error('Database authentication failed:', err);
  }

  global.db = initModels(sequelize);


  console.log('\n')
  console.log(`Congrats, your Node.JS Express.JS application is running on localhost:${PORT}.\napp.listen() callback function`)
  console.log('\n')
})


// When CTRL + C closes the app
server.on('close', () => {
  // sequelize
  sequelize.close();
  console.log("Closed sequelize.\n")
  // express
  console.log('Express web server is closing\n');
});


const CLOSE_SIGNAL = (
  process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT ? SIGNAL.INTERRUPTION
    : process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? SIGNAL.TERMINATION :
      SIGNAL.INTERRUPTION
);


const closeServer = () => {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};



process.on(CLOSE_SIGNAL, async () => {
  console.log(`\n\nReceived ${CLOSE_SIGNAL} signal...\n`);
  try {
    await closeServer();
    console.log("Closed server.\n")
    process.exit(0);
  } catch (err) {
    console.error('Error while closing the server and disconnecting from sequelize:', err);
    process.exit(1);
  }
});