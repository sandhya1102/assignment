const textcontent=document.querySelector(".hero-content");document.querySelectorAll(".img-container").forEach(container => {

  container.addEventListener("mousemove", (e) => {
      container.style.zIndex='10';
      textcontent.style.opacity='0.3';
  });

  container.addEventListener("mouseleave", () => {
    container.style.zIndex='0'
    textcontent.style.opacity='1';
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");

  setTimeout(() => {
      loadingScreen.style.display = "none";
  }, 4000); 
});
