document.addEventListener("DOMContentLoaded", function () {
  const fadeSections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  fadeSections.forEach((section) => {
    observer.observe(section);
  });
});