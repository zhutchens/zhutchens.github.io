const send_button = document.getElementsByTagName('input')[2]; 

send_button.addEventListener("click", send_email); 

function send_email() {
    
    const name = document.getElementById("name"); 
    const email = document.getElementById("email")
    const message = document.getElementById("message"); 

    Email.send({
        SecureToken : '019a8c1b-9be9-457c-bf1a-9666940861cf',
        To : 'zhut654@gmail.com',
        From : 'zhut654@gmail.com',
        Subject : `Email: ${email.value}, Name: ${name.value}`,
        Body : message.value
    }).then(
        document.getElementById("name").value = '',
        document.getElementById("email").value = '',
        document.getElementById("message").value = '',
        alert("Email successfully sent!")
    );
}