const observer = new IntersectionObserver((entery) => {
  console.log(entery);
  entery.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hide = document.querySelectorAll(".card");
hide.forEach((el) => observer.observe);
