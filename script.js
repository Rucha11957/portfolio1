window.onload = function () {
  const page = document.body.id;

  // Show welcome alert on home page
  if (page === "home") {
    alert("Welcome to Rucha's Portfolio!");
  }

  // Add hover effect to project cards
  if (page === "projects") {
    const cards = document.querySelectorAll(".project");
    cards.forEach(card => {
      card.style.transition = "0.3s";
      card.onmouseenter = () => card.style.transform = "scale(1.05)";
      card.onmouseleave = () => card.style.transform = "scale(1)";
    });
  }

  // Validate email in contact form
  if (page === "contact") {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        const email = document.getElementById("email").value;
        if (!email.includes("@")) {
          alert("Please enter a valid email address.");
          e.preventDefault();
        }
      });
    }
  }

  // Disable right-click on education page
  if (page === "education") {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      alert("Right-click is disabled on this page.");
    });
  }
};
