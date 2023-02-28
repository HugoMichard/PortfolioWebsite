const skills = {
    "AI": {
        "AI Research Engineer": [
            {"technology": "Tensorflow Keras", "stars": 5, "projects": ["coucou", "test"]},
            {"technology": "Pytorch", "stars": 4, "projects": [""]},
            {"technology": "Deep Learning Modelization", "stars": 5, "projects": [""]},
            {"technology": "Machine Learning Modelization", "stars": 4, "projects": [""]},
            {"technology": "MLOps", "stars": 4, "projects": [""]}
        ],
        "Data Engineer": [
            {"technology": "Data Manipulation (with Numpy, Pandas, Scikit)", "stars": 4, "projects": [""]},
            {"technology": "Data Visualization (with Matplotlib, Seaborn, Streamlit)", "stars": 4, "projects": [""]},
            {"technology": "Data Scrapping", "stars": 4, "projects": [""]}
        ]
    },
    "Software Development": [
        {
            "Frontend": [
                {"technology": "Pure Javascript", "stars": 4, "projects": [""]},
                {"technology": "React", "stars": 4, "projects": [""]},
                {"technology": "Vue", "stars": 4, "projects": [""]},
            ],
            "Backend": [
                {"technology": "Node.js / Express.js", "stars": 4, "projects": [""]},
                {"technology": "Django", "stars": 4, "projects": [""]},
                {"technology": "Laravel", "stars": 4, "projects": [""]},
                {"technology": "SQL (with MySQL, PostgreSQL)", "stars": 4, "projects": [""]}
            ]
        }
    ]
}


const planetTypes = ['earth', 'mercury', 'uranus', 'venus', 'mars', 'neptune', 'jupiter']
const moonFrequency = 20;
const ringFrequency = 20;

function getRandomFloatBetweenMinAndMax(min, max) {
    return Math.random() * (max - min) + min
}

function getRandomIntegerBetweenMinAndMax(min, max) {
    return Math.round(getRandomFloatBetweenMinAndMax(min, max))
}


function generateRandomPlanet(galaxy) {
    const planet = document.createElement("div")
    planet.classList.add("planet")
    planet.classList.add("blurry-planet")
    const maxBlur = getRandomFloatBetweenMinAndMax(3, 7);
    const minBlur = getRandomFloatBetweenMinAndMax(0, maxBlur);
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

function generateGalaxy(galaxy) {
    let nb_of_random_planets = getRandomIntegerBetweenMinAndMax(30, 100);
    for(const i of Array(nb_of_random_planets).keys()) {
        generateRandomPlanet(galaxy)
    }
}

function generateMoon(planetPos, planetSize){
    const moonSpeed = getRandomFloatBetweenMinAndMax(1, 3)
    const moonSize = getRandomFloatBetweenMinAndMax(1, 4)
    const orbitSize = getRandomFloatBetweenMinAndMax(planetSize + moonSize + 2, planetSize + moonSize + 5)

    const moon = document.createElement("div")
    moon.classList.add("orbit")
    moon.classList.add("moon-orbit")
    moon.style.setProperty("--animation-duration", moonSpeed + "s")
    moon.style.setProperty("--planet-size", moonSize + "em")
    moon.style.setProperty("--orbit-size", orbitSize + "em")
    moon.style.setProperty("--orbit-margin", - orbitSize / 2 + "em")

    const pos = document.createElement("div")
    pos.classList.add("pos")
    const m = document.createElement("div")
    m.classList.add("moon")

    pos.appendChild(m);
    moon.appendChild(pos);
    planetPos.appendChild(moon);
}

function generateRing(planet) {
    const ring = document.createElement("div")
    ring.classList.add("ring")
    planet.appendChild(ring);
}

function generatePlanet(solarSystem, planetData, distanceToCenter) {
    const planetType = planetTypes[getRandomIntegerBetweenMinAndMax(0, planetTypes.length - 1)]
    const planetSize = getRandomFloatBetweenMinAndMax(1, 8);

    const hasMoon = getRandomIntegerBetweenMinAndMax(0, 100) <= moonFrequency;
    const hasRing = !hasMoon && getRandomIntegerBetweenMinAndMax(0, 100) <= ringFrequency
    let totalDistanceToCenter = distanceToCenter * 2 + planetSize + 1;
    if (hasRing) totalDistanceToCenter += 15;
    if (hasMoon) totalDistanceToCenter += 15;

    const orbitSize = getRandomFloatBetweenMinAndMax(totalDistanceToCenter, totalDistanceToCenter + 3);

    const planetContainer = document.createElement("div")
    planetContainer.classList.add(planetType)
    planetContainer.classList.add("orbit")
    planetContainer.style.setProperty("--animation-duration", orbitSize / 5 + "s")
    planetContainer.style.setProperty("--orbit-size", orbitSize + "em")
    planetContainer.style.setProperty("--orbit-margin", - orbitSize / 2 + "em")
    planetContainer.style.setProperty("--z-index", "10")
    planetContainer.style.setProperty("--planet-size", planetSize + "em")

    const pos = document.createElement("div")
    pos.classList.add("pos")
    if(hasMoon) {
        generateMoon(pos, planetSize);
    }

    const planet = document.createElement("div")
    planet.classList.add("planet")
    planet.classList.add("informations-on-planet")
    planet.style.setProperty("--nb-projects", `"${planetData["projects"].length}"`)
    if(hasRing) {
        generateRing(planet)
        totalDistanceToCenter += 2
    }

    const dl = document.createElement("dl")
    dl.classList.add("infos")

    const dt = document.createElement("dt")
    dt.textContent = planetData["technology"]
    dl.appendChild(dt);
    const dd = document.createElement("dd")
    const s = document.createElement("span")

    dd.classList.add(`stars-${planetData['stars']}-image`)

    dd.appendChild(s);
    dl.appendChild(dd);
    planet.appendChild(dl);
    pos.appendChild(planet);
    planetContainer.appendChild(pos);
    solarSystem.appendChild(planetContainer);

    if (hasRing) totalDistanceToCenter += 15;
    if (hasMoon) totalDistanceToCenter += 15;

    return totalDistanceToCenter / 2 
}

function generateSun(solarSystem) {
    const sun = document.createElement("div")
    sun.classList.add("sun")
    const sunSize = getRandomFloatBetweenMinAndMax(4, 15);
    sun.style.setProperty("--planet-size", sunSize + "em")

    const dl = document.createElement("dl")
    dl.classList.add("infos")

    const dt = document.createElement("dt")
    dt.textContent = 'Sun'
    dl.appendChild(dt);
    const dd = document.createElement("dd")
    const s = document.createElement("span")

    dd.appendChild(s);
    dl.appendChild(dd);
    sun.appendChild(dl);
    solarSystem.appendChild(sun);
    return sunSize / 2
}

function generateSolarSystem(galaxy, galaxyName, solarSystemName) {
    const solarSystem = document.createElement("div")
    solarSystem.classList.add("solar-system")
    let distanceToCenter = generateSun(solarSystem);

    for(const planetData of skills[galaxyName][solarSystemName]) {
        //generateGalaxy(galaxy)
        distanceToCenter = generatePlanet(solarSystem, planetData, distanceToCenter);
    }

    galaxy.appendChild(solarSystem);
}


function generateSkillWorld() {
    for(const galaxy of document.getElementsByClassName("galaxy")) {
        //generateGalaxy(galaxy)
        generateSolarSystem(galaxy, "AI", "AI Research Engineer")
    }
}

generateSkillWorld();