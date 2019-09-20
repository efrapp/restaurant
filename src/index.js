import Contact from './contact';
import Menu from './menu';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const menuLink = document.getElementById('menu');
  const contactLink = document.getElementById('contact');
  const contact = Contact().html();
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
