/************** 
 * DATA 
 * ************/
const skills = {
    "AI": {
        "AI Research Engineer": [
            {"technology": "Tensorflow Keras", "stars": 5, "projects": [
                {"title": "Empatic", "descriptions": ["The Empathic project focuses on Personalised Virtual Coaches to assist elderly people living independently at and around their home.", "This project is an European project with many different actors involved.", "The Virtual Coaches discuss with the elderly and need to understand their emotions in order to provide the best support.", "I work on R&D for emotion recognition on videos in this project. I indentified and retrieved public and proprietary datasets and built a new baseline from research papers."], "duration": "1 month", "other": "Python, Computer Vision, Deep Learning", "link": {"before": "Project home page: ", "href": "http://www.empathic-project.eu/"}},
                {"title": "Muscle Structure Analysis", "descriptions": ["In a partnership with INSEP (French National Sports Institut), I worked on analyzing muscle structure of high-level athletes to prevent injuries.", "I researched and implemented a new deep-learning model (AW-Net) to recognize muscle geometry on ultrasound images.", "This work is now used to detect muscle weaknesses and reduce INSEP athletes muscle strain before injury."], "duration": "1 year", "other": "Python, Computer Vision, Deep Learning", "link": {"before": "Published paper: ", "href": "https://dl.acm.org/doi/10.1145/3459930.3469531"}},
            ]},
            {"technology": "PyTorch", "stars": 4, "projects": [
                {"title": "Sprint Analysis", "descriptions": ["In a partnership with INSEP (French National Sports Institut), I studied high-level athletes sprint.", "I built a 3D Pose Estimation from videos deep-learning algorithm.", "This system identifies the athlete's sprint position and automatically extracts crucial metadata for them such as stride length and stride time."], "duration": "1 year", "other": "Python, Computer Vision, Deep Learning", "link": {"before": "Collaboration on the paper ", "href": "https://arxiv.org/abs/2101.02471"}},
            ]},
            {"technology": "Deep Learning Modelization", "stars": 5, "projects": [

            ]},
            {"technology": "Machine Learning Modelization", "stars": 4, "projects": [
                {"title": "Phytoplankton Classification", "descriptions": ["Many different types of phytoplankton exist. Depending on the type present in a sea area, the marine biodiversity will be different.", "I worked on classifying the sea areas into the different phytoplankton types with satellite data for my Master degree project."], "duration": "1 month", "other": "Python, Data Manipulation, Data Visualization"},
                {"title": "AutoML", "descriptions": ["I studied machine learning algorithms and developed a machine learning model generation software.", "Given logs, this system builds features, trains models and evaluate them before providing them back to the user for future use.", "Specifically, I improved the optimization system for log classification with techniques such as Bayes Search and built an unsupervised AutoML module in this system."], "duration": "6 months", "other": "Scikit-Learn, Python, Data Manipulation"},
            ]},
            {"technology": "MLOps", "stars": 4, "projects": [
                {"title": "AutoML", "descriptions": ["I studied machine learning algorithms and developed a machine learning model generation software.", "Given logs, this system builds features, trains models and evaluate them before providing them back to the user for future use.", "Specifically, I improved the optimization system for log classification with techniques such as Bayes Search and built an unsupervised AutoML module in this system."], "duration": "6 months", "other": "Scikit-Learn, Python, Data Manipulation"},
            ]}
        ],
        "Data Engineer": [
            {"technology": "Data Manipulation (with Numpy, Pandas, Scikit)", "stars": 4, "projects": [

            ]},
            {"technology": "Data Visualization (with Matplotlib, Seaborn, Streamlit)", "stars": 4, "projects": [

            ]},
            {"technology": "Data Scrapping", "stars": 4, "projects": [
                {"title": "TrackMyAssets", "descriptions": ["TrackMyAssets allows users to track their assets accross different platforms and evaluate their investments and returns.", "Assets tracked can be of different type : stock market, cryptocurrencies, fixed value assets and staked cryptocurrencies in decentralized exchange pools or farms."], "duration": "1 year", "other": "React, Node.js, Express.js, MySQL, Data Visualization", "link": {"before": "It is open-source on my GitHub: ", "href": "https://github.com/HugoMichard/TrackMyAssets"}},
            ]}
        ]
    },
    "Software Development": {
        "Frontend": [
            {"technology": "Javascript", "stars": 4, "projects": [
                {"title": "This Portfolio Website :)", "descriptions": ["This website was built using exclusively HTML, CSS and Javascript.", "The challenge was to build this without using any frameworks, libraries or compilation. All code is ran and interpreted directly by the browser.", "How good of a portfolio website can I make using only basic blocks and animations ??"], "duration": "2 months", "other": "HTML, CSS", "link": {"before": "The code is available on my GitHub: ", "href": "https://github.com/HugoMichard/PortfolioWebsite"}},
                {"title": "Development Pipeline Simulator", "descriptions": ["I built a simulator for ticket handling. The model of this simulation has multiple developers implementing the tickets, setting up environnements and finding issues in QA before fixing them.", "The goal is to obtain the best possible parameters for the number of environnements and QA pipelines depending on the number of developers.", "A Jira board is displayed live during the simulation with the state of the tickets and the work done by the developers."], "duration": "1 month", "other": "HTML, CSS, Webpack"},
                {"title": "Random Dice Simulator", "descriptions": ["I created a random dice simulation. Hundreds of thousands of dices are rolled iteratively and the user can test different betting strategy and study their outcomes on this huge pool of rolls.", "An interface allows the user to configure the experiment and define a betting strategy. For example, he can decide to double down every time he loses, or to stop betting once he reaches a certain threshold. The roll simulation is then ran instantly and the results are shown for further analysis."], "duration": "1 month", "other": "HTML, CSS, Webpack", "link": {"before": "The project interface is similar to DuckDice but the simulation I made has less restrictions:", "href": "https://duckdice.io/dice?mode=auto&gameMode=demo"}},
                {"title": "BlackBox Test Scenario Generator", "descriptions": ["I created in a highly secure environment a full package of testing tools.", "This package allows the user to easily generate and run numerous testing scenarios on a heavy Product Life Management platform"], "duration": "6 months", "other": "HTML, CSS, Selenium"},
            ]},
            {"technology": "React", "stars": 4, "projects": [
                {"title": "TrackMyAssets", "descriptions": ["TrackMyAssets allows users to track their assets accross different platforms and evaluate their investments and returns.", "Assets tracked can be of different type : stock market, cryptocurrencies, fixed value assets and staked cryptocurrencies in decentralized exchange pools or farms."], "duration": "1 year", "other": "Node.js, Express.js, MySQL, Data Scrapping, Data Visualization", "link": {"before": "It is open-source on my GitHub: ", "href": "https://github.com/HugoMichard/TrackMyAssets"}},
                {"title": "Airport Management", "descriptions": ["I worked for the DGAC (French Civil Aviation Authority) as a software engineer consultant on two platforms related to airport management.", "The first platform handles airport fees that airlines must pay depending on their traffic. The fees are collected directly on the platform before being redistributed to the different airports depending on their financial states.", "The second platform manages airport accesses. Requests to access part of the airport can be done on the platform, and a badge is issued after approval. Badges also use the platform database to validate authenticity."], "duration": "8 months", "other": "Java, PostgreSQL"},
                {"title": "Drone Declaration", "descriptions": ["I worked for the DGAC (French Civil Aviation Authority) as a software engineer consultant on a drone declaration platform.", "Drone owners must register the drones they possess and declare their flight schedule on this platform."], "duration": "8 months", "other": "Java, PostgreSQL", "link": {"before": "The platform can be accessed here ", "href": "https://alphatango.aviation-civile.gouv.fr/login.jsp"}}
            ]},
            {"technology": "Vue", "stars": 4, "projects": [
                {"title": "Parrot", "descriptions": ["Parrot is an anomaly detection module on Relational Databases.", "An interface allows users to setup their configurations such as their database credentials, their prefered alert methods (slack or email) and parameters defining abnormality in their data.", "When abnormal data is received in their databases, an alert is sent so they may detect it and fix it quickly !"], "duration": "5 months", "other": "Django, PostgreSQL"},
            ]},
        ],
        "Backend": [
            {"technology": "Node.js Express.js", "stars": 4, "projects": [
                {"title": "TrackMyAssets", "descriptions": ["TrackMyAssets allows users to track their assets accross different platforms and evaluate their investments and returns.", "Assets tracked can be of different type : stock market, cryptocurrencies, fixed value assets and staked cryptocurrencies in decentralized exchange pools or farms."], "duration": "1 year", "other": "React, MySQL, Data Scrapping, Data Visualization", "link": {"before": "It is open-source on my GitHub: ", "href": "https://github.com/HugoMichard/TrackMyAssets"}}
            ]},
            {"technology": "Django", "stars": 4, "projects": [
                {"title": "Parrot", "descriptions": ["Parrot is an anomaly detection module on Relational Databases.", "An interface allows users to setup their configurations such as their database credentials, their prefered alert methods (slack or email) and parameters defining abnormality in their data.", "When abnormal data is received in their databases, an alert is sent so they may detect it and fix it quickly !"], "duration": "5 months", "other": "Vue, PostgreSQL"},
            ]},
            {"technology": "Laravel", "stars": 4, "projects": [
                {"title": "Autonomous Videobooth", "descriptions": ["I created an autonomous recording and streaming videobooth for MemoRecords, a french audiovisual start-up.", "The videobooth starts automatically without human interaction and records the user while displaying surveys.", "With the videobooth, I developed a full-stack management software to handle the videos and simplify the video postprocessing."], "duration": "6 months", "other": "MySQL, Data Management, Data Visualization", "link": {"before": "Videos recorded by the videobooth are on the website ", "href": "https://memorec.fr/"}},
            ]},
            {"technology": "SQL (with MySQL, PostgreSQL)", "stars": 4, "projects": [
                {"title": "TrackMyAssets", "descriptions": ["TrackMyAssets allows users to track their assets accross different platforms and evaluate their investments and returns.", "Assets tracked can be of different type : stock market, cryptocurrencies, fixed value assets and staked cryptocurrencies in decentralized exchange pools or farms."], "duration": "1 year", "other": "React, Node.js, Express.js, Data Scrapping, Data Visualization", "link": {"before": "It is open-source on my GitHub: ", "href": "https://github.com/HugoMichard/TrackMyAssets"}},
                {"title": "Autonomous Videobooth", "descriptions": ["I created an autonomous recording and streaming videobooth for MemoRecords, a french audiovisual start-up.", "The videobooth starts automatically without human interaction and records the user while displaying surveys.", "With the videobooth, I developed a full-stack management software to handle the videos and simplify the video postprocessing."], "duration": "6 months", "other": "MySQL, Data Management, Data Visualization", "link": {"before": "Videos recorded by the videobooth are on the website ", "href": "https://memorec.fr/"}},
                {"title": "Parrot", "descriptions": ["Parrot is an anomaly detection module on Relational Databases.", "An interface allows users to setup their configurations such as their database credentials, their prefered alert methods (slack or email) and parameters defining abnormality in their data.", "When abnormal data is received in their databases, an alert is sent so they may detect it and fix it quickly !"], "duration": "5 months", "other": "Vue, Django"},
            ]}
        ]
    }
}

