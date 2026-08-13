let count = 0;
let timer = setInterval(tick,1000);

function tick() {
	count = count +1;
	console.log(count);
	
if (count=== 10){
clearInterval(timer);}
}