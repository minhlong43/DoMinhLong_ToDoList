function Validation() {
  this.checkEmpty = function (input) {
    if (input !== "") {
      alert("Add Task Complete");
      return true;
    }
    alert("Task Empty");
    return false;
  };

  this.checkExist = function (input, arr) {
    var check = true;
    arr.forEach(function (item) {
      if (input === item.Newtask) {
        check = false;
      }
    });
    if (check) {
      return true;
    }
    alert("Task Exist");
    return false;
  };
}
