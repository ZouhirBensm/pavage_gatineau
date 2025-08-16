async function mid1_en(req, res, next) {
  
  console.log(is_english, '\n\n')

  if(!is_english) return next()

  console.log("English mode is on.\n\n")




  const now = new Date();
  console.log(now);



  const blog_elements_en = await db.blog_element_en.findAll({
    include: [
      {
        model: db.category_en,
        as: 'category',
        attributes: ['category_name', 'slug']
      }],
    attributes: ['slug', 'title'],
    nest: true,
    raw: true,
  });



  if (!blog_elements_en) {
    const error = new Error("No blog elements found!")
    return next(error)
  }





  // console.log('blog_elements_en ->\n', blog_elements_en, '\n\n')


  // return next()




  
  // all tables here exist in en version and are populated in french


  const extra_service_pages_en = await db.extra_service_page_en.findAll({
    attributes: ['slug', 'title'],
    raw: true
  });

  if (!extra_service_pages_en) {
    const error = new Error("No service pages found!")
    return next(error)
  }




  // console.log('extra_service_pages_en ->\n', extra_service_pages_en, '\n\n')


  // return next()




  const business_data_en = await db.business_data_en.findOne({
    raw: true
  });

  if (!business_data_en) {
    const error = new Error("No business data found!")
    return next(error)
  }



  // console.log('business_data_en ->\n', business_data_en, '\n\n')


  // return next()





  const main_service_data_en = await db.main_service_data_en.findAll({
    raw: true
  });

  if (!main_service_data_en) {
    const error = new Error("No service data found!")
    return next(error)
  }





  // console.log('main_service_data_en ->\n', main_service_data_en, '\n\n')


  // return next()



  const review_data_en = await db.review_data_en.findAll({
    raw: true
  });

  if (!review_data_en) {
    const error = new Error("No review data found!")
    return next(error)
  }



  // console.log('review_data_en ->\n', review_data_en, '\n\n')


  // return next()




  const all_data_per_page_en = await db.all_data_per_page_en.findOne({
    where: {
      page_url_identify: res.locals.req_path,
    },
    raw: true
  });

  if (!all_data_per_page_en) {
    const error = new Error("No all_data_per_page_en found!")
    return next(error)
  }


  // console.log('all_data_per_page_en ->\n', all_data_per_page_en, '\n\n')


  // return next()





  const nav_en = await db.nav_en.findOne({
    raw: true
  });

  if (!nav_en) {
    const error = new Error("No nav_en found!")
    return next(error)
  }


  // console.log('nav_en ->\n', nav_en, '\n\n')


  // return next()



  const welcome_section_en = await db.welcome_section_en.findOne({
    raw: true
  });

  if (!welcome_section_en) {
    const error = new Error("No welcome_section_en found!")
    return next(error)
  }



  // console.log('welcome_section_en ->\n', welcome_section_en, '\n\n')


  // return next()



  const portfolio_section_en = await db.portfolio_section_en.findOne({
    raw: true
  });

  if (!portfolio_section_en) {
    const error = new Error("No portfolio_section_en found!")
    return next(error)
  }





  // console.log('portfolio_section_en ->\n', portfolio_section_en, '\n\n')


  // return next()





  const index_content_en = await db.index_content_en.findAll({
    raw: true
  });

  if (!index_content_en) {
    const error = new Error("No index_content_en found!")
    return next(error)
  }



  // console.log('index_content_en ->\n', index_content_en, '\n\n')


  // return next()






  const faq_en = await db.faq_en.findAll({
    raw: true
  });

  if (!faq_en) {
    const error = new Error("No faq_en found!")
    return next(error)
  }


  // console.log('faq_en ->\n', faq_en, '\n\n')


  // return next()




  const footer_en = await db.footer_en.findOne({
    raw: true
  });

  if (!footer_en) {
    const error = new Error("No footer_en found!")
    return next(error)
  }



  // console.log('footer_en ->\n', footer_en, '\n\n')


  // return next()










  // console.log(extra_service_pages_fr)
  // console.log(index_content_fr)
  // console.log(blog_elements_fr)
  // console.log(business_data_en)
  // console.log(main_service_data_fr)
  // console.log(review_data_fr)
  // console.log(faq_fr)
  // console.log(footer_fr)
  


  



  res.locals.index_page_data = {
    blog_elements: blog_elements_en,
    extra_service_pages: extra_service_pages_en,
    business_data: business_data_en,
    main_service_data: main_service_data_en,
    review_data: review_data_en,
    all_data_per_page: all_data_per_page_en,
    nav: nav_en,
    welcome_section: welcome_section_en,
    portfolio_section: portfolio_section_en,
    index_content: index_content_en,
    faq: faq_en,
    footer: footer_en
  }


  // console.log(res.locals.index_page_data)

  return next()
}




const middleware = {
  mid1_en: mid1_en
}



module.exports = middleware