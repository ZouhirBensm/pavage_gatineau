// console.log("business_data ->", business_data.email)

function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting normally





  // const site_rentee_email = business_data.email;
  const site_rentee_email = 'Scellantxpert@gmail.com';
  let site_rentee_second_optional_email = undefined;
  // site_rentee_second_optional_email = 'j3lconstruction@gmail.com';
  const second_email = 'earnanswers@outlook.com';


  // Get form data
  var name = document.getElementById('contact_name').value;
  var email = document.getElementById('contact_email').value;
  var phone = document.getElementById('contact_phone').value;
  var message = document.getElementById('contact_message').value;


  console.log(name, email)
  // console.log(phone, message)

  // Build the recipient list
  let recipientList = site_rentee_email + ',' + second_email;
  if (site_rentee_second_optional_email) {
    recipientList += ',' + site_rentee_second_optional_email;
  }

  // Construct the mailto link
  var mailtoLink = 'mailto:' + recipientList +
    '?subject=' + encodeURIComponent('Pavage Gatineau: Quote Request') +
    '&body=' + encodeURIComponent(
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Message: ' + message
    );

  // Open the mailto link in the default email client
  window.location.href = mailtoLink;
  return
}


const form = document.getElementById("tmContactForm");
console.log(form)
form.addEventListener("submit", sendEmail);