async function mid1(req, res, next) {
  // This should be it's own middleware and used only if /service url pages are getting GET
  const main_service_data_fr = await db.main_service_data_fr.findAll({
    attributes: ['slug'],
    raw: true
  });
  
  if (!main_service_data_fr) {
    const error = new Error("No service data found!")
    return next(error)
  }
  
  
  const main_service_data_en = await db.main_service_data_en.findAll({
    attributes: ['slug'],
    raw: true
  });
  
  if (!main_service_data_en) {
    const error = new Error("No service data found!")
    return next(error)
  }
  
  // console.log(main_service_data_fr, main_service_data_en)
  
  const mainServicePaths = [
    ...main_service_data_fr.map(s => `/service/${s.slug}`),
    ...main_service_data_en.map(s => `/service/${s.slug}`)
  ];
  
  console.log(mainServicePaths)
  
  res.locals.mainServicePaths = mainServicePaths
  
  res.locals.isMainServicePath = res.locals.mainServicePaths.includes(res.locals.req_path);
  
  
  
  return next()
}

const middleware = {
  mid1: mid1
}

module.exports = middleware