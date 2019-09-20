const Menu = () => {
  const title = () => {
    const titleNode = document.createElement('h1');

    titleNode.textContent = 'Our Menu';

    return titleNode;
  };

  const menuCard = (imgCard, tCard, contCard) => {
    const menuNode = document.createElement('div');
    const imgNode = document.createElement('img');
    const titleNode = document.createElement('div');
    const contentNode = document.createElement('p');

    // build image
    imgNode.setAttribute('src', imgCard);
    // build title
    titleNode.textContent = tCard;
    // build content
    contentNode.textContent = contCard;

    menuNode.appendChild(imgNode);
    menuNode.appendChild(titleNode);
    menuNode.appendChild(contentNode);

    return menuNode;
  };

  const container = () => {
    const containerNode = document.createElement('div');
    const menuNode1 = menuCard('img/fish.jpg', 'Mojarra', 'Mojarra Content');
    const menuNode2 = menuCard('img/coconut_rice.jpg', 'Arroz de Coco', 'Arroz de Coco Content');

    containerNode.classList.add('menu-container');
    containerNode.appendChild(menuNode1);
    containerNode.appendChild(menuNode2);

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