const universe = document.getElementsByClassName("universe")[0]
const navigationTitle = document.getElementById("skill-navigation-title")
const navigationBackButton = document.getElementById("skill-navigation-back")
navigationTitle.textContent = "Click on a Galaxy to explore"
const planetSkins = ['earth', 'uranus', 'mars', 'neptune', 'jupiter', 'planet1', 'planet2', 'planet3', 'planet4']
const planetPositions = ['earth', 'mercury', 'uranus', 'venus', 'mars', 'neptune', 'jupiter']
const moonTypes = ['type-1', 'type-2', 'type-3']
const moonFrequency = 20;
const ringFrequency = 20;
let navigationRegion = "universe";
let onGalaxy = undefined;
let onSolarSystem = undefined;
let onPlanet = undefined;
let visitingPlanetOrbitSize = undefined

function initializeNavigation() {
    navigationRegion = "universe";
    onGalaxy = undefined;
    onSolarSystem = undefined;
    onPlanet = undefined;
    visitingPlanetOrbitSize = undefined
}

/*********************
 * Universe Generation
 * ******************/
function getRandomFloatBetweenMinAndMax(min, max) {
    return Math.random() * (max - min) + min
}

function getRandomIntegerBetweenMinAndMax(min, max) {
    return Math.round(getRandomFloatBetweenMinAndMax(min, max))
}

