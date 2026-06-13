/* ═══════════════════════════════════════════════════════
   script.js — المهندس للخراطة الميكانيكية وعمرة المواتير
   ═══════════════════════════════════════════════════════ */

(function () {
  /* ── 1. Reveal on Scroll (IntersectionObserver) ── */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  }

  /* ── 2. Floating WhatsApp Button — Scale on Hover ── */
  var waBtn = document.querySelector(".fixed.bottom-6");
  if (waBtn) {
    waBtn.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
    });
    waBtn.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  /* ── 3. Smooth Scroll for Anchor Links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();