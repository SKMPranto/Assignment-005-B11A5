function jumpPage(id, page) {
  document.getElementById(id).addEventListener("click", function () {
    const url = (window.location.href = page);
    return url;
  });
}




// Function to update the date and day on the page

function updateDate() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const realTime = new Date();

  const day = days[realTime.getDay()];
  const date = realTime.getDate();
  const month = months[realTime.getMonth()];
  const year = realTime.getFullYear();

  document.getElementById("currentWeekday").textContent = `${day} ,`;
  document.getElementById(
    "currentDate"
  ).textContent = `${date} ${month} ${year}`;
}
window.onload = updateDate;
