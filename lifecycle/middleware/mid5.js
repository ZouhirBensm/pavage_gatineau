const ejs = require('ejs');


async function mid1(req, res, next) {


  console.log(is_english, '\n\n')

  if(is_english) return next()

  console.log("French mode is on mid 5")





  const now = new Date()
  // console.log('datetime = ', now)


  // const { page_de_services_supplementaires_seo } = req.params;
  // console.log('page_de_services_supplementaires_seo: ', page_de_services_supplementaires_seo);


  let db_extra_service_page_fr

  try {
    db_extra_service_page_fr = await db.extra_service_page_fr.findOne({
      where: {
        slug: req.params.page_de_services_supplementaires_seo,
      },
      raw: true,
    });
  } catch (error) {
    return next(error);
  }


  // console.log('\n\n(1)\n\n', db_extra_service_page_fr)


  if (!db_extra_service_page_fr) {
    const error = new Error("No db_extra_service_page_fr found!")
    return next(error)
  }


  let eq_lang_page =  '/service/' + db_extra_service_page_fr.eq_lang_page


  res.locals.index_page_data.all_data_per_page = {
    title: db_extra_service_page_fr.title,
    under_h1: db_extra_service_page_fr.under_h1,
    eq_lang_page: eq_lang_page
  }


  
  res.locals.index_page_data = {
    ...res.locals.index_page_data,
    extra_service_page: db_extra_service_page_fr
  }


  console.log('\n\n(**) ->\n\n', res.locals.index_page_data)



  return next()



}




const middleware = {
  mid1: mid1
}



module.exports = middleware