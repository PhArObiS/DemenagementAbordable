// Smooth Scrolling
$(".navbar-nav a").on("click", function (event) {
  if (this.hash != "") {
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

// MiniScreenNavButton
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navmenu = document.getElementsByClassName("nav-menu")[0];

toggleBtn.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});
