function getRandomFloatBetweenMinAndMax(min, max) {
    return Math.random() * (max - min) + min
}

function getRandomIntegerBetweenMinAndMax(min, max) {
    return Math.round(getRandomFloatBetweenMinAndMax(min, max))
}


function generatePlanet(galaxy) {
    const planet = document.createElement("div")
    planet.classList.add("planet")
    const maxBlur = getRandomFloatBetweenMinAndMax(3, 7);
    const minBlur = getRandomFloatBetweenMinAndMax(0, blur);
    const blurSpeed = getRandomFloatBetweenMinAndMax(10, 30);
    const size = getRandomFloatBetweenMinAndMax(2, 15);
    const positionTop = getRandomFloatBetweenMinAndMax(-15, 15);
    const positionLeft = getRandomFloatBetweenMinAndMax(-15, 15);
    planet.style.setProperty("--size", size + "px")
    planet.style.setProperty("--left", 50 + positionLeft + "%")
    planet.style.setProperty("--top", 50 + positionTop + "%")
    planet.style.setProperty("--blur", maxBlur + "px")
    planet.style.setProperty("--min-blur", minBlur + "px")
    planet.style.setProperty("--blur-speed", blurSpeed + "s")

    galaxy.appendChild(planet);
}

function generateSkillWorld() {
    for(const galaxy of document.getElementsByClassName("galaxy")) {
        let nb_of_random_planets = getRandomIntegerBetweenMinAndMax(30, 100);
        for(const i of Array(nb_of_random_planets).keys()) {
            generatePlanet(galaxy)
        }
    }
}

generateSkillWorld();