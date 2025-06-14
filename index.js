
function showSidebar() {
    document.getElementById("sidebar").classList.add("show-sidebar");
  }
  
  function hideSidebar() {
    document.getElementById("sidebar").classList.remove("show-sidebar");
  }
  

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxKC8vfQbeS7-DHU-jR3QZemO72a4wofH-Zj5BJ6FS1Ox9Jx2Rgj03J-HJWk11-Uf7tYA/exec'; 
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7iQiFfKGhG6l0bgo50tBxKbNptW1ga3nPhJx371ht7x1AqGtveQsjbFioWYiIYdLnog/exec'; 

const form = document.getElementById('contact-form');
const status = document.getElementById('statusMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  status.textContent = 'Sending...';
  status.style.color = 'white';

  const formData = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      status.textContent = 'Message sent successfully!';
      status.style.color = 'lightgreen';
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      status.textContent = 'Something went wrong!';
      status.style.color = 'red';
    });
});
