const coursesDetails = {
  price: ["200", "300", "400", "500"],
  name: ["default1", "default2", "default3", "default4"],
};

const setDetails = () => {
  const getPricePlaceholder = document.querySelectorAll("[data-price]");
  const getNamePlaceholder = document.querySelectorAll("[data-name]");
  var i = 0;
  getPricePlaceholder.forEach((element) => {
    element.textContent = `${coursesDetails.price[i]}$`;
    i++;
  });
  i = 0;
  getNamePlaceholder.forEach((element) => {
    element.textContent = `${coursesDetails.name[i]}`;
    i++;
  });
};
setDetails();

const closeMobileNav = () => {
  const navbar = document.querySelector(".nav-slide");
  navbar.classList.toggle("custom-translate"); //changes nav-slide position
};

addEventListener("load", () => {
  document.querySelector(".nav-btn").addEventListener("click", closeMobileNav);
  document
    .querySelector(".navm-close")
    .addEventListener("click", closeMobileNav);
});
