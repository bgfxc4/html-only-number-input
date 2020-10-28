
window.onload = function()  {
	var input = document.getElementById("only_numbers");
	input.setAttribute("last_acceptable_value", "10");
	input.value = 10;
}

function number_changed(id)  {
	var e = document.getElementById(id)
	//var re = new RegExp("^[0-9. ]*$"); //if you want to allow spaces and dots
	var re = new RegExp("^[0-9.]*$"); //dots and numbers
	//var re = new RegExp("^[0-9]*$"); //only numbers
	//you can also change the * at the end to a + if you want to require at least one character
	console.log(re.test(e.value));;
	if(re.test(e.value)) {
		e.setAttribute("last_acceptable_value", e.value);
	} else {
		e.value = e.getAttribute("last_acceptable_value");
	}
}
