document.querySelectorAll(".img-container").forEach(container => {
  const image = container.querySelector(".hover-image");

  container.addEventListener("mousemove", (e) => {
      container.style.zIndex='10';
  });

  container.addEventListener("mouseleave", () => {
    container.style.zIndex='0'
  });
});
