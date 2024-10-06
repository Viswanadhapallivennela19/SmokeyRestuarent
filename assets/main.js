function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
// JavaScript to change header background on scroll
window.onscroll = function() 
{
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {  // When the user has scrolled more than 50px
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

// function getRandomClipPath() {
//   return `polygon(${Math.random() * 100}% ${Math.random() * 100}%, 
//                   ${Math.random() * 100}% ${Math.random() * 100}%, 
//                   ${Math.random() * 100}% ${Math.random() * 100}%, 
//                   ${Math.random() * 100}% ${Math.random() * 100}%)`;
// }

// const shape = document.querySelector('.shape');

// function applyRandomClipPath() {
//   shape.style.clipPath = getRandomClipPath();
// }

// Apply random clip-path every second
// setInterval(applyRandomClipPath, 1000);

// function getRandomBorderRadius() {
//   return `${Math.floor(Math.random() * 80)}% ${Math.floor(Math.random() * 50)}% ${Math.floor(Math.random() * 60)}% ${Math.floor(Math.random() * 100)}%`;
// }

// const box = document.querySelector('.box');

// function applyRandomBorderRadius() {
//   box.style.borderRadius = getRandomBorderRadius();
// }

// // Apply random border radius every 1 second
// setInterval(applyRandomBorderRadius, 2000);
