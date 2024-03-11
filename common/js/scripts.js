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
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Gather form data
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      message: $("#message").val(),
    };

    // Send the form data to the specified endpoint
    $.post("https://formspree.io/f/mwkjzrww", formData)
      .done(function () {
        // Display a success message to the user
        alert("Votre message a été envoyé avec succès!");

        // Optionally, reset the form after successful submission
        $("#contact-form")[0].reset();
      })
      .fail(function () {
        // Display an error message to the user
        alert("Échec de l'envoi du message. Veuillez réessayer plus tard.");
      });
  });
});

// Form validation and submission quote
$(document).ready(function () {
  $(".myForm").submit(function (event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Gather form data
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      etages: $("#etages").val(),
      pieces: $("#pieces").val(),
      boites: $("#boites").val(),
    };

    // Add checked checkboxes to formData
    $(":checkbox:checked").each(function () {
      formData[$(this).attr("id")] = "OK";
    });

    // Send the form data to the specified endpoint
    $.post("https://formspree.io/f/xzbnvjyv", formData)
      .done(function () {
        // Display a success message to the user
        alert("Votre message a été envoyé avec succès!");

        // Optionally, reset the form after successful submission
        $(".myForm")[0].reset();
      })
      .fail(function () {
        // Display an error message to the user
        alert("Échec de l'envoi du message. Veuillez réessayer plus tard.");
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
