document.getElementById("logoutButton").addEventListener("click", function () {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.clear(); // Clear any saved data in localStorage
      alert("You have been logged out.");
      window.location.href = "index.html"; // Redirect to login page
    }
  });