document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('myHeader');
  const page = document.getElementById('page');
  const openMenuButton = document.getElementById('openmenu');
  const links = document.querySelectorAll('a[href^="#"]');

  window.addEventListener('scroll', function () {
      page.classList.remove('menuopen');
      if (window.scrollY >= 100) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  openMenuButton.addEventListener('click', function () {
      header.classList.remove('sticky');
      page.classList.add('menuopen');
  });

  document.addEventListener('click', function (event) {
      if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
          event.preventDefault();

          const targetId = event.target.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      }
  });
});

const swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
      invert: false,
  },
});

const colors = ["var(--color1)", "var(--color2)", "var(--color3)"];

const textGroups = document.querySelectorAll(".text-group");
textGroups.forEach((group) => group.count = group.querySelectorAll("text").length);
const uses = document.querySelectorAll("#textClip use");
const blobs = document.querySelectorAll("#background path");

let currCount = 1;

function colorBlobs() {
  blobs.forEach((blob) => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
  });
}

function nextIteration() {
  // Change the color of all the blobs
  colorBlobs();

  // Show new set of lines
  uses.forEach((use, i) => {
    use.setAttribute('href', i < textGroups[currCount].count ? `#text${currCount + 1}.${i + 1}` : '');
  });
  
  currCount = currCount + 1 < textGroups.length ? currCount + 1 : 0;
}

// Since all of our blobs are using the same animation, we only
// need to listen to one of them
blobs[0].addEventListener("animationiteration", nextIteration);

colorBlobs();
