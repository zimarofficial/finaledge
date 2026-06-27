// Smooth animation on scroll
window.addEventListener("scroll", () => {
  let elements = document.querySelectorAll(".card");

  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if(position < screenHeight){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
