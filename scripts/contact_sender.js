function sendToHeadless(data) {
    fetch("https://app.headlessforms.cloud/api/v1/form-submission/t8QbsCVx9i", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("Data sent");
    document.getElementById('contact-box').classList.add('is-sent');
    setTimeout(function() {
        document.getElementById("form-name").value = ""
        document.getElementById("form-email").value = ""
        document.getElementById("form-phone").value = ""
        document.getElementById("form-message").value = ""    
    }, 900)
    setTimeout(function(){
        document.getElementById('contact-box').classList.remove('is-sent');  
    }, 1800);
}


function sendForm() {
    const data = {
        name: document.getElementById("form-name").value,
        email: document.getElementById("form-email").value,
        phone: document.getElementById("form-phone").value,
        message: document.getElementById("form-message").value,
    };
    console.log("Sending the following data:")
    console.log(data);

    for(let d of ["name", "email", "phone", "message"]) {
        if (!data[d]) {
            document.getElementById(d + "Validation").classList.remove("hidden");
            document.getElementById("form-" + d).classList.remove("margin-field");
        } else {
            if(!document.getElementById(d + "Validation").classList.contains("hidden")) document.getElementById(d + "Validation").classList.add("hidden")
            if(!document.getElementById("form-" + d).classList.contains("margin-field")) document.getElementById("form-" + d).classList.add("margin-field")
        }
    }

    //if (data.email && data.message && data.phone && data.name) {
        sendToHeadless(data)
    //}
}

document.getElementById("button-submit-form").addEventListener("click", sendForm)
