var mbtn = document.getElementById('mbtn');
var time = document.getElementById('time');
var p = time.getElementsByTagName('span');
p[0].onclick = function(){
	p[0].innerHTML = ' ';
	mbtn.onclick = function(ev){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == "input"){
				if(target.value>=0&&target.value<6)
					p[0].innerHTML = target.value;
		}
	}
}
p[1].onclick = function(){
	p[1].innerHTML = ' ';
	mbtn.onclick = function(ev){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == "input"){
			p[1].innerHTML = target.value;
		}
	}
}
p[3].onclick = function(){
	p[3].innerHTML = ' ';
	mbtn.onclick = function(ev){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == "input"){
				if(target.value>=0&&target.value<6)
					p[3].innerHTML = target.value;
		}
	}
}
p[4].onclick = function(){
	p[4].innerHTML = ' ';
	mbtn.onclick = function(ev){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == "input"){
			p[4].innerHTML = target.value;
		}
	}
}

document.getElementById('reset').onclick = function(){
	document.getElementById('win').style.backgroundColor='#ccc';
	clearInterval(timer);
	p[0].innerHTML = 0;
	p[1].innerHTML = 0;
	p[3].innerHTML = 0;
	p[4].innerHTML = 0;
}
var timer;

document.getElementById('start').onclick = function(){
	clearInterval(timer);
	var t = parseInt(p[0].innerHTML+p[1].innerHTML)*60+parseInt(p[3].innerHTML+p[4].innerHTML);
	if(t > 0)
	{
		document.getElementById('win').style.backgroundColor='#ff5809';
		document.getElementById('small').onclick = function(){
			document.getElementById('win').style.backgroundColor='#ff9224';
		}
		document.getElementById('middle').onclick = function(){
			document.getElementById('win').style.backgroundColor='#ff5809';
		}
		document.getElementById('big').onclick = function(){
			document.getElementById('win').style.backgroundColor='#ff2d2d';
		}
		timer = setInterval(function(){
		t=t-1;
		setTime(t);
		console.log(t);
		if(t == 0){
			document.getElementById('win').style.backgroundColor='#ccc';
			alert("加热完毕，请取出您的食物！");
			clearInterval(timer);
			setTime(t);
		}	
		},1000);
	}
}
document.getElementById('stop').onclick = function(){
	clearInterval(timer);
	document.getElementById('win').style.backgroundColor='#ccc';
}

function setTime(t){
	var min = Math.floor(t/60);
	var sec = t%60;
	p[0].innerHTML = Math.floor(min/10);
	p[1].innerHTML = min%10;
	p[3].innerHTML = Math.floor(sec/10);
	p[4].innerHTML = sec%10;
}