import Contact from './contact';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const contact = Contact();

  container.appendChild(contact.html());
});
