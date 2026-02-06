

app.get('/backlink/:n',
  middleware12.mid1,
  async (req, res, next) => {
    // res.locals.is_english = true

    if (res.locals.error) {
      return next()
    }

    let all_data_per_page_fr = await db.all_data_per_page_fr.findOne({
      where: {
        page_url_identify: '/a-propos',
      },
      raw: true
    });

    if (!all_data_per_page_fr) {
      const error = new Error("No all_data_per_page_fr found!")
      return next(error)
    }

    const n = req.params.n;

    
    res.locals.index_page_data.all_data_per_page = all_data_per_page_fr

    res.locals.index_page_data.all_data_per_page = {
      ...res.locals.index_page_data.all_data_per_page,
      description: "Tous les liens vers des pages web qui contiennent elles-mêmes des liens vers l'un des sites que je contrôle (à des fins de crawl SEO / suivi par les robots)",
      title: `Liste des liens pour le crawler Google ${n}`,
      page_url_identify: `/backlink/${n}`,
      under_h1: 'Backlinks',
      eq_lang_page: `/backlink/${n}`,
      last_modified: '2026-02-02T23:01:22.513Z',
      schema_script: undefined,
      // front_end_script_needed_to_serve_variables: rendered_front_end_script_needed_to_serve_variables,
      // css_link: undefined,
      // title_meta_canonical: undefined,
      // brochure_text1: undefined,
      // brochure_text2: undefined,
      // rendered_title_meta_canonical: undefined,
      // rendered_front_end_script_needed_to_serve_variables: undefined,
    }

    let rendered_front_end_script_needed_to_serve_variables
  
    rendered_front_end_script_needed_to_serve_variables = ejs.render(res.locals.index_page_data.all_data_per_page.front_end_script_needed_to_serve_variables, {
      business_data: res.locals.index_page_data.business_data,
      all_data_per_page: res.locals.index_page_data.all_data_per_page
    });
  
    // res.locals.index_page_data.all_data_per_page.front_end_script_needed_to_serve_variables = rendered_front_end_script_needed_to_serve_variables
    res.locals.index_page_data.all_data_per_page.rendered_front_end_script_needed_to_serve_variables = rendered_front_end_script_needed_to_serve_variables

    let rendered_title_meta_canonical = undefined

    rendered_title_meta_canonical = ejs.render(all_data_per_page_fr.title_meta_canonical, { title: res.locals.index_page_data.all_data_per_page.title, description: res.locals.index_page_data.all_data_per_page.description, req_path: res.locals.req_path });

    res.locals.index_page_data.all_data_per_page.rendered_title_meta_canonical = rendered_title_meta_canonical

    rendered_brochure_text1 = ejs.render(res.locals.index_page_data.all_data_per_page.brochure_text1, { email: res.locals.index_page_data.business_data.email })

    res.locals.index_page_data.all_data_per_page.rendered_brochure_text1 = rendered_brochure_text1

    console.log(res.locals.index_page_data)
    return res.render('backlink1', { ...res.locals.index_page_data });
  })


