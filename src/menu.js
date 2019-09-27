const Menu = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem 
    praesentium nihil.`;

  const title = () => {
    const titleNode = document.createElement('h1');

    titleNode.classList.add('text-6xl', 'text-center', 'my-8');
    titleNode.textContent = 'Our Menu';

    return titleNode;
  };

  const menuCard = (imgCard, tCard, contCard) => {
    const menuNode = document.createElement('div');
    const imgNode = document.createElement('img');
    const descriptionNode = document.createElement('div');
    const titleNode = document.createElement('div');
    const contentNode = document.createElement('p');

    // build menu card
    menuNode.classList.add('max-w-sm', 'rounded', 'overflow-hidden', 'shadow-lg', 'm-2');
    // build image
    imgNode.setAttribute('src', imgCard);
    imgNode.classList.add('object-cover', 'h-48', 'w-full');
    // build description container
    descriptionNode.classList.add('px-6', 'py-4');
    // build title
    titleNode.classList.add('font-bold', 'text-xl', 'mb-2');
    titleNode.textContent = tCard;
    // build content
    contentNode.classList.add('text-gray-700', 'text-base');
    contentNode.textContent = contCard;

    menuNode.appendChild(imgNode);
    menuNode.appendChild(descriptionNode);
    descriptionNode.appendChild(titleNode);
    descriptionNode.appendChild(contentNode);

    return menuNode;
  };

  const container = () => {
    const containerNode = document.createElement('div');
    const menuNode1 = menuCard('img/fish.jpg', 'Mojarra Frita', text);
    const menuNode2 = menuCard('img/coconut_rice.jpg', 'Arroz con Coco', text);
    const menuNode3 = menuCard('img/soup.jpg', 'Sancocho de Mondongo', text);

    containerNode.classList.add('menu-container', 'flex', 'flex-wrap', 'justify-center', 'my-5');
    containerNode.appendChild(menuNode1);
    containerNode.appendChild(menuNode2);
    containerNode.appendChild(menuNode3);

    return containerNode;
  };

  const content = () => {
    const contentNode = document.createElement('div');
    const titleNode = title();
    const containerNode = container();

    contentNode.setAttribute('id', 'menu');
    contentNode.classList.add('menu');
    contentNode.appendChild(titleNode);
    contentNode.appendChild(containerNode);

    return contentNode;
  };

  return { content };
};

export default Menu;
