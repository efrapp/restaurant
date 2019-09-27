const Contact = () => {
  const buildForm = () => {
    const formNode = document.createElement('form');
    const inputContainerNode = document.createElement('div');
    const inputCellNode = document.createElement('div');
    const emailLabelNode = document.createElement('label');
    const emailNode = document.createElement('input');
    const messageLabelNode = document.createElement('label');
    const messageNode = document.createElement('textarea');
    const submitNode = document.createElement('input');

    // build form
    formNode.setAttribute('action', '#');
    formNode.classList.add('w-full', 'max-w-full', 'm-5');
    inputContainerNode.classList.add('md:flex', 'md:items-center', 'mb-6');
    inputCellNode.classList.add('md:w-1/3');
    // build email field
    emailLabelNode.setAttribute('for', 'email');
    emailLabelNode.textContent = 'Email: ';
    emailLabelNode.classList.add('block', 'text-gray-500', 'font-bold', 'md:text-right', 'mb-1',
      'md:mb-0', 'pr-4');
    emailNode.setAttribute('type', 'email');
    emailNode.setAttribute('name', 'email');
    emailNode.classList.add('bg-gray-200', 'appearance-none', 'border-2', 'border-gray-200', 'rounded',
      'w-full', 'py-2', 'px-4', 'text-gray-700', 'leading-tight', 'focus:outline-none', 'focus:bg-white',
      'focus:border-teal-500');
    // build message textarea
    messageLabelNode.setAttribute('for', 'message');
    messageLabelNode.textContent = 'Message: ';
    messageLabelNode.classList.add('block', 'text-gray-500', 'font-bold', 'md:text-right', 'mb-1',
      'md:mb-0', 'pr-4');
    messageNode.setAttribute('name', 'message');
    messageNode.setAttribute('rows', '10');
    messageNode.classList.add('text-grey-darkest', 'appearance-none', 'border-2', 'rounded', 'p-2', 'm-1',
      'bg-gray-200', 'w-full', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-teal-500');
    // build submit button
    submitNode.setAttribute('type', 'submit');
    submitNode.classList.add('shadow', 'bg-teal-500', 'hover:bg-teal-400', 'focus:shadow-outline',
      'focus:outline-none', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');

    inputContainerNode.append(inputCellNode);
    inputContainerNode.append(inputCellNode.cloneNode(true));
    formNode.appendChild(inputContainerNode.cloneNode(true));
    formNode.appendChild(inputContainerNode.cloneNode(true));
    formNode.appendChild(inputContainerNode);

    formNode.children[0].firstChild.appendChild(emailLabelNode);
    formNode.children[0].lastChild.appendChild(emailNode);
    formNode.children[1].firstChild.appendChild(messageLabelNode);
    formNode.children[1].lastChild.appendChild(messageNode);
    formNode.children[2].lastChild.appendChild(submitNode);

    return formNode;
  };

  const title = () => {
    const titleNode = document.createElement('h1');

    titleNode.classList.add('text-6xl', 'text-center', 'my-8');
    titleNode.textContent = "Let's talk";

    return titleNode;
  };

  const content = () => {
    const contactNode = document.createElement('div');
    const titleNode = title();
    const formNode = buildForm();

    contactNode.setAttribute('id', 'contact');
    contactNode.classList.add('contact', 'flex', 'flex-wrap', 'justify-center');
    contactNode.appendChild(titleNode);
    contactNode.appendChild(formNode);

    return contactNode;
  };

  return { content };
};

export default Contact;
