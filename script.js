function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from(" .line h1", {
    y: 100,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5Timer = document.querySelector("#line1-part1 h5");
      let grow = 0;

      let intervalID = setInterval(function () {
        if (grow <= 100) {
          h5Timer.textContent = grow++;
        } else {
          clearInterval(intervalID);
        }
      }, 33);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });

  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.2,
    ease: Power4,
    duration: 0.5,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#we-design1 h1,#we-design2 h1,#we-design3 h2,#we-design4 h1", {
    y: 120,
    stagger: 0.2,
    opacity: 0,
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4", {});
}

loadingAnimation();
cursorAnimation();
