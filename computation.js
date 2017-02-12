
let compute = function() {
	let f = document.expression;
	let str = f.elements["expression"].value;

	let ans = eval(str);
	let answer = document.getElementById("answer");
	answer.innerHTML = "";
	answer.appendChild(document.createTextNode(ans));
}