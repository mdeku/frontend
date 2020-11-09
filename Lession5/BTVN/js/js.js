document.getElementById('btn-signin')
.addEventListener("click", function() {
	signin();
});

function signin(){
	// gan value cho user va pass
	let username = document.getElementById("user").value.trim();
	let pass = document.getElementById("pass").value.trim();

	// check hợp lệ thì chuyển trang
	if (username != "" && pass != ""){
		document.getElementById("err-user").style.display="none";
		document.getElementById("err-pass").style.display="none";
		// chuyen sang trang todo
		location.href = "todo.html"
	} 
	// check user và pass ko hợp lệ
	else if(username == ""){
		document.getElementById("err-user").style.display="block";
	}
	if(pass == ""){
		document.getElementById("err-pass").style.display="block";
	}
}