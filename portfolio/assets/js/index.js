const sendMail = (event) => {
  event.preventDefault();
  
  // Show loading state
  document.querySelector('.loading').style.display = 'block';

  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }

  const serviceId ="service_4mbk452"
  const templateId = "template_lley8wh"

  emailjs.send(serviceId, templateId, params).then((res) => {
    // Hide loading state
    document.querySelector('.loading').style.display = 'none';
    // Show success message
    document.querySelector('.sent-message').style.display = 'block';
    // Clear form fields
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

  }).catch((error) => {
    // Hide loading state
    document.querySelector('.loading').style.display = 'none';
    // Show error message
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.error-message').innerText = 'Failed to send message. Please try again later.';
  });
}