function generateMoon(planetPos, planetSize){
    const moonType = moonTypes[getRandomIntegerBetweenMinAndMax(0, moonTypes.length - 1)]
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
    m.classList.add("moon-" + moonType)

    pos.appendChild(m);
    moon.appendChild(pos);
    planetPos.appendChild(moon);
}

function generateRing(planet) {
    const ring = document.createElement("div")
    ring.classList.add("ring")
    planet.appendChild(ring);
}

function createPlanetCards(planetData) {
    const cards = document.createElement("div")
    cards.classList.add("planet-cards")

    for(const project of planetData["projects"]) {
        const card = document.createElement("div")
        card.classList.add("planet-card")

        const title = document.createElement("h1")
        title.textContent = project["title"]
        card.appendChild(title)

        const duration = document.createElement("h2")
        duration.textContent = project["duration"]
        card.appendChild(duration)

        for(const description of project["descriptions"]) {
            const p = document.createElement("p")    
            p.textContent = description
            card.appendChild(p)
        }

        if (project["link"] !== undefined) {
            const link = document.createElement("p")
            link.textContent = project["link"]["before"]
            const a = document.createElement("a")
            a.href = project["link"]["href"]
            a.textContent = project["link"]["href"]
            link.appendChild(a)
            card.appendChild(link)
        }

        const otherTitle = document.createElement("p")
        otherTitle.classList.add("other-skills")
        otherTitle.textContent = "Other skills in this project: "
        card.appendChild(otherTitle)

        const other = document.createElement("p")
        other.textContent = project["other"]
        card.appendChild(other)

        cards.appendChild(card)
    }

    universe.appendChild(cards)
    cards.animate(animations.fadeIn.animation, {duration: animations.zoomIntoPlanet.duration, iterations: 1})
}

