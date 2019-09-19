const Contact = () => {
  const buildForm = () => {
    const formNode = document.createElement('form');
    const emailLabelNode = document.createElement('label');
    const emailNode = document.createElement('input');
    const messageLabelNode = document.createElement('label');
    const messageNode = document.createElement('textarea');
    const submitNode = document.createElement('input');

    // build form
    formNode.setAttribute('action', '#');
    // build email field
    emailLabelNode.setAttribute('for', 'email');
    emailLabelNode.textContent = 'Email: ';
    emailNode.setAttribute('type', 'email');
    emailNode.setAttribute('name', 'email');
    // build message textarea
    messageLabelNode.setAttribute('for', 'message');
    messageLabelNode.textContent = 'Message: ';
    messageNode.setAttribute('name', 'message');
    messageNode.setAttribute('rows', '10');
    // build submit button
    submitNode.setAttribute('type', 'submit');

    formNode.appendChild(emailLabelNode);
    formNode.appendChild(emailNode);
    formNode.appendChild(messageLabelNode);
    formNode.appendChild(messageNode);
    formNode.appendChild(submitNode);

    return formNode;
  };

  const title = () => {
    const titleNode = document.createElement('h1');
    titleNode.textContent = "Let's talk";

    return titleNode;
  };

  const html = () => {
    const contactNode = document.createElement('div');
    const titleNode = title();
    const formNode = buildForm();

    contactNode.classList.add('contact');
    contactNode.appendChild(titleNode);
    contactNode.appendChild(formNode);

    return contactNode;
  };

  return { html };
};

export default Contact;
