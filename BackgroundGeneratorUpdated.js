var color1=document.querySelector(".colr1");
var color2=document.querySelector(".colr2");
var body=document.querySelector(".grad");
var h3=document.getElementsByTagName("h3");
var btnrd=document.querySelector("#random");
function setGradient(){
	body.style.background=
	"linear-gradient(to right,"
	+color1.value+
	","
	+color2.value+")";
	h3.textContent= body.style.background+";";

	
	}
//Taken from StackOverflow
function randomize(){
	 const randomColor = Math.floor(Math.random()*16777215).toString(16);
	 return randomColor;
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
btnrd.addEventListener("click",item => {
	color1.value="#"+randomize();
	color2.value="#"+randomize();
	setGradient();
})
