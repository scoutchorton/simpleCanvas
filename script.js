function eId(i){return document.getElementById(i);};

window.onload=function(){
	var c=new simpleCanvas('c');

	/*
	//Android looking robot
	c.s.fill="#000000";
	c.ellipse(200,100,50,50);
	c.rect(150,100,100,100);
	c.s.stroke="#ffffff";
	c.c.lineWidth=10;
	c.point(175,75);
	c.point(215,75);
	*/

	/*n = 0;
	setInterval(function() {
		n++;
		c.rect(0,0,c.width,c.height);
		c.rect(
		Math.abs(c.width/2 * Math.sin(n * Math.PI / 180)),
		Math.abs(c.height/2 * Math.sin(n * Math.PI / 180)),
		Math.abs(c.width/2 * Math.sin(n * Math.PI / 180)),
		Math.abs(c.height/2 * Math.sin(n * Math.PI / 180)));
	}, 10);*/

	n=0;
	t=1;
	var img=c.getImage('./images/shortLogo.png');
	//c.negativeMouse=true;

	var pos=[(c.width/2)-(img.width/10),(c.height/2)-(img.height/10)];
	c.mouseDragged=function(){
		pos=[c.mouseX-(img.width/10),c.mouseY-(img.height/10)];
	};
	
	c.draw=function(){
		//c.background("FF", "7f", "00");
		//c.fill("00", "7f", "ff");
		n+=t;
		if(n>255){
			t=-1;
		}else if(n<0){
			t=1;
		}
		c.background(255-n, n, 0);
		c.fill(0, n, 255-n);
		c.noStroke();
		c.triangle(5,5,c.width-5,5,5,c.height-5);
		c.image(img,pos[0],pos[1],248,124);
		//console.log(c.mouseFocus, c.keyFocus);
	};

	//c.rect(5,5,c.width-10,c.height-10);
	//c.ellipse(c.width/2,c.height/2,c.width/3,c.height/3);
}
