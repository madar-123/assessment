const images = [
  "Fishing manufacturing.jpg",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
];

let index = 0;

function showImage() {
  document.getElementById("mainImage").src = images[index];
}

function nextImg() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImg() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function changeImg(el) {
  document.getElementById("mainImage").src = el.src;
}
// function getQuote() {
//             alert('Quote request sent! We will contact you soon.');
//         }

//         function technicalSpec() {
//             alert('Technical specifications: Premium HDPE Pipes for modern infrastructure projects. Chemical resistant, long life, easy installation. PN ratings available from 4-16.');
//         }

//         // Smooth scrolling for nav links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 document.querySelector(this.getAttribute('href')).scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             });
//         });
function requestQuote() {
 
    document.getElementById('Request').classList.remove('pop')
}
// Accordion toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Email submit
function submitEmail() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter your email");
  } else {
    alert("Catalogue request sent to " + email);
  }
}
const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let scrollAmount = 0;
const scrollStep = 280; // card width + gap

next.addEventListener("click", () => {
  scrollAmount += scrollStep;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
});

prev.addEventListener("click", () => {
  scrollAmount -= scrollStep;
  if (scrollAmount < 0) scrollAmount = 0;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
});


const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
  function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }

  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });

  function download() {
    alert("Form submitted / start download here");
    
    // example real download:
    // window.location.href = "your-file.pdf";

    document.getElementById("popup").style.display = "none";
  }
