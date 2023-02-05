const trackRecorder = document.getElementById("track-recorder")
var scrolling = false
const pages = ['work', 'education']
var currPage = pages[0]
const movable = document.getElementsByClassName('scrollable')
const categoryTitles = document.getElementsByClassName('category')
const marginTop = 200
const marginLeft = 200

const displayDragTutorial = () => {
  if(trackRecorder.dataset.hasUserDragged == "false" && document.getElementById("drag-tutorial").classList.contains("hidden-drag-tutorial")) {
    document.getElementById("drag-tutorial").classList.remove("hidden-drag-tutorial")
  }
}

let displayTutorialTimeout = setTimeout(displayDragTutorial, 5000)

const resetDragTutorialTimeout = () => {
  if(!document.getElementById("drag-tutorial").classList.contains("hidden-drag-tutorial")) {
    document.getElementById("drag-tutorial").classList.add("hidden-drag-tutorial")
  }
  clearTimeout(displayTutorialTimeout)
  displayTutorialTimeout = setTimeout(displayDragTutorial, 5000)
}

const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === 'true' ? 'false' : 'true'
  if(document.body.dataset.nav === "true") {
    if(!document.getElementById("drag-tutorial").classList.contains("hidden-drag-tutorial")) {
      document.getElementById("drag-tutorial").classList.add("hidden-drag-tutorial")
    }
    clearTimeout(displayTutorialTimeout)
  } else {
    resetDragTutorialTimeout()
  }
}

const goToNav = n => {
  toggleNav()
  if (n == currPage) {
    return
  }
  swapOutPageTitle(currPage, true)
  setTimeout(function () {
    scrollAnimation(n)
  }, 600)
}

function swapOutPageTitle (page, withMovement) {
  const categoryPreviouslyDisplayed = document
    .querySelector('#' + page)
    .querySelector('.category')
  if (withMovement) {
    categoryPreviouslyDisplayed.classList.add('in-movement')
  }
  categoryPreviouslyDisplayed.style.marginLeft = -marginLeft + 'vh'
}

function swapInPageTitle (page, withMovement) {
  const categoryToDisplay = document
    .querySelector('#' + page)
    .querySelector('.category')
  if (withMovement) {
    categoryToDisplay.classList.add('in-movement')
  }
  categoryToDisplay.style.marginLeft = '0vh'
}

function hideSecondaryTracks () {
  for (let p of pages) {
    const d = document.getElementById(p)
    if (p !== currPage) {
      d.classList.add('hidden-track')
      d.classList.remove('current-track')
    } else {
      d.classList.add('current-track')
      d.classList.remove('shuffling-in-track')
    }
  }
}

function setupScrolling () {
  hideSecondaryTracks()
  for (let item of movable) {
    if (item.parentElement.parentElement.id != currPage) {
      const endPosition = item.classList.contains('odd')
        ? marginTop
        : -marginTop
      item.style.marginTop = endPosition + 'vh'
    } else {
      item.style.marginTop = '0vh'
    }
  }

  for (let p of pages) {
    swapOutPageTitle(p, false)
  }
  swapInPageTitle(currPage, false)
}

setupScrolling()

function setPagePositions () {
  hideSecondaryTracks()
  for (let item of movable) {
    const classes = item.classList
    const pageName = item.parentElement.parentElement.id
    if (pageName == currPage) {
      item.style.marginTop = '0vh'
    } else {
      const endPosition = classes.contains('odd') ? marginTop : -marginTop
      const side = pages.indexOf(pageName) > pages.indexOf(currPage) ? 1 : -1
      item.style.marginTop = side * endPosition + 'vh'
    }
  }
}

function runScrollingAnimation (toDisplay, side) {
  if (scrolling) {
    return
  }
  scrolling = true

  document.getElementById(toDisplay).classList.remove('hidden-track')
  document.getElementById(toDisplay).classList.add('shuffling-in-track')

  setTimeout(function () {
    const elementsToDisplay = document.querySelector("#" + toDisplay).querySelectorAll(".scrollable")
    const elementsPreviouslyDisplayed = document.querySelector("#" + currPage).querySelectorAll(".scrollable")

    for (let item of elementsToDisplay) {
      item.classList.add('in-movement')
      item.style.marginTop = '0vh'
    }

    for (let item of elementsPreviouslyDisplayed) {
      item.classList.add('in-movement')
      const endPosition = item.classList.contains('odd')
        ? side * marginTop
        : -side * marginTop
      item.style.marginTop = endPosition + 'vh'
    }
  }, 100)

  setTimeout(function () {
    swapInPageTitle(toDisplay, true)
  }, 500)

  setTimeout(function () {
    for (let item of movable) {
      item.classList.remove('in-movement')
    }
    for (let item of categoryTitles) {
      item.classList.remove('in-movement')
    }
    currPage = toDisplay
    setPagePositions()
    scrolling = false
  }, 1700)
}

const scrollAnimation = page => {
  const side = pages.indexOf(page) > pages.indexOf(currPage) ? -1 : 1
  runScrollingAnimation(page, side)
}
