// Import stylesheets

import './style.scss';

// Nav Bar Responsive Script

const menuBtn = document.querySelector('.nav-menu__icon span');
const logoutBtn = document.querySelector('.nav-menu__logout-icon');
const cancelBtn = document.querySelector('.nav-menu__cancel-icon');
const items = document.querySelector('.nav-menu__nav-items');

menuBtn.onclick = () => {
  items.classList.add('nav-menu__nav-items__active');
  menuBtn.classList.add('hide');
  logoutBtn.classList.add('hide');
  cancelBtn.classList.add('show');
};
cancelBtn.onclick = () => {
  items.classList.remove('nav-menu__nav-items__active');
  menuBtn.classList.remove('hide');
  logoutBtn.classList.remove('hide');
  cancelBtn.classList.remove('show');
};
logoutBtn.onclick = () => {
  logoutBtn.classList.add('hide');
  cancelBtn.classList.add('show');
};
