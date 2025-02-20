let nosOpSlider = tns({
    container: ".nosop-slider",
    items: 1,
    controls: false,
    loop: false,
    autoplayButtonOutput: false,
    autoplayHoverPause: false,
    autoplayResetOnVisibility: false,
    center: false,
    touch: true, 
    mouseDrag: true, 
    swipeAngle: 30,
    nav: false,
    gutter:0,
    responsive: {
        0:{
          items: 1,
          center: true
        },
        786: {
          items: 3, 
          center: true
        },
        1024: {
          items: 4, 
          center:false
        },
   
      },
  });

  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("#video");
    const playButton = document.querySelector("#playBtn");

    playButton.addEventListener("click", () => {
      if (video.paused) {
          video.play();
          playButton.style.display = "none"; // Hide play button when playing
      } 
  });

  video.addEventListener("click", () => {
      if (video.paused) {
          video.play();
          playButton.style.display = "none"; // Hide play button when playing
      } else {
          video.pause();
          playButton.style.display = "block"; // Show play button when paused
      }
  });
});

const text = document.querySelector(".scroll-text");

        // Duplicate text for seamless effect
        const container = document.querySelector(".scroll-container");
        container.appendChild(text.cloneNode(true));

        gsap.to(".scroll-text", {
            x: "-100%",
            duration: 10, 
            ease: "linear",
            repeat: -1
        });