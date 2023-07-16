const thanksBox = document.getElementById("thanks-box")
const contactBox = document.getElementById("contact-box")

function resetForm() {
    document.getElementById("form-name").value = ""
    document.getElementById("form-email").value = ""
    document.getElementById("form-message").value = ""  
}

function swapBoxDisplayed() {
    const currentBox = thanksBox.classList.contains("hidden") ? contactBox : thanksBox
    const newBox = thanksBox.classList.contains("hidden") ? thanksBox : contactBox
    currentBox.classList.add('hidden')
    newBox.classList.add('fade-in-box')
    newBox.classList.remove('hidden')
    setTimeout(function() {newBox.classList.remove('fade-in-box')}, 2000)
}

function sendToHeadless(data) {
    fetch("https://app.headlessforms.cloud/api/v1/form-submission/t8QbsCVx9i", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("Data sent");
    contactBox.classList.add('is-sent');
    setTimeout(resetForm, 900)
    setTimeout(swapBoxDisplayed, 900)
    setTimeout(function(){
        contactBox.classList.remove('is-sent');  
    }, 1800);
}


function sendForm() {
    const data = {
        name: document.getElementById("form-name").value,
        email: document.getElementById("form-email").value,
        message: document.getElementById("form-message").value,
    };
    console.log("Sending the following data:")
    console.log(data);

    for(let d of ["name", "email", "message"]) {
        if (!data[d]) {
            document.getElementById(d + "Validation").classList.remove("hidden");
            document.getElementById("form-" + d).classList.remove("margin-field");
        } else {
            if(!document.getElementById(d + "Validation").classList.contains("hidden")) document.getElementById(d + "Validation").classList.add("hidden")
            if(!document.getElementById("form-" + d).classList.contains("margin-field")) document.getElementById("form-" + d).classList.add("margin-field")
        }
    }

    if (data.email && data.message && data.name) {
        sendToHeadless(data)
    }
}

function newForm() {
    thanksBox.classList.add('is-sent');
    setTimeout(swapBoxDisplayed, 900)
    setTimeout(function(){
        thanksBox.classList.remove('is-sent');  
    }, 1800);

}

document.getElementById("button-submit-form").addEventListener("click", sendForm)
document.getElementById("button-new-form").addEventListener("click", newForm)
