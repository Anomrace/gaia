const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});


const red = ["#fc5a5ab3", "#fc3a3ab3", "#ff1919b3", "#b10000"]

let i = 0;

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
    item.style.cssText = `background-color: ${red[i++]}`
    
})


