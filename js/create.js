// Retrieve existing schedules from localStorage or initialize an empty array
let schedules = JSON.parse(localStorage.getItem("schedules")) || [];

// Handle form submission to save the schedule
document.getElementById("scheduleForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values from the form
  const scheduleName = document.getElementById("scheduleName").value.trim();
  const daysOfWeek = document.getElementById("daysOfWeek").value.split(',').map(day => day.trim());
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  // Validate input (optional but recommended)
  if (!scheduleName || !daysOfWeek || !startTime || !endTime) {
    alert("Please fill out all fields!");
    return;
  }

  // Add the new schedule with multiple classes for specific days
  const newSchedule = {
    name: scheduleName,
    daysOfWeek: daysOfWeek,  // Days the course occurs
    startTime: startTime,
    endTime: endTime,
  };
  schedules.push(newSchedule);

  // Save the updated schedules array to localStorage
  localStorage.setItem("schedules", JSON.stringify(schedules));

  // Clear the form fields
  document.getElementById("scheduleName").value = "";
  document.getElementById("daysOfWeek").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";

  // Notify the user and redirect to the Saved Schedules page
  alert("Schedule saved successfully!");
  location.href = "saved.html";
});