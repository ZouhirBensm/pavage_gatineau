async function mid1(req, res, next) {


  console.log(is_english, '\n\n')

  if (is_english) return next()

  console.log("French mode is on mid1")


  const now = new Date();
  console.log(now);


  // const req_path = req.path
  // const req_url = req.url

  // console.log(req_path, req_url)

  // Fetch the slugs from the blog_element_fr table with the same category_id
  const blog_elements_fr = await db.blog_element_fr.findAll({
    // where: {
    //   category_id: db_category.id,
    // },
    include: [
      {
        model: db.category_fr,
        as: 'category',
        attributes: ['category_name', 'slug']
      }],
    attributes: ['slug', 'title'],
    nest: true,
    raw: true,
  });


  // console.log(blog_elements_fr)


  if (!blog_elements_fr) {
    const error = new Error("No blog elements found!")
    return next(error)
  }





  const extra_service_pages_fr = await db.extra_service_page_fr.findAll({
    attributes: ['slug', 'title'],
    raw: true
  });

  if (!extra_service_pages_fr) {
    const error = new Error("No service pages found!")
    return next(error)
  }



  const business_data_fr = await db.business_data_fr.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!business_data_fr) {
    const error = new Error("No business data found!")
    return next(error)
  }





  const main_service_data_fr = await db.main_service_data_fr.findAll({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!main_service_data_fr) {
    const error = new Error("No service data found!")
    return next(error)
  }


  // console.log(main_service_data_fr)


  const review_data_fr = await db.review_data_fr.findAll({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!review_data_fr) {
    const error = new Error("No review data found!")
    return next(error)
  }



  let all_data_per_page_fr

  all_data_per_page_fr = await db.all_data_per_page_fr.findOne({
    where: {
      page_url_identify: res.locals.req_path,
    },
    raw: true
    // attributes: ['slug', 'title'],
  });

  if (!all_data_per_page_fr) {
    // const error = new Error("No all_data_per_page_fr found!")
    // return next(error)

    all_data_per_page_fr = await db.all_data_per_page_fr.findOne({
      where: {
        page_url_identify: '/',
      },
      raw: true
      // attributes: ['slug', 'title'],
    });
  }



  const nav_fr = await db.nav_fr.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!nav_fr) {
    const error = new Error("No nav_fr found!")
    return next(error)
  }


  const welcome_section_fr = await db.welcome_section_fr.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!welcome_section_fr) {
    const error = new Error("No welcome_section_fr found!")
    return next(error)
  }



  const portfolio_section_fr = await db.portfolio_section_fr.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!portfolio_section_fr) {
    const error = new Error("No portfolio_section_fr found!")
    return next(error)
  }


  const index_content_fr = await db.index_content_fr.findAll({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!index_content_fr) {
    const error = new Error("No index_content_fr found!")
    return next(error)
  }



  const faq_fr = await db.faq_fr.findAll({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!faq_fr) {
    const error = new Error("No faq_fr found!")
    return next(error)
  }


  const footer_fr = await db.footer_fr.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!footer_fr) {
    const error = new Error("No footer_fr found!")
    return next(error)
  }






  // console.log(extra_service_pages_fr)
  // console.log(index_content_fr)
  // console.log(blog_elements_fr)
  // console.log(business_data_fr)
  // console.log(main_service_data_fr)
  // console.log(review_data_fr)
  // console.log(faq_fr)
  // console.log(footer_fr)





  res.locals.index_page_data = {
    blog_elements: blog_elements_fr,
    extra_service_pages: extra_service_pages_fr,
    business_data: business_data_fr,
    main_service_data: main_service_data_fr,
    review_data: review_data_fr,
    all_data_per_page: all_data_per_page_fr,
    nav: nav_fr,
    welcome_section: welcome_section_fr,
    portfolio_section: portfolio_section_fr,
    index_content: index_content_fr,
    faq: faq_fr,
    footer: footer_fr
  }




  // console.log(res.locals.index_page_data)

  return next()
}




const middleware = {
  mid1: mid1
}



module.exports = middleware