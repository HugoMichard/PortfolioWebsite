// Creating shooting stars
const shootingStars = document.getElementsByClassName("shooting-stars")[0]

function getRandomFloatBetweenMinAndMax(min, max) {
    return Math.random() * (max - min) + min
}

function removeShootingStar(data) {
    data[0].remove()
}

function addShootingStar() {
    const shootingStar = document.createElement("div")
    shootingStar.classList.add("shooting-star")
    shootingStar.style.setProperty("--shooting-star-tail-length", getRandomFloatBetweenMinAndMax(5, 8) + "em")
    shootingStar.style.setProperty("--top-offset", getRandomFloatBetweenMinAndMax(0, 100) + "vh")
    const fallDuration = getRandomFloatBetweenMinAndMax(6, 12)
    shootingStar.style.setProperty("--fall-duration", fallDuration + "s")
    shootingStar.style.setProperty("--fall-delay", "0s")
    shootingStars.appendChild(shootingStar);
    setTimeout(removeShootingStar, fallDuration * 1000, [shootingStar]);
    setTimeout(addShootingStar, getRandomFloatBetweenMinAndMax(5000, 15000));
}

setTimeout(addShootingStar, getRandomFloatBetweenMinAndMax(3000, 5000))

/* Download Resume */
document.getElementById('download-button').addEventListener("click", function() {document.getElementById('download').click()})

/* Block access to mobile devices */
function blockMobile() {
    if (window.innerHeight < 500 || window.innerWidth < 800) {
        document.getElementById('block-mobile').classList.remove('hidden')
    } else {
        document.getElementById('block-mobile').classList.add('hidden')
    }
}
window.addEventListener('resize', blockMobile);
blockMobile()
