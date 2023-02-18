function sendForm() {
    const data = {
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value,
        phone: document.getElementById("formPhone").value,
        message: document.getElementById("formMessage").value,
    };
    console.log("Sending the following data:")
    console.log(data);
    fetch("https://app.headlessforms.cloud/api/v1/form-submission/t8QbsCVx9i", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("Data sent");
}

document.getElementById("button-submit-form").addEventListener("click", sendForm)
