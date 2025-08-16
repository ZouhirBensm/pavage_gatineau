// console.log(business_data);

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": `${business_data.website_main_url}`,
  "name": `${business_data.business_name}`,
  "datePublished": business_data.home_page_published_date,
  "dateModified": business_data.home_page_updated_date
};

const script1 = document.createElement('script');
script1.type = 'application/ld+json';
const text1 = JSON.stringify(websiteSchema)
// console.log("websiteSchema:" ,text1)
script1.text = text1
document.head.appendChild(script1);
