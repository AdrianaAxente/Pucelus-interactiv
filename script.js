const pig = document.getElementById("pig");
const mudPit = document.getElementById("mud-pit");
const message = document.getElementById("message");
const moodSlider = document.getElementById("mood-slider");
const pan = document.getElementById("pan");
const collectButton = document.getElementById("collect-button");
const tail = document.getElementById("tail");

let name = prompt("Cum te numești?");
message.textContent = `Salut, ${name}! Eu sunt purcelușul tău.`;

let hamCount = 0;

moodSlider.addEventListener("input", () => {
  const mood = moodSlider.value;
  if (mood <= 5) {
    message.textContent = `Salut, ${name}, astăzi sunt cam supărat.`;
    pig.classList.add("sad");
    pig.classList.remove("neutral", "happy");
  } else if (mood <= 7) {
    message.textContent = `Salut, ${name}, astăzi nu sunt nici supărat, nici fericit.`;
    pig.classList.add("neutral");
    pig.classList.remove("sad", "happy");
  } else {
    message.textContent = `Salut, ${name}, astăzi sunt foarte fericit!`;
    pig.classList.add("happy");
    pig.classList.remove("sad", "neutral");
  }
});

collectButton.addEventListener("click", () => {
  if (hamCount < 3) {
    hamCount++;
    let hamIllustration = document.createElement("div");
    hamIllustration.style.backgroundColor = "pink";
    hamIllustration.style.width = "30px";
    hamIllustration.style.height = "30px";
    hamIllustration.style.borderRadius = "50%";
    hamIllustration.textContent = "🥓";
    pan.appendChild(hamIllustration);

    pan.classList.add("moving-pan");
    message.textContent = `Ai colectat șunca! Număr șuncă: ${hamCount}`;
    setTimeout(() => {
      pan.classList.remove("moving-pan");
    }, 500);
  } else {
    message.textContent = `Ai colectat deja 3 bucăți de șuncă!`;
  }
});

let isInMud = false;
mudPit.addEventListener("click", () => {
  if (!isInMud) {
    pig.style.bottom = "50px";
    message.textContent = "Imi place sa ma joc!";
    isInMud = true;
  } else {
    pig.style.bottom = "110px";
    message.textContent = "Am iesit din mocirla!";
    isInMud = false;
  }
});
