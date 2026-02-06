async function mid1(req, res, next) {

  let all_data_per_page_fr

  all_data_per_page_fr = await db.all_data_per_page_fr.findOne({
    where: {
      // page_url_identify: '/en',
      page_url_identify: '/a-propos',
    },
    raw: true
    // attributes: ['slug', 'title'],
  });





  const business_data_fr = await db.business_data_fr.findOne({
    // attributes: ['slug', 'title'],
    raw: true
  });

  if (!business_data_fr) {
    const error = new Error("No business data found!")
    return next(error)
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



  const n = req.params.n;

  res.locals.index_page_data.all_data_per_page = {
    ...res.locals.index_page_data.all_data_per_page,
    description: "Tous les liens vers des pages web qui contiennent elles-mêmes des liens vers l'un des sites que je contrôle (à des fins de crawl SEO / suivi par les robots)",
    title: `Liste des liens pour le crawler Google ${n}`,
    page_url_identify: `/backlink/${n}`,
    under_h1: 'Backlinks',
    eq_lang_page: `/backlink/${n}`,
    last_modified: '2026-02-02T23:01:22.513Z',
  }

  console.log(res.locals.index_page_data)

  res.locals.index_page_data = {
    all_data_per_page: all_data_per_page_fr,
    business_data: business_data_fr,
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