/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const menuLink = document.getElementById('menu_link');
  const contactLink = document.getElementById('contact_link');
  const contact = Object(_contact__WEBPACK_IMPORTED_MODULE_0__["default"])().content();
  const menu = Object(_menu__WEBPACK_IMPORTED_MODULE_1__["default"])().content();

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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Contact);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Menu);


/***/ })
/******/ ]);