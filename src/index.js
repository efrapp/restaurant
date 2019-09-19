import Contact from './contact';
import Menu from './menu';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const contact = Contact();
  const menu = Menu();

  container.appendChild(contact.html());
  container.appendChild(menu.content());
});
