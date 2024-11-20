document.addEventListener("DOMContentLoaded", () => {
  const calendarContainer = document.getElementById("calendarContainer");

  if (!calendarContainer) {
    console.error("Calendar container not found.");
    return;
  }

  // Retrieve schedules from localStorage
  const savedSchedules = JSON.parse(localStorage.getItem("schedules")) || [];

  // Days of the week
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Create the calendar structure
  daysOfWeek.forEach((day, index) => {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add("day-container");
    dayContainer.innerHTML = `
      <h3>${day}</h3>
      <div class="class-list" id="classList-${index}"></div>
    `;
    calendarContainer.appendChild(dayContainer);
  });

  // Group schedules by day and sort them by time
  const schedulesByDay = {};
  daysOfWeek.forEach(day => {
    schedulesByDay[day] = savedSchedules
      .filter(schedule => schedule.daysOfWeek.includes(day))
      .sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.startTime}:00`).getTime();
        const timeB = new Date(`1970-01-01T${b.startTime}:00`).getTime();
        return timeA - timeB;
      });
  });

  // Render schedules for each day
  Object.entries(schedulesByDay).forEach(([day, schedules]) => {
    const dayIndex = daysOfWeek.indexOf(day);
    if (dayIndex !== -1) {
      const classListContainer = document.getElementById(`classList-${dayIndex}`);
      schedules.forEach(schedule => {
        const classItem = document.createElement("div");
        classItem.classList.add("class-item");
        classItem.innerHTML = `
          <strong>${schedule.name}</strong>
          <p>${schedule.startTime} - ${schedule.endTime}</p>
        `;
        classListContainer.appendChild(classItem);
      });
    }
  });
});