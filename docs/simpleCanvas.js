//Fullscreen? https://stackoverflow.com/questions/1125084/how-to-make-the-window-full-screen-with-javascript-stretching-all-over-the-scre

//Range from StackOverflow
var rangeLog=true;
function range(start, stop, step) {
	if(rangeLog){console.log('Range function from Tadeck on StackOverflow: https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range');rangeLog=false;};
	//https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range
	if (typeof stop == 'undefined') {
		// one param defined
		stop = start;
		start = 0;
	}
	if (typeof step == 'undefined') {
		step = 1;
	}
	if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
		return [];
	}
	var result = [];
	for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
		result.push(i);
	}
	return result;
};

//Color mode variables
HEX="hex";
RGB="rgb";
HSL="hsl";
mouseX=0;
mouseY=0;

//simpleCanvas code
function simpleCanvas(element){
	//Errors dealing with element
	if(element===undefined){
		throw 'simpleCanvasError: 1 arguement expected, 0 given.';
	}
	if(element&&element.nodeType!==Node.ELEMENT_NODE){
		if(document.getElementById(element)){
			element=document.getElementById(element);
		}else{
			throw 'simpleCanvasError: No element defined by id '+element+'.';
		}
	}
	if(element.tagName!=="CANVAS"){
		throw 'simpleCanvasError: Canvas element expected, but '+element.tagName+' was provided.';
	}

	//Varialbes
	//Default Settings
	this.s={
		"fill":"#ffffffff",
		"stroke":"#000000ff",
		"noFill":false,
		"noStroke":false,
		"frameRate":30,
		"colorMode":"rgb"
	}
	this.ele=element;
	this.width=this.ele.width;
	this.height=this.ele.height;
	this.c=this.ele.getContext('2d');
	var dis=this;

	//Functions
	this.resize(400,400);

	var thisVar=this;
	this.d=setInterval(function(){
		if(typeof(thisVar.draw)=='function'){
		thisVar.draw();}
	},1000/this.s.frameRate);

	//mouseX and mouseY coordinate update
	//Derived from https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
	this.ele.addEventListener('mousemove',function(e){
		var r=dis.ele.getBoundingClientRect();
		mouseX=e.clientX-r.left;
		mouseY=e.clientY-r.top;
	});
	console.log('Function for mouseX and mouseY is derived from: https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/');
}

//simpleCanvas Functions

