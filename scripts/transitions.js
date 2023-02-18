// Options

var slide_time = 1200; // The time it takes to complete an entire transition
var change_point = slide_time / 2; // Calculates when the slide should change
var current_slide = "home"; // Starting slide
var on = 1;

const contactSection = document.getElementById("contact-section")
const trackSection = document.getElementById("track-section")
const homeSection = document.getElementById("home-section")

const bodyHeight = document.getElementById("body").offsetHeight

function getTransitionData(transition_type) {
    const bodyHeight = document.getElementById("body").offsetHeight
    const animations = {
        split_diamond: {animation: [{transform: 'rotate(45deg) scale(0)'}, {transform: `rotate(45deg) scale(${(bodyHeight / 100) - 1})`}, {transform: 'rotate(45deg) scale(0)'}], duration: 1000},
        split_diagonal: {animation: [{transform: 'scaleX(0)'}, {transform: `scaleX(${(bodyHeight / 100) - 1})`}, {transform: 'scaleX(0)'}], duration: 1000}
    }
    return animations[transition_type]
}

function runTransition(section) {
    setTimeout(function() {
        if (on == 1) {
            on = 0;
            set_transition(section.getAttribute("data-transition"));
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

const navigate = (e) => {
    const navDestination = e.target.parentNode.text.trim()

    if (navDestination.toLowerCase() === current_slide) return
    if ((navDestination === "Work" || navDestination === "Education") && current_slide === "track") return

    const sectionDestination = navDestination === "Home" ? homeSection 
        : navDestination === "Contact" ? contactSection
        : trackSection

    runTransition(sectionDestination)

    current_slide = navDestination === "Home" ? "home" 
        : navDestination === "Contact" ? "contact"
        : "track"
}

// Add click listeners on all nav items
for(const nav of document.getElementsByClassName("nav-link")) {
    nav.addEventListener("click", navigate)
}

// Set transition type
function set_transition(transition_type) {
    const animationData = getTransitionData(transition_type)
    for(const d of document.getElementsByClassName("easytransitions_transition")[0].children) {
        d.classList.remove(d.classList.value.split(" ").pop());
        setTimeout(function () {
            d.classList.add(transition_type)
            d.animate(animationData["animation"], {duration: animationData["duration"], iterations:1})
        }, 100);
    }
}