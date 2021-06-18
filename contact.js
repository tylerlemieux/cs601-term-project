
var selectedLink = "Contact";

function validateFormAndSetMailto(){
    var form = document.getElementById("contact-form");

    var name = document.getElementById("name");
    var phoneNumber = document.getElementById("phone-number");
    var message = document.getElementById("message");
    var canContact = document.getElementsByClassName("can-contact");
    var isRecruiter = document.getElementById("is-recruiter");
   
    var alphaOnlyRegex = /^[a-zA-Z ]+$/;


    if(name.value.length < 2) {
        alert("Name must have at least two characters");
        name.focus();
        return false;
    } else if (!alphaOnlyRegex.test(name.value)) {
        alert("Name must have only letters A-Z");
        name.focus();
        return false;
    } else if (message.value.length < 10) {
        alert("Message must be at least 10 characters");
        message.focus();
        return false;

    } else {
        // No validation issues triggered, so direcct the user
        var subject = "Message from " + name.value;
        var body = "From: " + name.value + "  " +
            "Phone Number: " + phoneNumber.value + "  " +
            "Message: " + message.value + "  " +
            "Is a recruiter: " + (isRecruiter.checked ? "Yes" : "No") + "  " +
            "Can Contact: " + canContact.value;
        var action = "mailto:lemex2004@gmail.com?Subject=" + subject + "&Body=" + body; 

        // Setting the form.action doesnt actually change the action, so change the window location
        window.location = action;
        //form.action = action;
        return true;
    }

}