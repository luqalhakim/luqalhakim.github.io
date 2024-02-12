// tsParticles background
const options = {
  background: {
    color: "#222629", // the canvas background color
  },
  interactivity: {
    events: {
      onClick: {
        // this handles the mouse click event
        enable: true,
        mode: "push", // this adds particles
      },
      onHover: {
        // this handles the mouse hover event
        enable: true,
        mode: "repulse", // this make particles move away from the mouse
      },
    },
    modes: {
      push: {
        quantity: 0, // number of particles to add
      },
      repulse: {
        distance: 100, // the distance of the particles from the mouse
      },
    },
  },
  particles: {
    links: {
      enable: true, // this enables links between particles
      opacity: 0.3,
      distance: 100,
    },
    move: {
      enable: true, // this makes particles move
      speed: { min: 1, max: 3 }, // this is the speed of the particles
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
    },
    size: {
      value: { min: 1, max: 3 }, // this sets the size of the particles
    },
  },
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", options);
// ;

// nav link animate
const links = document.querySelectorAll(".nav-link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
        if (!link.classList.contains("active")) {
          link.style.color = "#b2b3b4";
        }
      });
      link.classList.add("active");
      link.style.color = "#86c232";
    });
  });
}

// ;

// Code for Typing Animation
var AutoTyping = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0))
  );
})([
  function (e, t, r) {
    "use strict";
    r.r(t);
    t.default = class {
      constructor(
        e,
        t,
        {
          typeSpeed: r = 150,
          deleteSpeed: n = 150,
          waitBeforeDelete: i = 1e3,
          waitBetweenWords: o = 1e3,
          writeWhole: l = !1,
        } = {}
      ) {
        (this.selector = e),
          (this.text = t),
          (this.typeSpeed = r),
          (this.deleteSpeed = n),
          (this.waitBeforeDelete = i),
          (this.waitBetweenWords = o),
          (this.writeWhole = l),
          (this.el = document.querySelector(e));
      }
      async start() {
        this.el;
        for (let e = 0; e < this.text.length; e++) {
          const t = this.text[e];
          let r = t.split("");
          this.writeWhole && (r = [t]), await this.writeText(r), e == this.text.length - 1 && (e = -1);
        }
      }
      writeText(e) {
        let t = this;
        return new Promise((r) => {
          const n = this.el;
          let i = !1,
            o = setInterval(() => {
              let l = e.shift();
              i && ((i = !1), (l = " " + l)),
                (i = " " == l),
                (n.innerText += l),
                0 == e.length &&
                  (clearInterval(o),
                  setTimeout(() => {
                    let e = setInterval(() => {
                      const i = n.innerText;
                      t.writeWhole ? (n.innerText = " ") : (n.innerText = i.substr(0, i.length - 1)),
                        0 == n.innerText.length && (clearInterval(e), setTimeout(() => r(), this.waitBetweenWords));
                    }, this.deleteSpeed);
                  }, this.waitBeforeDelete));
            }, this.typeSpeed);
        });
      }
    };
  },
]).default;

// ;

// Custom cursor
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});

// ;

// hide icon when display on medium size
var offCanvas = document.querySelector("div.offcanvas");
var brandIcon = document.getElementById("brandIcon");

function checkOffCanvas() {
  var offCanvasContains = offCanvas.classList.contains("show");
  if (offCanvasContains) {
    brandIcon.style.visibility = "hidden";
    brandIcon.style.opacity = "0";
    brandIcon.style.transition = "opacity 0.1s ease-out";
  } else {
    brandIcon.style.visibility = "visible";
    brandIcon.style.opacity = "1";
    brandIcon.style.transition = "opacity 0.1s ease";
  }
}

// Menambahkan event listener untuk memantau perubahan pada offCanvas
offCanvas.addEventListener("transitionend", function () {
  // Panggil fungsi untuk memeriksa kembali setelah transisi selesai
  checkOffCanvas();
});
// ;
