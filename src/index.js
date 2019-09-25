import Contact from './contact';
import Menu from './menu';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const menuLink = document.getElementById('menu_link');
  const contactLink = document.getElementById('contact_link');
  const contact = Contact().content();
  const menu = Menu().content();

  container.appendChild(menu);
  container.appendChild(contact);

  contact.style.display = 'none';

  menuLink.addEventListener('click', () => {
    contact.style.display = 'none';
    menu.style.display = 'block';
  });

  contactLink.addEventListener('click', () => {
    menu.style.display = 'none';
    contact.style.display = 'block';
  });
});
