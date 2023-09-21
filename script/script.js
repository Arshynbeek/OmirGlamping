window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.querySelector("header").classList.add("headered");
  } else {
    document.querySelector("header").classList.remove("headered");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const scrollPosition = targetElement.offsetTop - 70;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth"
        });
      }
    });
  });
});


document.getElementById("language-btn").addEventListener("click", () => {
  document.querySelector(".language-block").classList.toggle("language-block-drop");
});


document.querySelector(".learn-more").addEventListener("click", () => {
  document.querySelector(".modal-window").style.opacity = "1";
  document.querySelector(".modal-window").style.display = "flex";
})


document.querySelector(".modal-close").addEventListener("click", () => {
  document.querySelector(".modal-window").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".modal-window").style.display = "none";
  }, 500);
});


for (let i = 0; i < document.querySelectorAll(".services").length; ++i) {
  document.getElementsByClassName("services")[i].addEventListener("mouseover", () => {
    document.getElementsByClassName("service-info")[i].style.display = "block";
    document.getElementsByClassName("service-btn")[i].style.display = "block";
  });

  document.getElementsByClassName("services")[i].addEventListener("mouseout", () => {
    document.getElementsByClassName("service-info")[i].style.display = "none";
    document.getElementsByClassName("service-btn")[i].style.display = "none";
  });
}


document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".navbar").style.left = "-20px";
});


document.querySelector(".navbar-close").addEventListener("click", () => {
  document.querySelector(".navbar").style.left = "-260px";
});


let index1 = 0;
let subtitle1 = ["subtitle text 1", "subtitle text 2", "subtitle text 3"];
let title1 = ["title qweqwe text 1", "title qweqwe text 2", "title qweqwe text 3"];
let text1 = ["qweqweqweqwe qweqwe text 1", "qweqweqweqwe qweqew text 2", "qweqweqweqwe qweqwe text 3"];
let image1 = ["image/IMG_6037.jpg", "image/DJI_0728.jpg", "image/DJI_0602.png"];
document.querySelector(".discover-l1").addEventListener("click", () => {
  const subtitle = document.querySelector(".discover-subtitle1");
  const title = document.querySelector(".discover-title1");
  const text = document.querySelector(".discover-text1");
  const image = document.querySelector(".discover-image1");
  
  index1--;
  if (index1 == -1) {
    index1 = 2;
  }

  setTimeout(function() {
    subtitle.classList.add("slide-l");
  }, 100);
  setTimeout(function() {
    title.classList.add("slide-l");
    subtitle.innerHTML = subtitle1[index1];
    image.style.filter = "brightness(0)";
  }, 150);
  setTimeout(function() {
    text.classList.add("slide-l");
    title.innerHTML = title1[index1];
    image.src = image1[index1];
  }, 200);
  setTimeout(function() {
    text.innerHTML = text1[index1];
    image.style.filter = "brightness(1)";
  }, 250);

  setTimeout(function() {
    subtitle.classList.remove("slide-l");
  }, 500);
  setTimeout(function() {
    title.classList.remove("slide-l");
  }, 550);
  setTimeout(function() {
    text.classList.remove("slide-l");
  }, 600);
});

document.querySelector(".discover-r1").addEventListener("click", () => {
  const subtitle = document.querySelector(".discover-subtitle1");
  const title = document.querySelector(".discover-title1");
  const text = document.querySelector(".discover-text1");
  const image = document.querySelector(".discover-image1")
  
  index1++;
  if (index1 == 3) {
    index1 = 0;
  }

  setTimeout(function() {
    subtitle.classList.add("slide-r");
  }, 100);
  setTimeout(function() {
    title.classList.add("slide-r");
    subtitle.innerHTML = subtitle1[index1];
    image.style.filter = "brightness(0)";
  }, 150);
  setTimeout(function() {
    text.classList.add("slide-r");
    title.innerHTML = title1[index1];
    image.src = image1[index1];
  }, 200);
  setTimeout(function() {
    text.innerHTML = text1[index1];
    image.style.filter = "brightness(1)";
  }, 250);

  setTimeout(function() {
    subtitle.classList.remove("slide-r");
  }, 500);
  setTimeout(function() {
    title.classList.remove("slide-r");
  }, 550);
  setTimeout(function() {
    text.classList.remove("slide-r");
  }, 600);
});


let index2 = 0;
let subtitle2 = ["subtitle text 1", "subtitle text 2", "subtitle text 3"];
let title2 = ["title qweqwe text 1", "title qweqwe text 2", "title qweqwe text 3"];
let text2 = ["qweqweqweqwe qweqwe text 1", "qweqweqweqwe qweqew text 2", "qweqweqweqwe qweqwe text 3"];
let image2 = ["image/DJI_0888.jpg", "image/NRQ_3141.jpg", "image/shamsi-2.png"];
document.querySelector(".discover-l2").addEventListener("click", () => {
  const subtitle = document.querySelector(".discover-subtitle2");
  const title = document.querySelector(".discover-title2");
  const text = document.querySelector(".discover-text2");
  const image = document.querySelector(".discover-image2");
  
  index2--;
  if (index2 == -1) {
    index2 = 2;
  }

  setTimeout(function() {
    subtitle.classList.add("slide-l");
  }, 100);
  setTimeout(function() {
    title.classList.add("slide-l");
    subtitle.innerHTML = subtitle2[index2];
    image.style.filter = "brightness(0)";
  }, 150);
  setTimeout(function() {
    text.classList.add("slide-l");
    title.innerHTML = title2[index2];
    image.src = image2[index2];
  }, 200);
  setTimeout(function() {
    text.innerHTML = text2[index2];
    image.style.filter = "brightness(1)";
  }, 250);

  setTimeout(function() {
    subtitle.classList.remove("slide-l");
  }, 500);
  setTimeout(function() {
    title.classList.remove("slide-l");
  }, 550);
  setTimeout(function() {
    text.classList.remove("slide-l");
  }, 600);
});

document.querySelector(".discover-r2").addEventListener("click", () => {
  const subtitle = document.querySelector(".discover-subtitle2");
  const title = document.querySelector(".discover-title2");
  const text = document.querySelector(".discover-text2");
  const image = document.querySelector(".discover-image2")
  
  index2++;
  if (index2 == 3) {
    index2 = 0;
  }

  setTimeout(function() {
    subtitle.classList.add("slide-r");
  }, 100);
  setTimeout(function() {
    title.classList.add("slide-r");
    subtitle.innerHTML = subtitle2[index2];
    image.style.filter = "brightness(0)";
  }, 150);
  setTimeout(function() {
    text.classList.add("slide-r");
    title.innerHTML = title2[index2];
    image.src = image2[index2];
  }, 200);
  setTimeout(function() {
    text.innerHTML = text2[index2];
    image.style.filter = "brightness(1)";
  }, 250);

  setTimeout(function() {
    subtitle.classList.remove("slide-r");
  }, 500);
  setTimeout(function() {
    title.classList.remove("slide-r");
  }, 550);
  setTimeout(function() {
    text.classList.remove("slide-r");
  }, 600);
});