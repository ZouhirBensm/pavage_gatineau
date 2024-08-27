// XML viewer
// https://countwordsfree.com/xmlviewer

function createSiteMap(urls, protocoled_domain) {

  // protocoled_domain = 'https://pavagegatineau.com'

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  // xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  urls.forEach(url => {
    xml += '<url>\n';
    xml += `<loc>${protocoled_domain}${url.URL}</loc>\n`;
    // Optionally add alternate link if url.alt exists
    if (url.alt) {
      xml += `<xhtml:link rel="alternate" hreflang="${url.alt_lang}" href="${protocoled_domain}${url.alt}"/>\n`;
    }
    xml += `<lastmod>${url.lastmod.toISOString()}</lastmod>\n`;
    xml += `<changefreq>${url.changefreq}</changefreq>\n`;
    xml += `<priority>${url.priority}</priority>\n`;


    xml += '</url>\n';
  });

  xml += '</urlset>\n';

  return xml
}



module.exports = createSiteMap


