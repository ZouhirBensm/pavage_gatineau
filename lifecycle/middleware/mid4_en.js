const ejs = require('ejs');


async function mid1(req, res, next) {
  // console.log('\n\n is_english -> ', is_english, ' \n\n')

  if (!is_english) return next()

  console.log("English mode is on. 1\n\n")





  const business_data_en = await db.business_data_en.findOne({
    raw: true
  });

  if (!business_data_en) {
    const error = new Error("No business data found!")
    return next(error)
  }


  const nav_en = await db.nav_en.findOne({
    raw: true
  });

  if (!nav_en) {
    const error = new Error("No nav_en found!")
    return next(error)
  }


  const welcome_section_en = await db.welcome_section_en.findOne({
    raw: true
  });

  if (!welcome_section_en) {
    const error = new Error("No welcome_section_en found!")
    return next(error)
  }



  const all_data_per_page_en = await db.all_data_per_page_en.findOne({
    where: {
      page_url_identify: res.locals.req_path,
    },
    raw: true
  });



  const footer_en = await db.footer_en.findOne({
    raw: true
  });

  if (!footer_en) {
    const error = new Error("No footer_en found!")
    return next(error)
  }



  let req_path = res.locals.req_path.replace('/service/', '');
  console.log(req_path);


  const main_service_data_en = await db.main_service_data_en.findOne({
    where: {
      slug: req_path
    },
    raw: true
  });



  let rendered_web_page_content = undefined

  if (main_service_data_en) {
    // console.log(typeof main_service_data_en.web_page_content);

    rendered_web_page_content = ejs.render(main_service_data_en.web_page_content, { alt_img1: main_service_data_en.alt_img1, alt_img2: main_service_data_en.alt_img2, alt_img3: main_service_data_en.alt_img3 });
  }





  res.locals.index_page_data = {
    business_data: business_data_en,
    nav: nav_en,
    welcome_section: welcome_section_en,
    footer: footer_en,
    // ...(main_service_data_en ? { main_service_data: main_service_data_en } : {}),
    ...(rendered_web_page_content ? { main_service_data: rendered_web_page_content } : {}),
    ...(res.locals.blog_element ? { blog_element: res.locals.blog_element } : {}),
    ...(all_data_per_page_en ? { all_data_per_page: all_data_per_page_en } : {})
  }



  const isMainService = res.locals.mainServicePaths.some(path => {
    const slugFromPath = path.replace(/^\/service\//, '').replace(/\/en$/, '');
    return slugFromPath === req.params.page_de_services_supplementaires_seo;
  });

  if (isMainService) {
    return res.render('travaux-en-beton-residentiel-et-commercial', { ...res.locals.index_page_data });
  }




  return next()



}




const middleware = {
  mid1: mid1
}



module.exports = middleware



