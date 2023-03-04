// Options

var slide_time = 1200; // The time it takes to complete an entire transition
var change_point = slide_time / 2; // Calculates when the slide should change
var current_slide = "home"; // Starting slide
var on = 1;

const contactSection = document.getElementById("contact-section")
const trackSection = document.getElementById("track-section")
const homeSection = document.getElementById("home-section")
const skillsSection = document.getElementById("skills-section")

function getTransitionData(transition_type) {
    const bodyHeight = document.getElementById("body").offsetHeight
    const animations = {
        split_diamond: {animation: [{transform: 'rotate(45deg) scale(0)'}, {transform: `rotate(45deg) scale(${(bodyHeight / 100) - 1})`}, {transform: 'rotate(45deg) scale(0)'}], duration: 1000},
        split_diagonal: {animation: [{transform: 'rotate(45deg) scale(0)'}, {transform: `rotate(45deg) scale(${(bodyHeight / 100)})`}, {transform: 'rotate(45deg) scale(0)'}], duration: 1000},
        split_horizontal: {animation: [{transform: 'scaleY(0)'}, {transform: `scaleY(${(bodyHeight / 100) - 1})`}, {transform: 'scaleY(0)'}], duration: 800},
        wipe_right: {animation: [], duration: 800},
        wipe_left: {animation: [], duration: 800}
    }
    return animations[transition_type]
}

function getTransitionType(current, destination) {
    if (current == "home") return "split_diagonal"
    if (destination == "home") return "split_horizontal"
    if (destination == "contact" || current == "contact") return "split_diamond"
    if (destination == "skills") return "wipe_right"
    if (current == "skills") return "wipe_left"
    return "none"
}

function runTransition(section, transition_type) {
    setTimeout(function() {
        if (on == 1) {
            on = 0;
            set_transition(transition_type);
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

    if (current_slide !== "skills" && navDestination === "Skills") {generateSkillUniverse()}
    if (current_slide === "skills" && navDestination !== "Skills") {removeSkillUniverse()}

    if (navDestination.toLowerCase() === current_slide) return
    if ((navDestination === "Work" || navDestination === "Education") && current_slide === "track") return

    const sectionDestination = navDestination === "Home" ? homeSection 
        : navDestination === "Contact" ? contactSection
        : navDestination === "Skills" ? skillsSection
        : trackSection
    
    runTransition(sectionDestination, getTransitionType(current_slide, navDestination.toLowerCase()))

    current_slide = navDestination === "Home" ? "home" 
        : navDestination === "Contact" ? "contact"
        : navDestination === "Skills" ? "skills"
        : "track"
}

// Add click listeners on all nav items
for(const nav of document.getElementsByClassName("nav-link")) {
    nav.addEventListener("click", navigate)
}

// Set transition type
function set_transition(transition_type) {
    const animationData = getTransitionData(transition_type)
    for(const numbered_d of document.getElementsByClassName("easytransitions_transition")) {
        for(const d of numbered_d.children) {
            d.classList.remove(d.classList.value.split(" ").pop());
            setTimeout(function () {
                d.classList.add(transition_type)
                d.animate(animationData["animation"], {duration: animationData["duration"], iterations:1})
            }, 100);
        }
    }
}
