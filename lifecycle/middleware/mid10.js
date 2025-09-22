async function mid1(req, res, next) {

  let all_data_per_page_en

  all_data_per_page_en = await db.all_data_per_page_en.findOne({
    where: {
      page_url_identify: '/en',
    },
    raw: true
    // attributes: ['slug', 'title'],
  });





  const business_data_en = await db.business_data_en.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!business_data_en) {
    const error = new Error("No business data found!")
    return next(error)
  }




  const nav_en = await db.nav_en.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!nav_en) {
    const error = new Error("No nav_en found!")
    return next(error)
  }


  const welcome_section_en = await db.welcome_section_en.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!welcome_section_en) {
    const error = new Error("No welcome_section_en found!")
    return next(error)
  }



  const portfolio_section_en = await db.portfolio_section_en.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!portfolio_section_en) {
    const error = new Error("No portfolio_section_en found!")
    return next(error)
  }


  const index_content_en = await db.index_content_en.findAll({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!index_content_en) {
    const error = new Error("No index_content_en found!")
    return next(error)
  }



  const faq_en = await db.faq_en.findAll({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!faq_en) {
    const error = new Error("No faq_en found!")
    return next(error)
  }


  const footer_en = await db.footer_en.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!footer_en) {
    const error = new Error("No footer_en found!")
    return next(error)
  }






  // console.log(extra_service_pages_en)
  // console.log(index_content_en)
  // console.log(blog_elements_en)
  // console.log(business_data_en)
  // console.log(main_service_data_en)
  // console.log(review_data_en)
  // console.log(faq_en)
  // console.log(footer_en)





  res.locals.index_page_data = {
    all_data_per_page: all_data_per_page_en,
    business_data: business_data_en,
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
  mid1: mid1
}



module.exports = middleware