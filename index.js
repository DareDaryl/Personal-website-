

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20


function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 === 0;
    console.log(isOdd)
    const boolInt = isOdd ? 1 : -1;
    shapes[i].style.transform = `translate(${x* boolInt}px, ${y*boolInt}px)`
  }
}

/* My fun feature below. Toggle light to dark mode */
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
  
}
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_d3r4vgk",
      "template_up0j5ww",
      event.target,
      "iYB2CYCn4UXWbLH-T"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log("SUCCESS!");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "Karl, I can't get this to function. Can you help? For everyone else please contact me directly at darylshifflett@gmail.com."
      );
    });
}
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}