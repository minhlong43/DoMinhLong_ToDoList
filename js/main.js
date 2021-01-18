var list = new TaskList();
var validation = new Validation();

getLocalStorage();

getEle("addItem").addEventListener("click", function () {
  var activity = getEle("newTask").value;

  var isValid = true;
  isValid &=
    validation.checkExist(activity, list.arr) &&
    validation.checkEmpty(activity);

  if (!isValid) return;

  var newActivity = new Task(activity);
  list.AddTask(newActivity);
  checkList(list.arr);
  setLocalStorage();
});

function checkList(list) {
  var t = "",
    n = "";
  (getEle("todo").innerHTML = ""),
    (getEle("completed").innerHTML = ""),
    list &&
      list.length > 0 &&
      list.forEach(function (item) {
        "todo" === item.status
          ? ((t += addActivity(item)), (getEle("todo").innerHTML = t))
          : "completed" === item.status &&
            ((n += addActivity(item)), (getEle("completed").innerHTML = n));
      });
}

function addActivity(task) {
  return `
             <li>
             <span>${task.Newtask}</span>
              <div class="buttons">
                  <button class="remove" onclick="deleteToDo(${task.ID})">
                    <i class="fa fa-trash-alt"></i>
                  </button>
                  <button class="complete" onclick="changeStatus(${task.ID})">
                    <i class="fas fa-check-circle"></i>
                    <i class="far fa-check-circle"></i>
                  </button>
              </div>
             </li>
          `;
}

function deleteToDo(id) {
  list.deleteTask(id);
  checkList(list.arr);
  alert("Task Delete");
  setLocalStorage();
}

function changeStatus(ID) {
  var taskChange = list.getinfoTask(ID);
  if (taskChange.status !== "completed") {
    taskChange.status = "completed";
  } else {
    taskChange.status = "todo";
  }
  alert("Task Complete");
  list.updateTask(taskChange);
  checkList(list.arr);
  setLocalStorage();
}

function setLocalStorage() {
  var arr = JSON.stringify(list.arr);
  localStorage.setItem("LIST", arr);
}

function getLocalStorage() {
  if (localStorage.getItem("LIST")) {
    list.arr = JSON.parse(localStorage.getItem("LIST"));
    checkList(list.arr);
  }
}

function getEle(id) {
  return document.getElementById(id);
}
