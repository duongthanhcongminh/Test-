const determineBtn = document.getElementById("determinebutton");
const defaultResultBox = document.getElementsByClassName("default-box");

determineBtn.addEventListener("click", function () {
  const defaultAns = document.getElementsByClassName("defaultAns");

  defaultResultBox[0].innerHTML = "";
  const heading = document.createElement("h2");
  heading.classList.add("default-heading");

  const image = document.createElement("img");
  image.classList.add("default-img");

  if (
    defaultAns[0].selectedIndex == 2 &&
    defaultAns[1].selectedIndex == 3 &&
    defaultAns[2].selectedIndex == 1
  ) {
    heading.textContent = "You're an alien";
    image.setAttribute("src", "./background.jfif.jfif");
  } else if (
    defaultAns[0].selectedIndex == 2 &&
    defaultAns[1].selectedIndex == 1 &&
    defaultAns[2].selectedIndex == 2
  ) {
    heading.textContent = "You're bizarre";
    image.setAttribute("src", "./bizarre.jfif");
  } else {
    heading.textContent = "You're normal";
    image.setAttribute("src", "./normal.jfif.jfif");
  }

  defaultResultBox[0].appendChild(heading);
  defaultResultBox[0].appendChild(image);
});