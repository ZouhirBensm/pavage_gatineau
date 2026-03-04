const ejs = require('ejs');



async function mid1(req, res, next) {
  // console.log('\n\n is_english -> ', is_english, ' \n\n')

  if (is_english) return next()

  console.log("\n\n French mode is on. 1 \n\n")




  const business_data_fr = await db.business_data_fr.findOne({
    raw: true
  });

  if (!business_data_fr) {
    const error = new Error("No business data found!")
    return next(error)
  }



  const nav_fr = await db.nav_fr.findOne({
    raw: true
  });

  if (!nav_fr) {
    const error = new Error("No nav_fr found!")
    return next(error)
  }




  const welcome_section_fr = await db.welcome_section_fr.findOne({
    raw: true
  });

  if (!welcome_section_fr) {
    const error = new Error("No welcome_section_fr found!")
    return next(error)
  }



  const all_data_per_page_fr = await db.all_data_per_page_fr.findOne({
    where: {
      page_url_identify: res.locals.req_path,
    },
    raw: true
  });





  const footer_fr = await db.footer_fr.findOne({
    raw: true
  });

  if (!footer_fr) {
    const error = new Error("No footer_fr found!")
    return next(error)
  }


  let req_path = res.locals.req_path.replace('/service/', '');
  // console.log(req_path);


  const main_service_data_fr = await db.main_service_data_fr.findOne({
    where: {
      slug: req_path
    },
    raw: true
  });


  let rendered_web_page_content = undefined

  if (main_service_data_fr) {

    // console.log(typeof main_service_data_fr.web_page_content);

    rendered_web_page_content = ejs.render(main_service_data_fr.web_page_content, { alt_img1: main_service_data_fr.alt_img1, alt_img2: main_service_data_fr.alt_img2, alt_img3: main_service_data_fr.alt_img3 });
  }




  res.locals.index_page_data = {
    business_data: business_data_fr,
    nav: nav_fr,
    welcome_section: welcome_section_fr,
    footer: footer_fr,
    // ...(main_service_data_fr ? { main_service_data: rendered_main_service_data_fr } : {}),
    ...(rendered_web_page_content ? { main_service_data: rendered_web_page_content } : {}),
    ...(res.locals.blog_element ? { blog_element: res.locals.blog_element } : {}),
    ...(all_data_per_page_fr ? { all_data_per_page: all_data_per_page_fr } : {})
  }


  return next()



}




const middleware = {
  mid1: mid1
}



module.exports = middleware