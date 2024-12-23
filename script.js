//ajax code for inserting data
let name = document.getElementById("name");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");
let success = document.getElementById("success");
success.style.transform = "rotateX(90deg)";
submit.addEventListener("click", formSubmit);

function formSubmit(even) {
	event.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open("post", "insert.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if (xhr.responseText == "success") {
				success.style.transform = "rotateX(0deg)";
				setTimeout(function () {
					success.style.transform = "rotateX(90deg)";
				}, 2000);
				showData();
			} else {
				success.style.transform = "rotateX(90deg)";
			}
		}
	};
	xhr.send("name=" + name.value + "&pass=" + pass.value + "&submit");
	document.getElementById("form").reset();
}
// Function to fetch data and display it in the table
function showData() {
	let tbody = document.getElementById("tbody");
	tbody.innerHTML = "";
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "retrieve.php", true);
	xhr.responseType = "json";
	xhr.onload = () => {
		if (xhr.status === 200) {
			if (xhr.response) {
				let data = xhr.response;
				for (let i = 0; i < data.length; i++) {
					tbody.innerHTML +=
						"<tr><td>" +
						data[i].id +
						"</td><td>" +
						data[i].name +
						"</td><td>" +
						data[i].pass +
						'</td><td><button class="btn edit btn-outline-success btn-sm" data-id=' +
						data[i].id +
						'>edit</button><button class="btn delete btn-outline-danger btn-sm" data-id=' +
						data[i].id +
						">remove</button></td></tr>";
				}
				// Add event listeners after creating the buttons
				addDeleteEventListeners();
				addupateEvenlisteners();
			}
		} else {
			console.log("Error occurred");
		}
	};
	xhr.send();
}
showData();

// Function to add click event listeners to all delete buttons
function addDeleteEventListeners() {
	let deleteButtons = document.getElementsByClassName("delete");
	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", function () {
			let id = this.getAttribute("data-id");
			const xhr = new XMLHttpRequest();
			xhr.open("POST", "delete.php", true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = () => {
				if (xhr.status === 200) {
					// alert(xhr.response);
					showData(); // Refresh the table data
				} else {
					alert("Error occurred");
				}
			};
			xhr.send("id=" + id);
		});
	}
}
// update data using ajax
let n = document.getElementById("name");
let p = document.getElementById("pass");
let s = document.getElementById("submit");
let updateButtons = document.getElementsByClassName("edit");
// Remove one of the submit event listeners, depending on your use case
submit.addEventListener("click", formSubmit);

// Update Button Event Listeners
addupateEvenlisteners();

// Function to add click event listeners to all edit buttons
function addupateEvenlisteners() {
	let updateButtons = document.getElementsByClassName("edit");
	for (let i = 0; i < updateButtons.length; i++) {
		updateButtons[i].addEventListener("click", function () {
			let id = this.getAttribute("data-id");
			const xhr = new XMLHttpRequest();
			xhr.responseType = "json";
			xhr.open("post", "update.php", true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = () => {
				if (xhr.status === 200) {
					n.value = xhr.response.name;
					p.value = xhr.response.pass;
				} else {
					alert("Error occurred");
				}
			};
			xhr.send("id=" + id);
		});
	}
}

// Update data when the form is submitted
submit.addEventListener("click", function () {
	let id = ""; // You need to define how you get the ID of the item to update
	let xhr = new XMLHttpRequest();
	xhr.open("post", "update.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if (xhr.responseText == "update") {
				success.style.transform = "rotateX(0deg)";
				success.innerText = "data updated successfully";
				setTimeout(function () {
					success.style.transform = "rotateX(90deg)";
				}, 2000);
			} else {
				success.style.transform = "rotateX(90deg)";
				success.innerText = "data not updated successfully";
			}
			submit.innerHTML = "submit";
		}
	};
	xhr.send("name=" + n.value + "&pass=" + p.value + "&sid=" + id);
	document.getElementById("form").reset();
});

// function addupateEvenlisteners() {
// 	for (let i = 0; i < updateButtons.length; i++) {
// 		updateButtons[i].addEventListener("click", function () {
// 			let id = this.getAttribute("data-id");
// 			const xhr = new XMLHttpRequest();
// 			xhr.responseType = "json";
// 			xhr.open("post", "update.php", true);
// 			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 			xhr.onload = () => {
// 				if (xhr.status === 200) {
// 					// alert(xhr.response);
// 					console.log(xhr.response);
// 					n.value = xhr.response.name;
// 					p.value = xhr.response.pass;
// 					showData(); // Refresh the table data
// 				} else {
// 					alert("Error occurred");
// 				}
// 			};
// 			s.innerHTML = "Update";
// 			xhr.send("id=" + id);
// 		});
// 	}
// }
// submit.addEventListener("click", () => {
// 	let id = this.getAttribute("data-id");
// 	let xhr = new XMLHttpRequest();
// 	xhr.open("post", "update.php", true);
// 	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 	xhr.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			if (xhr.responseText == "update") {
// 				success.style.transform = "rotateX(0deg)";
// 				success.innerText = "data update successfully";
// 				setTimeout(function () {
// 					success.style.transform = "rotateX(90deg)";
// 				}, 2000);
// 			} else {
// 				success.style.transform = "rotateX(90deg)";
// 				success.innerText = "data not update successfully";
// 			}
// 			s.innerHTML = "submit";
// 		}
// 	};
// 	xhr.send("name=" + n.value + "&pass=" + p.value + "&sid=" + id + "&s");
// 	document.getElementById("form").reset();
// });
// // Fetch and display data when the page loads
// window.onload = showData;
