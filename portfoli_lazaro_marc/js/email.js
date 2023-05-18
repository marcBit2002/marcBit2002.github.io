// Agrega este código después de incluir la librería smtp.js

document.getElementById('sendMessageButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;
  
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mlazarom2223@politecnics.barcelona",
        Password : "81FF5F5C78B606C00921CB9B7EEC2AA571B9",
        To : 'marclazaromarti@gmail.com',
        From :email,
        Subject : subject,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(
      message => alert(message)
    );
  });
  