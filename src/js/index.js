import 'babel-polyfill';
import _ from 'lodash';

import './../sass/styles.scss';

let drowLang = document.querySelector('.header__lang a');
let showDropLangBlock = document.querySelector('.header__langDrop');

const toggleMenu = () => {
  showDropLangBlock.classList.toggle('active');
}

drowLang.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_showDropLangBlock = target == showDropLangBlock || showDropLangBlock.contains(target);
  let its_drowLang = target == drowLang;
  let showDropLangBlock_is_active = showDropLangBlock.classList.contains('active');
  
  if (!its_showDropLangBlock && !its_drowLang && showDropLangBlock_is_active) {
    toggleMenu();
  }
})

$('.slick').slick({
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1 
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});