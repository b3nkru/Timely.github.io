// Change Username
document.getElementById("usernameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value.trim();
    if (newUsername) {
      localStorage.setItem("username", newUsername);
      alert("Username updated successfully!");
    }
  });
  
  // Change Password
  document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        localStorage.setItem("password", newPassword);
        alert("Password updated successfully!");
      } else {
        alert("Passwords do not match!");
      }
    }
  });
  
  // Delete Account
  document.getElementById("deleteAccountBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      localStorage.clear(); // Clear all data
      alert("Account deleted successfully!");
      window.location.href = "login.html"; // Redirect to login page
    }
  });