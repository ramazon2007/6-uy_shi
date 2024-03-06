const btnActive = document.querySelector(".active");
const btnClose = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

btnActive.addEventListener("click", () => {
  btnClose.style.display = "block";
  btnActive.style.display = "none";
  sidebar.style.marginLeft = "0";
});

btnClose.addEventListener("click", () => {
  btnClose.style.display = "none";
  btnActive.style.display = "block";
  sidebar.style.marginLeft = "-120px";
});
