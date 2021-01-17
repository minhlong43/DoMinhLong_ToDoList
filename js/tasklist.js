function TaskList() {
  this.arr = [];
  this.AddTask = function (task) {
    this.arr.push(task);
  };

  this.findTask = function (id) {
    return this.arr.findIndex(function (item) {
      return id === item.ID;
    });
  };

  this.deleteTask = function (id) {
    var location = this.findTask(id);
    if (location !== -1) {
      this.arr.splice(location, 1);
    }
  };

  this.updateTask = function (task) {
    var location = this.findTask(task.ID);
    if (location !== -1) {
      this.arr[location] = task;
    }
  };

  this.getinfoTask = function (id) {
    var location = this.findTask(id);
    if (location !== -1) {
      return this.arr[location];
    }
  };
}
