const fs = require('fs').promises;
const path = require('path');

async function mid1(req, res, next) {
  try {
    var n = req.params.n;

    // Optional: very basic protection
    if (!/^\d+$/.test(n) || n === '0') {
      return next(new Error("Invalid backlink number"));
    }

    const filePath = path.join(__dirname, `../../backlinks/backlink${n}.txt`);
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const urls = fileContent
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    res.locals.urls = urls;
    return next();
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.locals.urls = [];
      error.message = `backlink${n}.txt is not present in the respective folder`
      res.locals.error = error
      // return res.status(500).render('url_not_present')
      return next();
    }
    console.error('Error reading backlink file:', error);
    return next(error);
  }
}

const middleware = {
  mid1: mid1
};

module.exports = middleware;

