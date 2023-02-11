// Options

var slide_time = 1200; // The time it takes to complete an entire transition
var change_point = slide_time / 2; // Calculates when the slide should change
var slide_amount = $(".easytransitions section").length; // How many slides
var current_slide = "track"; // Starting slide
var on = 1;

const contactSection = document.getElementById("contact-section")

function runTransition(section) {
    setTimeout(function() {
        if (on == 1) {
            on = 0;
            set_transition("split_diamond");
            setTimeout(function () {
                document.getElementsByClassName("active_slide")[0].classList.add("hidden")
                document.getElementsByClassName("active_slide")[0].classList.remove("active_slide")
                section.classList.add("active_slide");
                section.classList.remove("hidden");
            }, change_point);
            setTimeout(function () {
                on = 1;
            }, slide_time);
        }
    }, 500)
}

const sayCoucou = (e) => {
    const navDestination = e.target.parentNode.text.trim()
    if (navDestination === "Contact") {
        runTransition(document.getElementById("contact-section"))
        current_slide = "contact"
    } else {
        if (current_slide == "contact" && navDestination !== "Contact") {
            runTransition(document.getElementById("track-section"))
            current_slide = "track"
        }
    }
}

// Add click listeners on all nav items
for(const nav of document.getElementsByClassName("nav-link")) {
    nav.addEventListener("click", sayCoucou)
}

// Set transition type

function set_transition(transition_type) {
  $(".easytransitions_transition div").each(function () {
    $(this).removeClass(this.className.split(" ").pop());
    setTimeout(function () {
      $(".easytransitions_transition div").addClass(transition_type);
    }, 100);
  });
}
