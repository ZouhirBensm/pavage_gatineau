
async function mid1(req, res, next) {


  console.log(is_english, '\n\n')

  if(!is_english) return next()

  console.log("English mode is on. 2\n\n")



  


  // return res.end()

  // Fetch the slugs from the blog_element_en table with the same category_id
  const blog_elements_en = await db.blog_element_en.findAll({
    // where: {
    //   category_id: db_category_fr.id,
    // },
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

  const extra_service_pages_en = await db.extra_service_page_en.findAll({
    attributes: ['slug', 'title'],
    raw: true
  });




  // Group blogs by category
  const categories_and_associated_blogs = blog_elements_en.reduce((acc, blog) => {
    const categoryName = blog.category.category_name;

    // let categorySlugOri = blog.category.slug;
    // let categorySlug = categorySlugOri.replace(/\/en$/, '');
    
    let categorySlug = blog.category.slug;
    categorySlug = categorySlug.replace(/\/en$/, '');

    if (!acc[categoryName]) {
      acc[categoryName] = {
        categorySlug: categorySlug,
        blogs: []
      };
    }

    acc[categoryName].blogs.push(blog);
    return acc;
  }, {});


  // console.log("\n\ncategories_and_associated_blogs:\n", categories_and_associated_blogs)



  if (!extra_service_pages_en) {
    const error = new Error("No service pages found!")
    return next(error)
  }





  const plan_du_site_page_en = await db.plan_du_site_page_en.findOne({
    raw: true,
  });


  if (!plan_du_site_page_en) {
    const error = new Error("No plan_du_site_page_en found!")
    return next(error)
  }





  const main_service_data_en = await db.main_service_data_en.findAll({
    attributes: ['service_name', 'slug'],
    raw: true,
  });


  if (!main_service_data_en) {
    const error = new Error("No main_service_data_en found!")
    return next(error)
  }





  let all_pages_en = await db.all_data_per_page_en.findAll({
    raw: true,
  });




  if (!all_pages_en) {
    const error = new Error("No main_service_data_en found!")
    return next(error)
  }



  // console.log(all_data_per_page_en)

  const idsToRemove = [5, 6, 7];

  // Separate the objects with the specific IDs
  // const removedItems = all_data_per_page_en.filter(item => idsToRemove.includes(item.id));

  // Remove the objects from the original array
  all_pages_en = all_pages_en.filter(item => !idsToRemove.includes(item.id));

  // console.log("Removed Items: ", removedItems);
  // console.log("\n\n all_pages_en: \n\n", all_pages_en);





  res.locals.index_page_data = {
    ...res.locals.index_page_data,
    extra_service_pages: extra_service_pages_en,
    categories_and_associated_blogs: categories_and_associated_blogs,
    plan_du_site_page: plan_du_site_page_en,
    main_service_data: main_service_data_en,
    all_pages: all_pages_en
  }




  return next()
}




const middleware = {
  mid1: mid1
}



module.exports = middleware