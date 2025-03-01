let btnCompleted = document.getElementsByClassName("btn-Completed");
for (let btnClicked of btnCompleted) {
  btnClicked.addEventListener("click", function () {
    // Give alert message
    alert("Board updated Successfully");
    // Disable the button
    btnClicked.setAttribute("disabled", "true");
    // Calculate the Task Assigned and Completed
    const assignedValue = getInnerTextValueById("taskAssigned");
    calculateTotalTasks(assignedValue, "taskAssigned");
    const completedTask = getInnerTextValueById("completedTaskNum");
    calculateCompletedTasks(completedTask, "completedTaskNum");
    // history log
    let card = btnClicked.parentElement.parentElement;
    let cardTitle = card.querySelector(".cardTitle").innerText;
    // Realtime
    let realTime = new Date();
    let hours = realTime.getHours();
    let minutes = realTime.getMinutes();
    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let currentTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${amPm}`;
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="w-[318px] bg-slate-100 rounded-xl p-2 my-3">
    <p>You have Complete The Task <span class="font-bold"> ${cardTitle} </span> <span>${currentTime}</span></p>
    </div>
    `;
    document.getElementById("historyContainer").append(div);
    // Clear the history
    document
      .getElementById("btnClearHistory")
      .addEventListener("click", function () {
        document.getElementById("historyContainer").innerHTML = "";
      });
  });
}
