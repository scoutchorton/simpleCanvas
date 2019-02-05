//Fullscreen? https://stackoverflow.com/questions/1125084/how-to-make-the-window-full-screen-with-javascript-stretching-all-over-the-scre

//Range from StackOverflow
function range(start, stop, step) {
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
console.log('Range function from Tadeck on StackOverflow: https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range');

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
	this.keyIsPressed=this.mouseIsPressed=this.keyFocus=this.mouseFocus=this.negativeMouse=this.keyLower=false;
	this.key=this.mouseButton=undefined;
	this.keys={};
	var thisVar=this;
	this.HEX='hex';
	this.RGB='rgb';
	this.HSL='hsl';
	this.LEFT='left';
	this.RIGHT='right';
	this.CENTER='center';
	this.mouseX=this.mouseY=0;

	//Functions
	this.resize(400,400);

	//Listening for key pressed on the canvas: https://stackoverflow.com/questions/12886286/addeventlistener-for-keydown-on-canvas
	

	document.addEventListener('mousedown', function(e){
		thisVar.targetEle=e.target;
		if(e.target===thisVar.ele){
			thisVar.keyFocus=true;
		}else{
			thisVar.keyFocus=false;
		}
	});

	document.addEventListener('keydown', function(e){
		if(thisVar.targetEle===thisVar.ele){
			thisVar.keyIsPressed=true;
			thisVar.key=e.key;
			thisVar.keyCode=e.which;
			thisVar.keys[(thisVar.keyLower)?e.key.toLowerCase():e.key]=(e.type=='keydown');
		}

		if((typeof(thisVar.keyDown)=='function')&&(thisVar.targetEle===thisVar.ele)&&(!event.repeat)){
			e.preventDefault();
			thisVar.keyDown();
		}
		
		if((typeof(thisVar.keyPressed)=='function')&&(thisVar.targetEle===thisVar.ele)&&(event.repeat)){
			e.preventDefault();
			thisVar.keyPressed();
		}
	});
	document.addEventListener('keyup', function(e){
		if(thisVar.targetEle===thisVar.ele){
			thisVar.keyIsPressed=true;
			thisVar.key=e.key;
			thisVar.keyCode=e.which;
			thisVar.keys[(thisVar.keyLower)?e.key.toLowerCase():e.key]=(e.type=='keydown');
		}

		if((typeof(thisVar.keyUp)=='function')&&(thisVar.targetEle===thisVar.ele)){
			e.preventDefault();
			thisVar.keyUp();
		}
	});

	/*mouseMoved
	document.addEventListener('mousemove',function(e){
		if(e.target===document.getElementById('demo')){
			document.getElementById('demo').innerHTML=parseInt(document.getElementById('demo').innerHTML)+1;
			console.log(parseInt(document.getElementById('demo').innerHTML));
		}
	});
	*/
	document.body.addEventListener('click',function(e){
		if(thisVar.targetEle==thisVar.ele){
			e.preventDefault();
		}
		if((typeof(thisVar.mouseClicked)=='function')&&(thisVar.targetEle==thisVar.ele)){
			thisVar.mouseClicked();
		}
	});
	document.body.addEventListener('contextmenu',function(e){
		if(thisVar.targetEle==thisVar.ele){
			e.preventDefault();
			return false;
		}
		if((typeof(thisVar.mouseClicked)=='function')&&(thisVar.targetEle==thisVar.ele)){
			thisVar.mouseClicked();
		}
	});
	document.body.addEventListener('mouseup',function(e){
		if(thisVar.targetEle==thisVar.ele){
			thisVar.mouseIsPressed=false;
		}
		if((typeof(thisVar.mouseClicked)=='function')&&(thisVar.targetEle==thisVar.ele)){
			e.preventDefault();
			thisVar.mouseReleased();
		}
	});
	document.body.addEventListener('mousedown',function(e){
		if(thisVar.targetEle==thisVar.ele){
			thisVar.mouseIsPressed=true;
			thisVar.mouseButton=[thisVar.LEFT,thisVar.CENTER,thisVar.RIGHT][e.button];
		}
		if((e.button==1)&&(thisVar.mouseFocus)){
			e.preventDefault();
		}
		if((typeof(thisVar.mousePressed)=='function')&&(thisVar.targetEle==thisVar.ele)){
			e.preventDefault();
			thisVar.mousePressed();
		}
	});
	document.body.addEventListener('mousemove',function(e){
		//mouseX and mouseY coordinate update
		//Derived from https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var r=thisVar.ele.getBoundingClientRect();
		//console.log(thisVar.negativeMouse, thisVar.mouseFocus);
		if(thisVar.negativeMouse){
			thisVar.mouseX=e.clientX-r.left;
			thisVar.mouseY=e.clientY-r.top;
		}else if((!thisVar.negativeMouse)&&thisVar.mouseFocus){
			var x=e.clientX-r.left;
			thisVar.mouseX=(x<0)?0:x;
			thisVar.mouseY=e.clientY-r.top;
		}

		if((typeof(thisVar.mouseMoved)=='function')&&(thisVar.targetEle==thisVar.ele)){
			thisVar.mouseMoved();
		}
		if((typeof(thisVar.mouseDragged)=='function')&&(thisVar.targetEle==thisVar.ele)&&(thisVar.mouseIsPressed)){
			thisVar.mouseDragged();
		}
	});
	
		console.log('Function for mouseX and mouseY is derived from: https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/');
	this.ele.addEventListener('mouseout',function(e){
		if(e.target===thisVar.ele){
			thisVar.mouseFocus=false;
		}
		if(typeof(thisVar.mouseOut)=='function'){
			thisVar.mouseOut();
		}
	});
	this.ele.addEventListener('mouseover',function(e){
		if(e.target===thisVar.ele){
			thisVar.mouseFocus=true;
		}
		if(typeof(thisVar.mouseOver)=='function'){
			thisVar.mouseOver();
		}
	});

	//Functions that users define (draw, keyPressed, etc.)
	this.d=setInterval(function(){
		if(typeof(thisVar.draw)=='function'){
			thisVar.draw();
		}
	},1000/this.s.frameRate);
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
	- color(i1, i2, i3, i4);
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
simpleCanvas.prototype.fill=function(i1, i2, i3, i4){
	i1=(i1===undefined)?'abc123':i1;
	tempi1=i1;
	i1=i1.toString();
	if(((this.s.colorMode==='hsl')&&(i1.substring(0,3)==='hsl'))||((this.s.colorMode==='rgb')&&((i1.substring(0,3)==='rgb')||(i1.substring(0,4)==='rgba')))){
		this.s.fill==i1;
	}else{
		i1=(i1==='abc123')?undefined:i1;
		i1=tempi1;
		this.s.fill=this.color(i1, i2, i3);
	}
	this.s.noFill=false;
}
simpleCanvas.prototype.stroke=function(i1, i2, i3, i4){
	i1=(i1===undefined)?'abc123':i1;
	tempi1=i1;
	i1=i1.toString();
	if(((this.s.colorMode==='hsl')&&(i1.substring(0,3)==='hsl'))||((this.s.colorMode==='rgb')&&((i1.substring(0,3)==='rgb')||(i1.substring(0,4)==='rgba')))){
		this.s.stroke==i1;
	}else{
		i1=(i1==='abc123')?undefined:i1;
		i1=tempi1;
		this.s.stroke=this.color(i1, i2, i3);
	}
	this.s.noStroke=false;
}
simpleCanvas.prototype.background=function(i1, i2, i3){
	i1=(i1===undefined)?'abc123':i1;
	tempi1=i1;
	i1=i1.toString();
	this.c.clearRect(0,0,this.width,this.height);
	if(((this.s.colorMode==='hsl')&&(i1.substring(0,3)==='hsl'))||((this.s.colorMode==='rgb')&&((i1.substring(0,3)==='rgb')||(i1.substring(0,4)==='rgba')))){
		this.c.fillStyle=this.ele.background=i1;
	}else{
		i1=tempi1;
		i1=(i1==='abc123')?undefined:i1;
		this.c.fillStyle=this.ele.background=this.color(i1, i2, i3);
	}
	this.c.beginPath();
	this.c.rect(0,0,this.width,this.height);
	this.c.fill();
}
simpleCanvas.prototype.color=function(i1, i2, i3){
	i1=(i1===undefined)?255:i1;
	i2=(i2===undefined)?255:i2;
	i3=(i3===undefined)?255:i3;
	if(this.s.colorMode==="rgb"){
		return(`rgb(${i1}, ${i2}, ${i3})`);
	}else if(this.s.colorMode==="hex"){
		i1=(i1===255)?"ff":i1;
		i2=(i2===255)?"ff":i2;
		i3=(i3===255)?"ff":i3;
		if((i2==="ff")&&(i3==="ff")){
			console.log(toString(i1).substring(0,1)==='#');
			console.log(i1);
			if(toString(i1).substring(0,1)==="#"){
				return(i1);
			}else{
				return("#"+i1);
			}
		}else{
			if(i1.substring(0,1)==="#"){
				return(`${i1}${i2}${i3}`);
			}else{
				return(`#${i1}${i2}${i3}`);
			}
		}
	}else if(this.s.colorMode==="hsl"){
		i2=(i2>100)?100:i2;
		i3=(i3>100)?100:i3;
		return(`hsl(${i1}, ${i2}%, ${i3}%)`);
	}
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
