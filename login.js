//login.js


// login.js
function login(event) {
    event.preventDefault();
  
    // Temporary login credentials
    const credentials = [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
      // Add more temporary credentials as needed
    ];
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Find matching credentials
    const user = credentials.find((cred) => cred.username === username && cred.password === password);
  
    if (user) {
      // Redirect to the account details page
      window.location.href = "account-details.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
