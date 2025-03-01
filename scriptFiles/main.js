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
  });
}
