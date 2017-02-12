
let compute = function() {
	let f = document.expression;
	let str = f.elements["expression"].value;

	var a = new Array;
	var b = 0;
	function num(digit) {
	    b = b * 10 + digit;
	}
	function operator(operator) {
	    a.push(b);
	    b = 0;
	    a.push(operator);
	}
	function calculate() {
	    for (var i = 0; i < a.length; i++) {
	        if (a[i] == '*') {
	            a[i] = a[i - 1] * a[i + 1];
	            a.splice(i - 1, 1);
	            a.splice(i + 1, 1);
	        }
	        else if (a[i] == '/') {
	            a[i] = a[i - 1] / a[i + 1];
	            a.splice(i - 1, 1);
	            a.splice(i + 1, 1);
	        }
	    }
	    for (var i = 0; i < a.length; i++) {
	        if (a[i] == '+') {
	            a[i] = a[i - 1] + a[i + 1];
	            a.splice(i - 1, 1);
	            a.splice(i + 1, 1);
	        }
	        else if (a[i] == '-') {
	            a[i] = a[i - 1] - a[i + 1];
	            a.splice(i - 1, 1);
	            a.splice(i + 1, 1);
	        }

	    } 
	}

	let ans = a[0].toString();
	let answer = document.getElementById("answer");
	answer.innerHTML = "";
	answer.appendChild(document.createTextNode(ans));
}