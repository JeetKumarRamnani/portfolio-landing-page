const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

const navContainer = document.querySelector("#mobileNavContainer");
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#closeButton");
console.log(navContainer, hamburger, closeIcon);

hamburger.addEventListener("click", function () {
  navContainer.style.display = "block";
});
closeIcon.addEventListener("click", function () {
  navContainer.style.display = "none";
});
