function resetForm() {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""  
}


function sendToHeadless(data) {
    console.log(fetch("https://app.headlessforms.cloud/api/v1/form-submission/t8QbsCVx9i", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }));
    console.log("Data sent");
    console.log(JSON.stringify(data))
    console.log('OK')
    setTimeout(resetForm, 900)
}


function sendForm() {
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    console.log("Sending the following data:")
    console.log(data);

    if (data.email && data.message && data.name) {
        data.message = 'Nausikaa: ' + data.message
        sendToHeadless(data)
    }
}

document.getElementById("button-submit-form").addEventListener("click", sendForm)
