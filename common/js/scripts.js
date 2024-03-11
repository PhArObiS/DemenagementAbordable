// Smooth Scrolling

$(".navbar-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Navbar menu opacity
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
navbar.style.transition = "opacity 0.3s";

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0.5";
  }
  prevScrollpos = currentScrollPos;
};

// Contact form
$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var telephone = $("#phone").val();
    var message = $("#message").val();
    $.ajax({
      method: "POST",
      url: "https://demenagementabordable.com/api/send-lead",
      data: {
        name: name,
        email: email,
        telephone: telephone,
        message: message,
      },
    }).done(function (msg) {
      alert("Email Sent");
    });
  });
});

// Language switcher
const langToggle = document.getElementById("langToggle");

if (langToggle) {
  langToggle.addEventListener("click", function () {
    console.log("Language toggle button clicked!");

    // Get the current language from the HTML tag
    const currentLang = document.documentElement.lang || "en";
    console.log("Current Language:", currentLang);

    // Determine the new language
    const newLang = currentLang === "en" ? "fr" : "en";
    console.log("New Language:", newLang);

    // Generate the new HTML file name based on the language
    const htmlFileName = newLang === "en" ? "index.html" : "index-fr.html";
    console.log("HTML File Name:", htmlFileName);

    // Update the location to navigate to the new language version
    try {
      const newPath = new URL(htmlFileName, window.location.href).pathname;
      console.log("New Path:", newPath);
      location.href = newPath;
    } catch (error) {
      console.error("Error generating new URL:", error);
    }
  });
} else {
  console.error("Language toggle button not found!");
}