function generatePlanet(solarSystem, planetData, distanceToCenter) {
    const planetSkin = planetSkins[getRandomIntegerBetweenMinAndMax(0, planetSkins.length - 1)]
    const planetPosition = planetPositions[getRandomIntegerBetweenMinAndMax(0, planetPositions.length - 1)]

    const planetSize = getRandomFloatBetweenMinAndMax(1, 8);

    const hasMoon = getRandomIntegerBetweenMinAndMax(0, 100) <= moonFrequency;
    const hasRing = !hasMoon && getRandomIntegerBetweenMinAndMax(0, 100) <= ringFrequency
    let totalDistanceToCenter = distanceToCenter * 2 + planetSize + 1;
    if (hasRing) totalDistanceToCenter += 15;
    if (hasMoon) totalDistanceToCenter += 15;

    const orbitSize = getRandomFloatBetweenMinAndMax(totalDistanceToCenter, totalDistanceToCenter + 3);

    const planetContainer = document.createElement("div")
    planetContainer.classList.add(planetPosition)
    planetContainer.classList.add(planetSkin + '-skin')
    planetContainer.classList.add("orbit")
    planetContainer.classList.add("planet-container")
    planetContainer.style.setProperty("--animation-duration", 10* orbitSize / 5 + "s")
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

    planet.addEventListener("click", function() {navigateToPlanet(solarSystem, planetContainer, planetData)})

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

function generateSun(solarSystem, solarSystemName) {
    const sun = document.createElement("div")
    sun.classList.add("sun")
    sun.classList.add("informations-on-planet")
    const sunSize = getRandomFloatBetweenMinAndMax(4, 15);
    sun.style.setProperty("--planet-size", sunSize + "em")

    const dl = document.createElement("dl")
    dl.classList.add("infos")

    const dt = document.createElement("dt")
    dt.textContent = solarSystemName + " Solar System"
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
    solarSystem.classList.add("reduced-solar-system")
    solarSystem.classList.add("reduced-solar-system-transform")
    let distanceToCenter = generateSun(solarSystem, solarSystemName);

    for(const planetData of skills[galaxyName][solarSystemName]) {
        distanceToCenter = generatePlanet(solarSystem, planetData, distanceToCenter);
    }

    solarSystem.addEventListener("click", function(){navigateToSystem(solarSystem)})
    galaxy.appendChild(solarSystem);
}

function generateGalaxy(galaxyName) {
    const galaxy = document.createElement("div")
    galaxy.classList.add("galaxy")
    galaxy.classList.add("view-3D")
    galaxy.classList.add("reduced-galaxy")
    galaxy.classList.add("reduced-galaxy-transform")
    galaxy.id = "galaxy-" + galaxyName

    for(const solarSystemName of Object.keys(skills[galaxyName])) {
        generateSolarSystem(galaxy, galaxyName, solarSystemName)
    }

    universe.appendChild(galaxy)
}

function generateGalaxyBackgrounds() {
    const clickerContainer = document.createElement("div")
    clickerContainer.classList.add("galaxy-clicker-container")

    for(const galaxyName of Object.keys(skills)) {
        const galaxyBackground = document.createElement("canvas")
        galaxyBackground.classList.add("galaxy-background")
        galaxyBackground.animate(animations.fadeIn.animation, {duration:300, iterations: 1})

        const title = document.createElement("h2")
        title.classList.add("galaxy-title")
        title.textContent = galaxyName + ' Galaxy'
        title.animate(animations.fadeIn.animation, {duration:300, iterations: 1})

        const clicker = document.createElement("div")
        clicker.classList.add("galaxy-clicker")
        clicker.addEventListener("click", function() {navigateToGalaxy(galaxyName)})
        clickerContainer.append(clicker)

        universe.appendChild(title)
        universe.appendChild(galaxyBackground)
    }
    universe.appendChild(clickerContainer)
    navigationBackButton.classList.add("hidden")
}

function removeGalaxyBackgrounds() {
    for(const galaxyBackground of document.getElementsByClassName("galaxy-background")) {
        galaxyBackground.animate(animations.fadeIn.animation.slice().reverse(), {duration:300, iterations: 1})
        setTimeout(function() {galaxyBackground.remove()}, 280)
    }
    for(const title of document.getElementsByClassName("galaxy-title")) {
        title.animate(animations.fadeIn.animation.slice().reverse(), {duration:300, iterations: 1})
        setTimeout(function() {title.remove()}, 280)
    }
    document.getElementsByClassName("galaxy-clicker-container")[0].remove()
    navigationBackButton.classList.remove("hidden")
}

function generateSkillUniverse() {
    for(const galaxyName of Object.keys(skills)) {
        generateGalaxy(galaxyName)
    }
    generateGalaxyBackgrounds()
}

function removeSkillUniverse() {
    universe.replaceChildren()
    initializeNavigation()
}

/********************
 * Navigation System
 * ******************/

const animations = {
    zoomIntoPlanet: {
        "animation": [
            {transform: "scale(1) translateY(0em)"},
            {transform: "scale(10) translateY(1em)"}
        ], "duration": 1000
    },
    liftSolarSystem: {
        "animation": [
            {transform: "translateY(0) rotateX(75deg)"},
            {transform: "translateY(-15em) rotateX(75deg)"}
        ], "duration": 1000
    },
    fadeIn: {
        "animation": [
            {opacity: 0},
            {opacity: 1}
        ], "duration": 1200
    },
    exitSolarSystem: {
        "animation": [
            {transform: "scale(1) rotateX(75deg)", height: "100%"},
            {transform: "scale(0.5) rotateX(75deg)", height: "50%"},
        ], "duration": 1000
    },
    makeSolarSystemDisappear: {
        "animation": [
            {transform: "scale(0.5) rotateX(75deg)"},
            {transform: "scale(0.0001) rotateX(75deg)"}, 
        ], "duration": 1000
    },
    exitGalaxy: {
        "animation": {
            "AI": [
                {transform: "scale(1)", left: "0%", width: "100%"},
                {transform: "scale(0.1)", left: "25%", width: "0%"}
            ],
            "Software Development": [
                {transform: "scale(1)", left: "0%", width: "100%"},
                {transform: "scale(0.1)", left: "75%", width: "0%"}
            ]
        }, "duration": 1000
    }
}

function navigateToPlanet(solarSystem, planetContainer, planetData) {
    if (navigationRegion == "galaxy") {
        navigateToSystem(solarSystem);
        return;
    }
    if (navigationRegion == "planet") {
        navigateOutOfPlanet();
        return;
    }

    // Zoom into planet and drag solar system up
    visitingPlanetOrbitSize = planetContainer.style.getPropertyValue("--orbit-size").slice(0,-2);
    planetContainer.style.setProperty("--orbit-size", "0em")
    planetContainer.style.setProperty("--orbit-margin", "0em")
    const planet = planetContainer.getElementsByClassName("planet")[0]
    planet.classList.remove("informations-on-planet")
    const moon = planetContainer.getElementsByClassName("moon");
    if (moon.length > 0) {
        moon[0].classList.add("hidden")
    }
    planet.animate(animations.zoomIntoPlanet.animation, {duration: animations.zoomIntoPlanet.duration, iterations: 1})
    solarSystem.animate(animations.liftSolarSystem.animation, {duration: animations.liftSolarSystem.duration, iterations: 1})
    navigationTitle.animate(animations.fadeIn.animation.slice().reverse(), {duration: 200, iterations: 1})
    planet.classList.add("zoomed-in-planet")
    solarSystem.classList.add("lifted-solar-system")
    // display planet cards
    createPlanetCards(planetData);
    setTimeout(function() {
        navigationTitle.classList.add("hidden")
    }, 200)

    onPlanet = planetContainer;
    onSolarSystem = solarSystem;
    navigationRegion = "planet";
}

function navigateOutOfPlanet() {
    const cards = document.getElementsByClassName("planet-cards")[0]
    const planet = onPlanet.getElementsByClassName("planet")[0]
    const moon = onPlanet.getElementsByClassName("moon");
    if (moon.length > 0) {
        moon[0].classList.remove("hidden")
    }
    planet.classList.remove("zoomed-in-planet")
    navigationTitle.classList.remove("hidden")
    onPlanet.style.setProperty("--orbit-size", visitingPlanetOrbitSize + "em")
    onPlanet.style.setProperty("--orbit-margin", - visitingPlanetOrbitSize / 2 + "em")
    planet.animate(animations.zoomIntoPlanet.animation.slice().reverse(), {duration: animations.zoomIntoPlanet.duration, iterations: 1})
    cards.animate(animations.fadeIn.animation.slice().reverse(), {duration: animations.fadeIn.duration, iterations: 1})
    navigationTitle.animate(animations.fadeIn.animation, {duration: animations.fadeIn.duration, iterations: 1})
    onSolarSystem.classList.remove("lifted-solar-system")
    onSolarSystem.animate(animations.liftSolarSystem.animation.slice().reverse(), {duration: animations.liftSolarSystem.duration, iterations: 1})

    setTimeout(function(){
        planet.classList.add("informations-on-planet")
        cards.remove()
    }, 1000)
    navigationRegion = "system";
}

function navigateToSystem(solarSystem) {
    if (navigationRegion != "galaxy") return;

    for(const system of onGalaxy.getElementsByClassName("solar-system")) {
        system.classList.remove("clickable")
    }
    /* Reduce all other solar systems of the galaxy */
    for(const system of onGalaxy.getElementsByClassName("solar-system")) {
        if(system != solarSystem) {
            system.classList.remove("reduced-solar-system-transform")
            system.animate(animations.makeSolarSystemDisappear.animation, {duration: animations.makeSolarSystemDisappear.duration, iterations: 1})
            system.classList.add("not-selected-solar-system")
        }
    }

    /* Increase the size of the solar system */
    solarSystem.animate(animations.exitSolarSystem.animation.slice().reverse(), {duration: animations.exitSolarSystem.duration, iterations: 1})
    solarSystem.classList.remove("reduced-solar-system")
    solarSystem.classList.remove("reduced-solar-system-transform")
    solarSystem.classList.add("selected-solar-system")
    onSolarSystem = solarSystem
    navigationTitle.textContent = "Pick a Planet to visit"

    navigationRegion = "system";
}

function navigateOutOfSystem() {
    if (navigationRegion != "system") return;

    onSolarSystem.classList.remove("selected-solar-system")

    /* Increase all other solar systems of the galaxy */
    for(const system of onGalaxy.getElementsByClassName("solar-system")) {
        if(system != onSolarSystem) {
            system.animate(animations.makeSolarSystemDisappear.animation.slice().reverse(), {duration: animations.makeSolarSystemDisappear.duration, iterations: 1})
            system.classList.remove("not-selected-solar-system")
        }
    }
    for(const system of onGalaxy.getElementsByClassName("solar-system")) {
        system.classList.add("clickable")
        setTimeout(function() {system.classList.add("reduced-solar-system-transform")}, 1000)
    }

    /* Reduce the size of the solar system */
    onSolarSystem.animate(animations.exitSolarSystem.animation, {duration: animations.exitSolarSystem.duration, iterations: 1})
    onSolarSystem.classList.add("reduced-solar-system")
    navigationTitle.textContent = "Choose a Solar System to discover"
    navigationRegion = "galaxy";
}

function navigateToGalaxy(galaxyName) {
    if (navigationRegion != "universe") return;

    const galaxy = document.getElementById("galaxy-" + galaxyName)
    removeGalaxyBackgrounds()

    setTimeout(function() {
        galaxy.animate(animations.exitGalaxy.animation[galaxyName].slice().reverse(), {duration: animations.exitGalaxy.duration, iterations: 1})
        setTimeout(function(){
            galaxy.classList.remove("reduced-galaxy-transform");
        }, 1000)
        galaxy.classList.remove("reduced-galaxy")
        onGalaxy = galaxy;
        navigationTitle.textContent = "Choose a Solar System to discover"
        navigationRegion = "galaxy";    
    }, 510)
}

function navigateOutOfGalaxy() {
    if (navigationRegion != "galaxy") return;

    const galaxyName = onGalaxy.id.replace('galaxy-', '')
    
    onGalaxy.animate(animations.exitGalaxy.animation[galaxyName], {duration: animations.exitGalaxy.duration, iterations: 1})
    setTimeout(function(){
        onGalaxy.classList.add("reduced-galaxy-transform");
    }, 1000)
    setTimeout(function(){
        generateGalaxyBackgrounds()
    }, 1200)
    onGalaxy.classList.add("reduced-galaxy");

    navigationTitle.textContent = "Click on a Galaxy to explore"
    navigationRegion = "universe"
}

function navigateBack() {
    if(navigationRegion == "planet") {navigateOutOfPlanet(); return;}
    if(navigationRegion == "system") {navigateOutOfSystem(); return;}
    if(navigationRegion == "galaxy") {navigateOutOfGalaxy(); return;}
}

navigationBackButton.addEventListener("click", navigateBack);
