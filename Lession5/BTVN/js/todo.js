document.getElementById('btn-add')
.addEventListener("click", function() {
	addTodo();
});

var taskNumber = 1;
let numbertaskCount = 0;

function addTodo() {
	var date = new Date();
	// gan task value cho taskInput
	let taskInput = document.getElementById("input-task").value.trim();
	let taskCount = document.getElementsByClassName("task-count");
	// check hợp lệ thì add task
	if (taskInput != "") {
		let taskContent = document.getElementById('task-content');
		let htmlTask =
			"<tr>" +
				"<th scope='row'> " + taskNumber + "</th>"+
				"<td>" + taskInput + "</td>"+
				"<td>" + "Open" + "</td>" +
				"<td>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</td>" +
			"</tr >"
		
		taskContent.innerHTML += htmlTask;
		numbertaskCount = taskNumber++;
	}
	if (numbertaskCount <= 1) {
		taskCount[0].innerHTML = "<h4>" + numbertaskCount + " Task </h4>";
		return;
    }
	taskCount[0].innerHTML = "<h4>" + numbertaskCount + " Tasks </h4>";
}