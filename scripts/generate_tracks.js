const data = {
    "work": [
        {
            "img": "images/experience/ceabomb.jpg",
            "company": "CEA",
            "logo": "images/experience/logo-cea.png",
            "title": "Software Engineer Intern",
            "time": "September 2016 - December 2016",
            "description": "The CEA manages the French Nuclear Defense. I created in this highly secure environment a full package of testing tools with javascript",
            "achievements": [
                "Conception and development of a script generating web application",
                "Setting up a web robot to test a heavy web user application",
                "Statistic reporting of the application test results reliability"
            ],
            "skills": ["Quality Assurance", "Test Automation", "Selenium", "Software Development", "JavaScript"]
        },
        {
            "img": "images/experience/memo.jpg",
            "company": "MemoRecords",
            "logo": "images/experience/logo-memo.jpg",
            "title": "Full-stack Developer Intern",
            "time": "January 2018 - July 2018",
            "description": "MemoRecords is a french audiovisual start-up creating a new type of videobooth for large companies. I did a 6-month internship in this company",
            "achievements": [
                "Achieved an autonomous recording and streaming videobooth",
                "Full-stack development of the management software"
                
            ],
            "skills": ["Full-Stack Development", "PHP", "Laravel", "JavaScript", "MySQL"]
        },
        {
            "img": "images/experience/telecom.png",
            "company": "Telecom SudParis",
            "logo": "images/experience/logo-tsp.jpg",
            "title": "Deep Learning Research Intern",
            "time": "March 2019 - April 2019",
            "description": "One-month research project on emotion recognition from videos for the european project Empatic",
            "achievements": [
                "Implementation of Deep Learning networks (CNN, LSTM) for emotion recognition",
                "Built a data manipulation pipeline with Computer Vision techniques (face detection, facial landmarks detection, face normalization)"
            ],
            "skills": ["Deep Learning", "Computer Vision", "Keras / Tensorflow", "Recurrent Neural Networks", "Convolutional Neural Networks"]
        },
        {
            "img": "images/experience/recruit.jpg",
            "company": "Recruit Communications",
            "logo": "images/experience/logo-recruit.jpeg",
            "title": "Machine Learning Engineer Intern",
            "time": "May 2019 - September 2019",
            "description": "Recruit Communications is a Japanese web marketing company building recruiting solutions for large companies. I went to Japan and developed a machine learning model generation software. I also worked on a Demand-Side Platform (real-time advertisement bidding)",
            "achievements": [
                "Designed a machine learning optimization system",
                "Improved an auto-ML product by adding unsupervised methods to the solution"
            ],
            "skills": ["Machine Learning", "Automated Machine Learning (AutoML)", "Scala", "Python"]
        },
        {
            "img": "images/experience/klee.jpg",
            "company": "KLEE Group",
            "logo": "images/experience/logo-klee.png",
            "title": "Software Engineer",
            "time": "January 2020 - August 2020",
            "description": "Klee Group is a consulting company developing digital solutions. I worked for the DGAC (French Civil Aviation Authority) as a software engineer consultant on different projects to manage airport fees, airport accesses and drone declarations",
            "achievements": [
                "Designed a machine learning optimization system",
                "Improved an auto-ML product by adding unsupervised methods to the solution"
            ],
            "skills": ["Software Development", "React.js", "Java", "PostgreSQL"]
        },
        {
            "img": "images/experience/cea2.jpeg",
            "company": "CEA",
            "logo": "images/experience/logo-cea.png",
            "title": "Computer Vision Research Engineer",
            "time": "September 2020 - November 2021",
            "description": "In a partnership with INSEP (French National Sports Institut), I worked on the research and development of computer vision solutions for high-level athletes",
            "achievements": [
                "Conceived and developed a software to automatically analyze ultrasound images of muscles to prevent injuries",
                "Researched and created a solution to analyze the 3D posture of sprint athletes and improve their sprint position",
                "Published a paper on my work - https://dl.acm.org/doi/10.1145/3459930.3469531"
            ],
            "skills": ["Deep Learning", "Computer Vision", "Tensorflow", "PyTorch", "Python"]
        },
        {
            "img": "images/experience/harfanglab.jpg",
            "company": "HarfangLab",
            "logo": "images/experience/logo-harfanglab.jpg",
            "title": "Artificial Intelligence Engineer",
            "time": "November 2021 - Present",
            "description": "",
            "achievements": [],
            "skills": ["Machine Learning", "Deep Learning", "Computer Vision", "Tensorflow", "Python", "MLOps"]
        },
    ],
    "education": [
        {
            "img": "images/education/isep.jpg",
            "company": "ISEP",
            "logo": "images/education/logo-isep.png",
            "title": "Engineering Diploma in Computer Science",
            "time": "September 2015 - September 2018",
            "description": "Isep is ranked number 2 French engineering school in digital technologies according to the Usine Digital of 2016. I majored in software development and specialized in cybersecurity and Big Data",
            "achievements": ["Majored in Software Development", "Specialized in Cybersecurity and Big Data"],
            "skills": ["Software Development", "Web Development", "Javascript", "PHP", "Python", "Java", "SQL"]
        },
        {
            "img": "images/education/inha.jpg",
            "company": "INHA",
            "logo": "images/education/logo-inha.png",
            "title": "Exchange student in Computer Science",
            "time": "August 2017 - December 2017",
            "description": "I spent 6 months as an exchange student in South Korea studying computer science in INHA",
            "achievements": ["Majored in Software Development", "Specialized in Database Design"],
            "skills": ["Software Development", "SQL", "Python", "Java"]
        },
        {
            "img": "images/education/tried.jpg",
            "company": "TRIED",
            "logo": "images/education/logo-parissaclay.png",
            "title": "Specialized Master Degree in AI",
            "time": "September 2018 - September 2019",
            "description": "TRIED (Information Processing and Data Exploitation) is a machine learning specialized master. I studied in this master with the research programme",
            "achievements": ["Majored in Data Science", "Specialized in Deep Learning", "Worked as a research intern in a lab"],
            "skills": ["Data Science", "Machine Learning", "Deep Learning", "Python", "Keras / Tensorflow"]
        },
    ]
}

