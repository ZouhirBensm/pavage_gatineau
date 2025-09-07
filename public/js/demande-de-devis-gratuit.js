function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const email_1 = 'pavagegatineau@outlook.com'; // mailto
  let optional_email_2 = undefined;
  // optional_email_2 = 'pavagegatineau@gmail.com';
  let optional_email_3 = undefined;
  // optional_email_3 = 'entreprisesxpert@gmail.com'; // cc
  let optional_email_4 = undefined;
  // optional_email_4 = 'earnanswers@outlook.com';

  // Get form data
  const name = document.getElementById('contact_name').value;
  const email = document.getElementById('contact_email').value;
  const phone = document.getElementById('contact_phone').value;
  const message = document.getElementById('contact_message').value;

  console.log(name, email);

  // Build the recipient list
  const recipientList = email_1;
  const ccEmails = [];

  // Add optional emails to ccEmails array if they are defined
  if (optional_email_2) ccEmails.push(optional_email_2);
  if (optional_email_3) ccEmails.push(optional_email_3);
  if (optional_email_4) ccEmails.push(optional_email_4);

  // Construct the mailto link
  let mailtoLink = 'mailto:' + recipientList +
    '?subject=' + encodeURIComponent('Pavage Gatineau: Quote Request') +
    '&body=' + encodeURIComponent(
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Message: ' + message
    );

  // Only add CC if there are any CC emails
  if (ccEmails.length > 0) {
    mailtoLink = mailtoLink.replace('?', '?cc=' + encodeURIComponent(ccEmails.join(',')) + '&');
  }

  // Open the mailto link in the default email client
  window.location.href = mailtoLink;
}

const form = document.getElementById("tmContactForm");
console.log(form);
form.addEventListener("submit", sendEmail);