// document.addEventListener("DOMContentLoaded", () => {
//     fetch("navbar.html")
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById("navbar-container").innerHTML = data;
//       })
//       .catch(error => console.error("Navbar load failed:", error));
//   });


document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
  
        // Now add keyboard interaction
        const navLinks = document.querySelectorAll('#navbar-container a');
        let currentIndex = 0;
  
        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % navLinks.length;
            navLinks[currentIndex].focus();
          } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[currentIndex].focus();
          }
        });
      })
      .catch(err => console.error("Failed to load navbar:", err));
  });
  
  