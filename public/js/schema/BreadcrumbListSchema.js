// console.log(blog_elements);
// console.log(main_service_data); // main services
// console.log(extra_service_pages); // extra services





// Function to generate breadcrumb list schema
function generateBreadcrumbListSchema(blogElements, servicePages) {

  // console.log("(1)", main_service_data); // main services

  const itemListElement = [];




  // Static breadcrumb items
  let staticItems = [
    { name: "Pavage Gatineau Asphalte Gatineau Earnanswers Home Page", item: "https://pavagegatineau.com/" },
    { name: "Request Free Quote", item: "https://pavagegatineau.com/demande-de-devis-gratuit" },
    { name: "Organisation", item: "https://pavagegatineau.com/organisation" },
    { name: "À propos", item: "https://pavagegatineau.com/a-propos" },
    { name: "Plan du site", item: "https://pavagegatineau.com/plan-du-site" },
    { name: "Avertissement légal", item: "https://pavagegatineau.com/tiroir1/avertissement-legal" },
    { name: "Politique de confidentialité", item: "https://pavagegatineau.com/tiroir1/politique-de-confidentialite" },
    // { name: "Service name 1", item: "https://pavagegatineau.com/service/service1" },
    // { name: "Service name 2", item: "https://pavagegatineau.com/service/service2" },
    // { name: "Service name 3", item: "https://pavagegatineau.com/service/service3" }
  ];

  // Generate service breadcrumb items from service data
  main_service_data = main_service_data.map(service => ({
    name: service.service_name,
    item: service.service_page_url
  }));


  // Combine static and service breadcrumb items
  staticItems = [...staticItems, ...main_service_data];


  // console.log(staticItems)



  // Add static items
  staticItems.forEach((item, index) => {
    itemListElement.push({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    });
  });



  // Add service pages
  servicePages.forEach((page, index) => {
    itemListElement.push({
      "@type": "ListItem",
      "position": staticItems.length + index + 1,
      "name": page.title,
      "item": `https://pavagegatineau.com/service/${page.slug}`
    });
  });

  // Add blog elements
  blogElements.forEach((element, index) => {

    // console.log(element)
    itemListElement.push({
      "@type": "ListItem",
      "position": staticItems.length + servicePages.length + index + 1,
      "name": element.title,
      "item": `https://pavagegatineau.com/blog/${element.category.slug}/blog-posting/${element.slug}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
}







const script3 = document.createElement('script');
script3.type = 'application/ld+json';


// Generate the breadcrumb list schema
const breadcrumbListSchema = generateBreadcrumbListSchema(blog_elements, extra_service_pages);


console.log("\n(1)->\n", breadcrumbListSchema, "\n\n");
// console.log("\n(2)->\n",JSON.stringify(breadcrumbListSchema, null, 2), "\n\n");


const text3 = JSON.stringify(breadcrumbListSchema, null, 2)



// console.log("\n\n(0)->\n\n", text3)


script3.text = text3
document.head.appendChild(script3);