/*
Color
	- noFill();
	- noStroke();
	- colorMode(mode);
	- fill(i1, i2, i3, i4);
	- stroke(i1, i2, i3, i4);
	- background(i1, i2, i3, i4);
*/
simpleCanvas.prototype.noFill=function(){
	this.s.noFill=true;
}
simpleCanvas.prototype.noStroke=function(){
	this.s.noStroke=true;
}
simpleCanvas.prototype.colorMode=function(mode){
	//Either takes text string or variables from script (makes sure it's lowercase)
	this.s.colorMode=mode.toLowerCase();
}
simpleCanvas.prototype.fill=function(i1=255, i2=255, i3=255,i4=255){
	if(this.s.colorMode==="rgb"){
		this.s.fill="rgba("+i1+", "+i2+", "+i3+", "+i4+")";
	}else if(this.s.colorMode==="hex"){
		if(i1==255){
			i1="ff";
		}
		if(i2==255){
			i2="ff";
		}
		if(i3==255){
			i3="ff";
		}
		if((i2==="ff")&&(i3==="ff")){
			if(toString(i1).substring(0,1)==="#"){
				this.s.fill=i1;
			}else{
				this.s.fill="#"+i1;
			}
		}else{
			if(i1.substring(0,1)==="#"){
				this.s.fill=i1+i2+i3;
			}else{
				this.s.fill="#"+i1+i2+i3;
			}
		}
	}else if(this.s.colorMode==="hsl"){
		if(i2>100){
			i2=100;
		}
		if(i3>100){
			i3=100;
		}
		this.s.fill="hsl("+i1+", "+i2+"%, "+i3+"%)";
	}
	this.s.noFill=false;
}
simpleCanvas.prototype.stroke=function(i1=255, i2=255, i3=255,i4=255){
	if(this.s.colorMode==="rgb"){
		this.s.stroke="rgba("+i1+", "+i2+", "+i3+", "+i4+")";
	}else if(this.s.colorMode==="hex"){
		if(i1==255){
			i1="ff";
		}
		if(i2==255){
			i2="ff";
		}
		if(i3==255){
			i3="ff";
		}
		if((i2==="ff")&&(i3==="ff")){
			if(toString(i1).substring(0,1)==="#"){
				this.s.stroke=i1;
			}else{
				this.s.stroke="#"+i1;
			}
		}else{
			if(i1.substring(0,1)==="#"){
				this.s.stroke=i1+i2+i3;
			}else{
				this.s.stroke="#"+i1+i2+i3;
			}
		}
	}else if(this.s.colorMode==="hsl"){
		if(i2>100){
			i2=100;
		}
		if(i3>100){
			i3=100;
		}
		this.s.stroke="hsl("+i1+", "+i2+"%, "+i3+"%)";
	}
	this.s.noStroke=false;
}
simpleCanvas.prototype.background=function(i1=255, i2=255, i3=255,i4=255){
	this.c.clearRect(0,0,this.width,this.height);
	if(this.s.colorMode==="rgb"){
		this.c.fillStyle="rgba("+i1+", "+i2+", "+i3+")";
	}else if(this.s.colorMode==="hex"){
		if(i1==255){
			i1="ff";
		}
		if(i2==255){
			i2="ff";
		}
		if(i3==255){
			i3="ff";
		}
		if((i2==="ff")&&(i3==="ff")){
			if(toString(i1).substring(0,1)==="#"){
				this.c.fillStyle=i1;
			}else{
				this.c.fillStyle="#"+i1;
			}
		}else{
			if(i1.substring(0,1)==="#"){
				this.c.fillStyle=i1+i2+i3;
			}else{
				this.c.fillStyle="#"+i1+i2+i3;
			}
		}
	}else if(this.s.colorMode==="hsl"){
		if(i2>100){
			i2=100;
		}
		if(i3>100){
			i3=100;
		}
		this.c.fillStyle="hsl("+i1+", "+i2+"%, "+i3+"%)";
	}
	this.c.beginPath();
	this.c.rect(0,0,this.width,this.height);
	this.c.fill();
}
/*
Shape
	- rect(x,y,w,h);
	- ellipse(x,y,w,h);
	- point(x,y);
	- line(x1,y1,x2,y2);
	- triangle(x1,y1,x2,y2,x3,y3);
*/
simpleCanvas.prototype.rect=function(x,y,w,h){
	if(this.s.noFill&&this.s.noStroke){
		//Case if there is no fill or stroke
	}else{
		this.c.moveTo(x,y);
		this.c.beginPath();
		this.c.rect(x,y,w,h);
		if(this.s.noFill){
			//Case if there is no fill
			this.c.strokeStyle=this.s.stroke;
			this.c.stroke();
		}
		else if(this.s.noStroke){
			//Case if there is no stroke
			this.c.fillStyle=this.s.fill;
			this.c.fill();
		}
		else{
			//Regular case
			this.c.strokeStyle=this.s.stroke;
			this.c.fillStyle=this.s.fill;
			this.c.fill();
			this.c.stroke();
		}
	}
}
simpleCanvas.prototype.ellipse=function(x,y,w,h){
	if(this.s.noFill&&this.s.noStroke){
		//Case if there is no fill or stroke
	}else{
		this.c.moveTo(x+w,y+h);
		this.c.beginPath();
		this.c.ellipse(x,y,w,h,0,0,Math.PI*2);
		if(this.s.noFill){
			//Case if there is no fill
			this.c.strokeStyle=this.s.stroke;
			this.c.stroke();
		}
		else if(this.s.noStroke){
			//Case if there is no stroke
			this.c.fillStyle=this.s.fill;
			this.c.fill();
		}
		else{
			//Regular case
			this.c.strokeStyle=this.s.stroke;
			this.c.fillStyle=this.s.fill;
			this.c.fill();
			this.c.stroke();
		}
	}
}
simpleCanvas.prototype.point=function(x,y){
	if(!this.s.noStroke){
		//Runs if there is a stroke
		this.c.beginPath();
		this.c.ellipse(x,y,this.c.lineWidth/2,this.c.lineWidth/2,0,0,Math.PI*2);
		this.c.fillStyle=this.s.stroke;
		this.c.strokeStyle=this.s.fill;
		this.c.fill();
	}
}
simpleCanvas.prototype.line=function(x1,y1,x2,y2){
	if(!this.s.noStroke){
		//Runs if there is a stroke
		this.c.strokeStyle=this.s.stroke;
		this.c.beginPath();
		this.c.moveTo(x1,y1);
		this.c.lineTo(x2,y2);
		this.c.stroke();
	}
}
simpleCanvas.prototype.triangle=function(x1,y1,x2,y2,x3,y3){
	if(this.s.noFill&&this.s.noStroke){
		//Case if there is no fill or stroke
	}else{
		this.c.beginPath();
		this.c.moveTo(x1,y1);
		this.c.lineTo(x2,y2);
		this.c.lineTo(x3,y3);
		if(this.s.noFill){
			//Case if there is no fill
			this.c.strokeStyle=this.s.stroke;
			this.c.closePath();
			this.c.stroke();
		}
		else if(this.s.noStroke){
			//Case if there is no stroke
			this.c.fillStyle=this.s.fill;
			this.c.fill();
		}
		else{
			//Regular case
			this.c.strokeStyle=this.s.stroke;
			this.c.fillStyle=this.s.fill;
			this.c.fill();
			this.c.closePath();
			this.c.stroke();
		}
	}
}
/*
Canvas Interaction
 - resize(w,h);
*/
simpleCanvas.prototype.resize=function(w,h){
	this.width=this.ele.width=w;
	this.height=this.ele.height=h;
}
/*
Image
 - getImage(src);
 - image(image, x, y, w, h);
*/
simpleCanvas.prototype.getImage=function(src){
	var ele=new Image();
	ele.src=src;
	return ele;
}
simpleCanvas.prototype.image=function(image, x, y, w, h){
	if((w===undefined)&&(h===undefined)){
		this.c.drawImage(image, x, y);
	}else if((w===undefined)||(h===undefined)){
		throw 'simpleCanvasError: width and height must both be defined for images';
	}else{
		this.c.drawImage(image, x, y, w, h);
	}
}