let counter = 0
for(let d of data.work) {
    generateNode(document.getElementById("work").querySelector(".image-track"), d)
}

counter = 0
for(let d of data.education) {
    generateNode(document.getElementById("education").querySelector(".image-track"), d)
}

function generateNode(track, d) {
    const node = document.createElement("div")
    node.classList.add("scrollable")
    if(counter % 2 == 0) {
        node.classList.add("odd")
    }
    generateTime(node, d)
    generateImage(node, d)
    generateShortTitle(node, d)
    generateDetails(node, d)
    track.appendChild(node)
    counter++
}

function generateImage(node, d) {
    const img = document.createElement("img")
    img.classList.add("image")
    img.setAttribute("src", d.img)
    img.setAttribute("draggable", false)
    node.appendChild(img)
}

function generateTime(node, d) {
    const time = document.createElement("h3")
    time.textContent = d.time
    node.appendChild(time)
}

function generateShortTitle(node, d) {
    const title = document.createElement("h2")
    title.textContent = d.company
    node.appendChild(title)
}

function generateDetails(node, d) {
    const details = document.createElement("div")
    details.classList.add("details")
    const detailsHeader = document.createElement("div")
    const title = document.createElement("h1")
    title.textContent = d.title
    detailsHeader.appendChild(title)

    const companyLogo = document.createElement("img")
    companyLogo.src = d.logo
    companyLogo.classList.add("company-logo")

    const date = document.createElement("h2")
    date.textContent = d.time
    detailsHeader.appendChild(companyLogo)
    detailsHeader.appendChild(date)
    const description = document.createElement("p")
    description.textContent = d.description
    const achievements = document.createElement("ul")
    achievements.classList.add("vertical-list")
    for (let a of d.achievements) {
        const achievement = document.createElement("li")
        achievement.textContent = a
        achievements.appendChild(achievement)
    }
    const skills = document.createElement("ul")
    skills.classList.add("horizontal-list")
    for (let s of d.skills) {
        const skill = document.createElement("li")
        skill.textContent = s
        skills.appendChild(skill)
    }
    details.appendChild(detailsHeader)
    details.appendChild(description)
    details.appendChild(achievements)
    details.appendChild(document.createElement("h2"))
    details.appendChild(skills)
    node.appendChild(details)
}
