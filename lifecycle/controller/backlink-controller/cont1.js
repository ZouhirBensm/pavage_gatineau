async function cont1(req, res, next) {
  try {
    const all_data_per_page = {
      ...res.locals.index_page_data.all_data_per_page,
      title: 'List of links for Google crawler 1',
      description: 'All the links for webpages that contain themselves links to one of the site I control for SEO crawler purposes',
      page_url_identify: '/backlink/1',
      under_h1: 'Backlinks',
      eq_lang_page: '/backlink/1',
      last_modified: '2025-09-20T10:27:07.077Z',
      // css_link: undefined,
      // schema_script: undefined,
      // title_meta_canonical: undefined,
      // front_end_script_needed_to_serve_variables: undefined,
      // brochure_text1: undefined,
      // brochure_text2: undefined,
      // rendered_title_meta_canonical: undefined,
      // rendered_front_end_script_needed_to_serve_variables: undefined,
    }

    res.locals.index_page_data = {
      ...res.locals.index_page_data,
      all_data_per_page: all_data_per_page
    }


    // console.log(res.locals.index_page_data)
    return res.render('backlink1', { ...res.locals.index_page_data });


    // res.render('backlink1');
  } catch (error) {
    console.error('Error in controller:', error);
    return next(error);
  }
}

const controller = {
  cont1: cont1
};

module.exports = controller;