function myFunc(){
	var a = parseInt(document.getElementById("a").value)
	var b = parseInt(document.getElementById("b").value)
	var result
	if(document.getElementById("jumboBox").value=="+"){
		result = a + b
	}
	if(document.getElementById("jumboBox")=="-"){
		result = a - b
	}
	if(document.getElementById("jumboBox")=="x"){
		result = a * b
	}
	if(document.getElementById("jumboBox")=="/"){
		result = a / b
	}
	document.getElementById("result").value = result
};