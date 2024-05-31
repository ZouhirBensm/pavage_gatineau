const localbusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mexico Beach",
    "addressRegion": "FL",
    "streetAddress": "3102 Highway 98"
  },
  "description": "A superb collection of fine gifts and clothing to accent your stay in Mexico Beach.",
  "name": "Beachwalk Beachwear & Giftware",
  "telephone": "850-648-4200"
}

// {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   "name": "Ace Drywall Services",
//   "description": "We provide top-notch drywall installation and repair services for residential and commercial properties in the Kingston area.",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "123 Maple Street",
//     "addressLocality": "Kingston",
//     "addressRegion": "ON",
//     "postalCode": "M5H 2N2",
//     "addressCountry": "Canada"
//   },
//   "telephone": "+1 (819) 555-2555",
//   "email": "info@acedrywall.com"
// }

// "openingHoursSpecification": [
//   {
//     "@type": "OpeningHoursSpecification",
//     "dayOfWeek": [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday"
//     ],
//     "opens": "09:00",
//     "closes": "17:00"
//   }
// ],

// "geo": {
//   "@type": "GeoCoordinates",
//   "latitude": 43.6532,
//   "longitude": -79.3832
// },

// "hasOfferCatalog": {
//   "@type": "OfferCatalog",
//   "name": "Service Catalog",
//   "itemListElement": [
//     {
//       "@type": "Offer",
//       "itemOffered": {
//         "@type": "Service",
//         "serviceType": "Drywall Installation",
//         "name": "Drywall Installation",
//         "description": "Expert Drywall Installation Services for Residential and Commercial Projects",
//         "image": "https://example.com/drywall-installation.jpg",
//         "url": "https://example.com/service/drywall-installation",
//         "provider": {
//           "@type": "LocalBusiness",
//           "name": "Ace Drywall Services"
//         }
//       },
//       "priceCurrency": "CAD",
//       // "price": "50.00"
//     },
//     {
//       "@type": "Offer",
//       "itemOffered": {
//         "@type": "Service",
//         "serviceType": "Drywall Repair and Patching",
//         "name": "Drywall Repair and Patching",
//         "description": "Reliable Drywall Repair and Patching Services for Homes and Businesses",
//         "image": "https://example.com/drywall-repair-and-patching.jpg",
//         "url": "https://example.com/service/drywall-repair-and-patching",
//         "provider": {
//           "@type": "LocalBusiness",
//           "name": "Ace Drywall Services"
//         }
//       },
//       "priceCurrency": "CAD",
//       // "price": "30.00"
//     },
//     {
//       "@type": "Offer",
//       "itemOffered": {
//         "@type": "Service",
//         "serviceType": "Drywall Finishing and Texturing",
//         "name": "Drywall Finishing and Texturing",
//         "description": "Professional Drywall Finishing and Texturing for a Perfect Finish",
//         "image": "https://example.com/drywall-finishing-and-texturing.jpg",
//         "url": "https://example.com/service/drywall-finishing-and-texturing",
//         "provider": {
//           "@type": "LocalBusiness",
//           "name": "Ace Drywall Services"
//         }
//       },
//       "priceCurrency": "CAD",
//       // "price": "40.00"
//     }
//   ]
// }


const script2 = document.createElement('script');
script2.type = 'application/ld+json';
const text2 = JSON.stringify(websiteSchema)
console.log("localbusinessSchema:" ,text2)
script.text = text2
document.head.appendChild(script2);


