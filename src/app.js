
// HAMBURGER MENU TOGGLE START 
const element = document.getElementById("hamburger");

element.onclick = () => {
  if (element.classList.contains("x")) {
    element.classList.remove("x");
  } else {
    element.classList.add("x");
  }
};
// HAMBURGER MENU TOGGLE END 

// MODAL START 
// Get the modal
const modal = document.getElementById("modal-main");
// Get the button that opens the modal
const btn = document.getElementById("modal-btn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
document.getElementById('youtube-video').src += '';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('youtube-video').src += '';
  }
}
// MODAL END 


// Navigation link stays highlighted when clicked START
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav.main-nav li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})
// Navigation link stays highlighted when clicked END

