// Cart scrolling animation
const track = document.getElementById("track-recorder");
let isFullScreenOpened = false;

const handleOnDown = e => {
  if(isFullScreenOpened) {return}
  track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
  if(isFullScreenOpened) {return}
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const updateImageAndTrackPositions = (duration) => {
  const percentage = parseFloat(track.dataset.percentage)

  for(const image_track of document.getElementsByClassName("image-track")) {
    image_track.animate({
      transform: `translate(${percentage}%, -50%)`
    }, { duration: duration, fill: "forwards" });
  }
  
  for(const image of document.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + percentage}% center`
    }, { duration: duration, fill: "forwards" });
  }
}


const handleOnMove = e => {
  if(isFullScreenOpened) {return}
  if(track.dataset.mouseDownAt === "0") return;
  
  track.dataset.hasUserDragged = "true"
  if(!document.getElementById("drag-tutorial").classList.contains("hidden-drag-tutorial")) {
    document.getElementById("drag-tutorial").classList.add("hidden-drag-tutorial")
  }

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  if(isNaN(track.dataset.prevPercentage)) {
    track.dataset.prevPercentage = 0
  }

  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;

  updateImageAndTrackPositions(1200);
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// Zoom in animation
const container = document.getElementById("body")

const shrink = (e) => {
  hideDetails()
  updateImageAndTrackPositions(10);

  const el = document.querySelector(".full-screen")
  el.style.transform = 'scale(1.0)'
  
  // Remove cloned element from DOM after animation is over
  el.addEventListener("animationend", (e) => {
    setTimeout(function() {
      e.target.remove()
      isFullScreenOpened = false
    }, 10);
  })

  // Trigger browser reflow to start animation
  el.style.animation = 'none';
  el.offsetHeight
  el.style.animation = ''
  el.classList.add("shrink-down")
}

const getNonScaledPosition = (min, max, addExtra) => {
  const initialPosition = Math.ceil(min + (((max-min) / 2) * 10/110))
  // Gotta add a little for no reason
  if (addExtra) {
    initialPosition + 3
  }
  return initialPosition
}

const toggleFullScreen = (e) => {
  isFullScreenOpened = true
  // Get position values for element
  const {
    top,
    left,
    right,
    bottom
  } = e.target.getBoundingClientRect()

  // Clone the element and its children
  let fullScreen = e.target.cloneNode(true)

  // Set top and left with custom property
  // TO DO TROUVER LES RATIOS POUR FIX LE INSET
  fullScreen.style.setProperty("--inset", `${getNonScaledPosition(top, bottom, true)}px auto auto ${getNonScaledPosition(left, right, false)}px`)
  fullScreen.style.transform = 'scale(1.1)'

  // Place in container over element to expand
  container.appendChild(fullScreen)

  updateImageAndTrackPositions(10);

  setTimeout(function() {
    // Add class with animation and position
    fullScreen.classList.add("full-screen")
  }, 10)

  setTimeout(function() {
    displayDetails(e)
  }, 500)
}

// Add click listeners on all boxes
for(const image of document.getElementsByClassName("image")) {
  image.addEventListener("click", toggleFullScreen)
}

const hideDetails = () => {
  for(let item of document.getElementsByClassName("details")) {
    item.classList.add("hide-details")
  }
  for(let item of document.querySelectorAll('.displayed-details')) {
    item.remove()
  }
}

const displayDetails = (e) => {
  const details = e.target.parentElement.querySelector(".details").cloneNode(true);
  details.classList.remove("hide-details")
  details.classList.add("displayed-details")
  // Listen for click to close full screen
  details.addEventListener("click", shrink);
  container.appendChild(details)
}

hideDetails()

