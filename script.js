function nextPage(number) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + number).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// FLOATING HEARTS

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "floating";

  heart.innerHTML = ["❤️", "💕", "💗", "💖", "💘"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);

}

setInterval(createHeart, 600);


// MUSIC PLAYER

const song = document.getElementById("loveSong");
const vinyl = document.getElementById("vinyl");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {

  if (song.paused) {

    song.play().then(() => {
      vinyl.classList.add("playing");
      musicBtn.innerHTML = "⏸ Pause Music";
    }).catch(() => {
      alert("Please add your music file named your-song.mp3!");
    });

  } else {

    song.pause();
    vinyl.classList.remove("playing");
    musicBtn.innerHTML = "▶ Play Music";

  }

}