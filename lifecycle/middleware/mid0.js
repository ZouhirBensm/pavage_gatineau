


async function mid1(req, res, next) {



  const now = new Date()
  console.log("\n\n______________________\n\n now: \n", now)


  const { title } = req.params;

  // console.log("\n\n title: \n", title)


  const blog_element_fr = await db.blog_element_fr.findOne({
    where: {
      slug: title,
    },
    include: [
      {
        model: db.category_fr,
        as: 'category',
        attributes: ['category_name', 'slug']
      }
    ],
    raw: true,
    nest: true,
  });


  const blog_element_en = await db.blog_element_en.findOne({
    where: {
      slug: title,
    },
    include: [
      {
        model: db.category_en,
        as: 'category',
        attributes: ['category_name', 'slug']
      }
    ],
    raw: true,
    nest: true,
  });




  res.locals.blog_element = blog_element_fr || blog_element_en


  if (!res.locals.blog_element) {
    const error = new Error("No blog_element found!")
    return next(error)
  }




  if (blog_element_fr) {
    global.is_english = false
  }


  if (blog_element_en) {
    global.is_english = true
  }




  // console.log(res.locals.blog_element)








  return next()
}




const middleware = {
  mid1: mid1
}



module.exports = middleware