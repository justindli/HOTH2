
let compute = function() {
	let f = document.expression;
	let str = f.elements["expression"].value;



	let ans = str;
	let answer = document.getElementById("answer");
	answer.innerHTML = "";
	answer.appendChild(document.createTextNode(ans));
}