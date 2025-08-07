let listElements = document.querySelectorAll(".our-work ul li");
let Allcoloums = document.querySelectorAll(".our-work .row .col-sm-6");

listElements.forEach((ele) => {
  ele.onclick = function () {
    listElements.forEach((el) => {
      el.classList.remove("active");
    });

    ele.classList.add("active");

    Allcoloums.forEach((e) => {
      e.style.display = "none";
    });

    let ImgContainer = document.querySelectorAll(
      `.our-work .row div div[data-work=${ele.textContent}]`
    );
    ImgContainer.forEach((ee) => {
      ee.parentElement.style.display = "block";
      ee.parentElement.classList.remove("col-md-4", "col-lg-3");
      ee.parentElement.classList.add("col-md-6", "col-lg-6");
      ee.querySelector("img").style.width = "100%";
    });

    if (ele.textContent === "All") {
      Allcoloums.forEach((e) => {
        e.classList.remove("col-md-6", "col-lg-6");
        e.classList.add("col-md-4", "col-lg-3");
        e.style.display = "block";
      });
    }
  };
});
