document.getElementById('sendMessageButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mlazarom2223@politecnics.barcelona",
      Password: "81FF5F5C78B606C00921CB9B7EEC2AA571B9",
      To: 'marclazaromarti@gmail.com',
      From: email,
      Subject: subject,
      Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(
      function(response) {
        if (response === 'OK') {
            alert("The email was sent successfully");
            clearInputs(nameInput, emailInput, subjectInput, messageInput);
        } else {
            alert("An error occurred, please try again");
        }
      }
    );
  });

  function clearInputs(...inputs) {
    inputs.forEach(input => {
      input.value = '';
    });
  }

  