const data = {
    "work": [
        {
            "img": "https://source.unsplash.com/featured/300x201",
            "short_title": "CEA",
            "title": "Software Engineer Intern at the CEA",
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
            "img": "https://source.unsplash.com/featured/300x202",
            "short_title": "MemoRecords",
            "title": "Full-stack Developer Intern at MemoRecords",
            "time": "January 2018 - July 2018",
            "description": "Memorecords is a french audiovisual start-up creating a new type of videobooth for large companies. I did a 6-month internship in this company",
            "achievements": [
                "Achieved an autonomous recording and streaming videobooth",
                "Full-stack development of the management software"
                
            ],
            "skills": ["Full-Stack Development", "PHP", "Laravel", "JavaScript", "MySQL"]
        },
        {
            "img": "https://source.unsplash.com/featured/300x203",
            "short_title": "Telecom SudParis",
            "title": "Deep Learning Research Intern at Telecom SudParis",
            "time": "March 2019 - April 2019",
            "description": "One-month research project on emotion recognition from videos for the european project Empatic",
            "achievements": [
                "Implementation of Deep Learning networks (CNN, LSTM) for emotion recognition",
                "Built a data manipulation pipeline with Computer Vision techniques (face detection, facial landmarks detection, face normalization)"
            ],
            "skills": ["Deep Learning", "Computer Vision", "Keras / Tensorflow", "Recurrent Neural Networks", "Convolutional Neural Networks"]
        },
        {
            "img": "https://source.unsplash.com/featured/300x204",
            "short_title": "Recruit Communications",
            "title": "Machine Learning Engineer Intern at Recruit Communications",
            "time": "May 2019 - September 2019",
            "description": "Recruit Communications is a Japanese web marketing company building recruiting solutions for large companies. I went to Japan and developed a machine learning model generation software. I also worked on a Demand-Side Platform (real-time advertisement bidding)",
            "achievements": [
                "Designed a machine learning optimization system",
                "Improved an auto-ML product by adding unsupervised methods to the solution"
            ],
            "skills": ["Machine Learning", "Automated Machine Learning (AutoML)", "Scala", "Python"]
        },
        {
            "img": "https://source.unsplash.com/featured/300x205",
            "short_title": "KLEE Group",
            "title": "Software Engineer at KLEE Group",
            "time": "January 2020 - August 2020",
            "description": "Klee Group is a consulting company developing digital solutions. I worked for the DGAC (French Civil Aviation Authority) as a software engineer consultant on different projects to manage airport fees, airport accesses and drone declarations",
            "achievements": [
                "Designed a machine learning optimization system",
                "Improved an auto-ML product by adding unsupervised methods to the solution"
            ],
            "skills": ["Software Development", "React.js", "Java", "PostgreSQL"]
        },
        {
            "img": "https://source.unsplash.com/featured/300x206",
            "short_title": "CEA",
            "title": "Computer Vision Research Engineer at CEA",
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
            "img": "https://source.unsplash.com/featured/300x207",
            "short_title": "HarfangLab",
            "title": "Artificial Intelligence Engineer at HarfangLab",
            "time": "November 2021 - Present",
            "description": "",
            "achievements": [],
            "skills": ["Deep Learning", "Computer Vision", "Keras / Tensorflow", "Python"]
        },
    ],
    "education": [
        {
            "img": "https://source.unsplash.com/featured/300x208",
            "short_title": "ISEP",
            "title": "Engineering Diploma in Computer Science",
            "time": "September 2015 - September 2018",
            "description": "Isep is ranked number 2 French engineering school in digital technologies according to the Usine Digital of 2016. I majored in software development and specialized in cybersecurity and Big Data",
            "achievements": ["Majored in Software Development", "Specialized in Cybersecurity and Big Data"],
            "skills": ["Software Development", "Web Development", "Javascript", "PHP", "Python", "Java", "SQL"]
        },
        {
            "img": "https://source.unsplash.com/featured/300x209",
            "short_title": "INHA",
            "title": "Exchange student in Computer Science at INHA University",
            "time": "August 2017 - December 2017",
            "description": "I spent 6 months as an exchange student in South Korea studying computer science in INHA",
            "achievements": ["Majored in Software Development", "Specialized in Database Design"],
            "skills": ["Software Development", "SQL", "Python", "Java", "SQL"]
        },
        {
            "img": "https://source.unsplash.com/featured/300x210",
            "short_title": "TRIED",
            "title": "Exchange student in Computer Science at INHA University",
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

function generateShortTitle(node, d) {
    const title = document.createElement("h2")
    title.textContent = d.short_title
    node.appendChild(title)
}

function generateDetails(node, d) {
    const details = document.createElement("div")
    details.classList.add("details")
    const title = document.createElement("h1")
    title.textContent = d.title
    const date = document.createElement("h2")
    date.textContent = d.date
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
    details.appendChild(title)
    details.appendChild(date)
    details.appendChild(description)
    details.appendChild(achievements)
    details.appendChild(document.createElement("h2"))
    details.appendChild(skills)
    node.appendChild(details)
}
