const fs = require('fs').promises;
const path = require('path');

async function mid1(req, res, next) {
  try {
    // Read the content of backlink1.txt
    const filePath = path.join(__dirname, '../../../backlinks/backlink1.txt');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    // Split content by lines and filter out empty lines
    const urls = fileContent
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    // Store urls in res.locals
    res.locals.urls = urls;

    return next();
  } catch (error) {
    console.error('Error reading backlink file:', error);
    return next(error);
  }
}

const middleware = {
  mid1: mid1
};

module.exports = middleware;