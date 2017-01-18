const $ = (selector, element) =>
  Array.prototype.slice.call((element || document).querySelectorAll(selector) || []);

const $$ = (selector, element) => (element || document).querySelector(selector);

const $load = (func) => {
  window.addEventListener('load', func, false);
}

const $addClass = (classNames, element) => {
  if (element) {
    classNames.split(' ').forEach((className) => element.classList.add(className))
  }
}