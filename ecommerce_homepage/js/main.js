// Menu button mobile
const navToggle = document.querySelector(".nav__mobile-toggle");
const primaryNav = document.querySelector(".nav__menu-wrapper");

navToggle.addEventListener("click", () => {

    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
});


// Checkboxs
// const checkbox = document.getElementById('chaise');
// const box = document.getElementById('chaise-title');

// checkbox.addEventListener('click', function handleClick() {
//   if (checkbox.checked) {
//     box.style.display = 'block';
//   } else {
//     box.style.display = 'none';
//   }
// });

// const oto = document.getElementById('ottoman');
// const ototitle = document.getElementById('ottoman-title');

// oto.addEventListener('click', function handleClick() {
//   if (oto.checked) {
//     ototitle.style.display = 'block';
//   } else {
//     ototitle.style.display = 'none';
//   }
// });


// const lumbar = document.getElementById('lumbar');
// const lumbartitle = document.getElementById('lumbar-title');

// lumbar.addEventListener('click', function handleClick() {
//   if (lumbar.checked) {
//     lumbartitle.style.display = 'block';
//   } else {
//     lumbartitle.style.display = 'none';
//   }
// });


// const sleep = document.getElementById('sleep');
// const sleeptitle = document.getElementById('sleep-title');

// sleep.addEventListener('click', function handleClick() {
//   if (sleep.checked) {
//     sleeptitle.style.display = 'block';
//   } else {
//     sleeptitle.style.display = 'none';
//   }
// });






