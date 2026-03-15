let form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const first_lastNameRegex = /^[A-Za-z\s]{2,}$/ ;
    const phoneRegex = /^01\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|outlook)\.(com|net|org)$/ ;

    if (!phoneRegex.test(phone) || !first_lastNameRegex.test(firstName) || !first_lastNameRegex.test(lastName) || !emailRegex.test(email)) {
        e.preventDefault();
        return ; 
    }
    
    const userMessage = {
        firstName,
        lastName,
        email,
        phone,
        message
    };

     let messages = JSON.parse(localStorage.getItem("contactDetails")) || [];
     messages.push(userMessage);
     localStorage.setItem("contactDetails", JSON.stringify(messages));
})