async function mid1(req, res, next) {

  if (!res.locals.mainServicePaths) {
    const error_message = "middleware13 is needed for this middleware to work, because no res.locals.mainServicePaths was set!"
    let error= new Error(error_message)
    return next(error)
  }

  const isMainService = res.locals.mainServicePaths.some(path => {
    const slugFromPath = path.replace(/^\/service\//, '').replace(/\/en$/, '');
    return slugFromPath === req.params.page_de_services_supplementaires_seo;
  });
  
  
  // console.log("isMainService???????", isMainService)
  if (isMainService) {
    return res.render('main-service', { ...res.locals.index_page_data });
  }
  
  
  return next()
}


const middleware = {
  mid1: mid1
}

module.exports = middleware