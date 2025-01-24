function sentMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_uhhwidy";
    const templateID = "template_77lz6eo";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields after success
            document.getElementById("name").value = ""; 
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log("Email sent successfully:", res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.error("Error sending email:", err);
            alert(`Failed to send your message. Error: ${err.text || 'Please try again.'}`);
        });
}
