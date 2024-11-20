window.onload = function() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    // Retrieve saved schedules from localStorage (assuming the saved schedules are stored under the key "schedules")
    let savedSchedules = JSON.parse(localStorage.getItem("schedules")) || [];
  
    // Log the schedules to check if they are retrieved properly
    console.log(savedSchedules);
  
    // Get the container element where the calendar will be displayed
    const calendarContainer = document.getElementById("calendarContainer");
  
    // Check if the calendar container exists before proceeding
    if (calendarContainer) {
      // Create a container for each day of the week
      daysOfWeek.forEach((day, index) => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");
        dayContainer.innerHTML = `
          <h3>${day}</h3>
          <div class="class-list" id="classList-${index}"></div>
        `;
        calendarContainer.appendChild(dayContainer);
      });
  
      // Loop through each saved schedule and display it on the appropriate day
      savedSchedules.forEach(schedule => {
        if (schedule.daysOfWeek && Array.isArray(schedule.daysOfWeek)) {
          schedule.daysOfWeek.forEach(day => {
            const dayIndex = daysOfWeek.indexOf(day);
            if (dayIndex !== -1) {
              const classListContainer = document.getElementById(`classList-${dayIndex}`);
              const classItem = document.createElement("div");
              classItem.classList.add("class-item");
              classItem.innerHTML = `
                <strong>${schedule.name}</strong>
                <p>${schedule.startTime} - ${schedule.endTime}</p>
              `;
              classListContainer.appendChild(classItem);
            }
          });
        } else {
          console.error("Invalid 'daysOfWeek' data for schedule", schedule);
        }
      });
    } else {
      console.error("Calendar container not found!");
    }
  };