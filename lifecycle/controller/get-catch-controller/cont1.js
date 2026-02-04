function cont1(req, res, next) {
  console.log('\n\nreq.method:::', req.method)

  console.error(res.locals.error)

  if (req.method === "GET") {
    res.locals.status = 404

    return res.status(res.locals.status).render('url_not_present', {
      error: res.locals.error?.message ?? res.locals.error ?? null
    })

  }
  return next();
}

module.exports = {
  cont1
}