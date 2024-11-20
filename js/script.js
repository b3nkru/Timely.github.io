document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if(username === "admin" && password === "password123") {
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }

    
});

window.addEventListener("beforeunload", function() {
    localStorage.clear();  // Clears all items from localStorage
});