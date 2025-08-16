const formatPhoneNumber = (phone) => {
  return phone.replace(/\D/g, '') // Remove all non-digit characters
              .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1-$2-$3-$4');
};

console.log(business_data.telephone)
const formattedPhone = formatPhoneNumber(business_data.telephone);
console.log(formattedPhone)



const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `#organization`,
  "name": business_data.business_name,
  "url": business_data.website_main_url,
  "logo": `${business_data.website_main_url}/img/logo_head2.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": formattedPhone,
    "contactType": "Customer Service",
    "areaServed": "CA",
    "availableLanguage": "English",
    "url": `${business_data.website_main_url}/demande-de-devis-gratuit`
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business_data.street_address,
    "addressLocality": business_data.address_city,
    "addressRegion": business_data.address_province_state,
    "postalCode": business_data.postal_code,
    "addressCountry": "CA"
  },
  // "sameAs": [
  //   "https://www.youtube.com/channel/yourchannel",
  //   "https://twitter.com/yourprofile",
  //   "https://www.pinterest.com/yourprofile",
  //   "https://www.quora.com/profile/yourprofile"
  // ]
  "founder": {
    "@type": "Person",
    "name": "Mahdi Furry",
    "jobTitle": "Founder & CEO"
    // "image": "https://pavagegatineau.com/img/john_doe.jpg",
    // "sameAs": "https://www.linkedin.com/in/johndoe"
  },
  // "employee": [
  //   {
  //     "@type": "Person",
  //     "name": "Jane Smith",
  //     "jobTitle": "Chief Operating Officer"
  //     // "image": "https://pavagegatineau.com/img/jane_smith.jpg",
  //     // "sameAs": "https://www.linkedin.com/in/janesmith"
  //   },
  //   {
  //     "@type": "Person",
  //     "name": "Mike Johnson",
  //     "jobTitle": "Chief Marketing Officer"
  //     // "image": "https://pavagegatineau.com/img/mike_johnson.jpg",
  //     // "sameAs": "https://www.linkedin.com/in/mikejohnson"
  //   }
  // ],
  // "foundingDate": "2010",
  "description": business_data.business_description,
}

const script1 = document.createElement('script');
script1.type = 'application/ld+json';
const text1 = JSON.stringify(organizationSchema)
console.log("organizationSchema:" ,organizationSchema)
script1.text = text1
document.head.appendChild(script1);