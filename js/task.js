function Task(_task) {
  var _ID = Math.floor(Math.random() * 100);
  this.ID = _ID;
  this.Newtask = _task;
  this.status = "todo";
}
