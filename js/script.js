const handleForm = ()=>{
	var employeeFrom = document.getElementById("empForm");
	var id = window.document.getElementById("id");
	var name = window.document.getElementById("name");
	var ext = window.document.getElementById("ext");
	var email = window.document.getElementById("email");
	var department = window.document.getElementById("department");
	employeeFrom.addEventListener("submit", 
		(e)=>{  e.preventDefault();
				console.log("Some message have been moved to issues panel.\nID: " + id.value+"\nName: " + name.value
						+"\nEXT: " +ext.value + "\nEmail: " + email.value + "\nDepartment: "+ department.value + "\n");
		}
	);
}
window.addEventListener("load", handleForm);