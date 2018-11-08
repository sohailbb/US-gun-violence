var table = [];
var table;
var slider1;
var slider2;
var month = 1;
var months = [];
var noSelect = 1;
var n_killed;
var count;



function preload() {
	for (var i = 1; i <= 12; i++){
		if (i < 10) {
  			table[i] = loadTable("/csv/stage2.0"+i+".2017.csv","csv","header");
		}
  		else {
  			table[i] = loadTable("/csv/stage2."+i+".2017.csv","csv","header");
  		}
  		switch (i) {
  			case 1:
  			months[i] = "January";
  			break;
  			case 2:
  			months[i] = "February";
  			break;
  			case 3:
  			months[i] = "March";
  			break;
  			case 4:
  			months[i] = "April";
  			break;
  			case 5:
  			months[i] = "May";
  			break;
  			case 6:
  			months[i] = "June";
  			break;
  			case 7:
  			months[i] = "July";
  			break;
  			case 8:
  			months[i] = "August";
  			break;
  			case 9:
  			months[i] = "September";
  			break;
  			case 10:
  			months[i] = "October";
  			break;
  			case 11:
  			months[i] = "November";
  			break;
  			case 12:
  			months[i] = "December";
  			break;
  		}
	}

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	// console.log("width is " + windowWidth)
	// console.log("height is " + windowHeight)
  noStroke();
  noLoop();
  textSize(16);

  slider2 = createSlider(0,5,1);
  slider2.position(windowWidth*0.02, 0.3*windowHeight);


  slider1 = createSlider(1, 12, 0);
  slider1.position(windowWidth*0.02, 0.2*windowHeight);
}


function draw(){

  	month = slider1.value();

  	strokeWeight(1);
  	background(0,0,0);

 	var rows = table[month].getRows();

   fill(255,255,255);

   textSize(16);
   text('Month', windowWidth * 0.05, 0.19* windowHeight);

   text('Death Toll', windowWidth * 0.04, 0.285* windowHeight);

   textSize(30);
   text("US Gun Violence - " + months[month] + " 2017", windowWidth/2 - windowWidth*0.145, 0.07*windowHeight);

    if (slider2.value() == 0) {
    	noSelect = 1;
    	textSize(10);
	   	text('No Deaths', windowWidth * 0.05, 0.34* windowHeight);
    }
    else if (slider2.value() == 1) {
    	noSelect = 0;
    	textSize(10);
	   	text('1 Death', windowWidth * 0.05, 0.34* windowHeight);
    }
    else if (slider2.value() == 2) {
    	noSelect = 0;
    	textSize(10);
	   	text('2 Deaths', windowWidth * 0.05, 0.34* windowHeight);
    }
    else if (slider2.value() == 3) {
    	noSelect = 0;
    	textSize(10);
	   	text('3 Deaths', windowWidth * 0.05, 0.34* windowHeight);
    }
    else if (slider2.value() == 4) {
    	noSelect = 0;
    	textSize(10);
	   	text('4 Deaths', windowWidth * 0.05, 0.34* windowHeight);
    }
    else if (slider2.value() == 5) {
    	noSelect = 0;
    	textSize(10);
	   	text('More than 4 Deaths', windowWidth * 0.035, 0.34* windowHeight);
    }

  	count = 0;

  for (var r = 0; r < rows.length; r++){

	if(( rows[r].get("latitude"))==""){
		continue;
	}
		
  	var longitude = rows[r].get("longitude");
  	var latitude = rows[r].getNum("latitude");
  	n_killed = rows[r].get("n_killed");

  	var mouseXMin = mouseX - 25;
  	var mouseXMax = mouseX + 25;

  	var x = map(longitude,-180,180,- width/2.88,width/0.288);
    var y = map(latitude,-90,90,height/0.293,-height/1.2);

    var distanceX = mouseX - x;
    var distanceY = mouseY - y;



    if (n_killed > 0) {
    	// count++;
    	// console.log(count);
    }

    if (n_killed > 4 && (slider2.value() == 5)){
    	count++;
    	// console.log(count);
    	noSelect = 0;
    	fill(255,0,0,60);

	    if (abs(distanceX) < 10 && abs(distanceY) < 10) {
	    	ellipse(x,y,70,70);
	    }
	    else if (abs(distanceX) < 20 && abs(distanceY) < 20) {
	    	ellipse(x,y,60,60);
	    }
	    else if (abs(distanceX) < 40 && abs(distanceY) < 40) {
	    	ellipse(x,y,50,50);
	    }
	    else if (abs(distanceX) < 60 && abs(distanceY) < 60) {
	    	ellipse(x,y,45,45);
	    }
	    else {
	    	ellipse(x,y,40,40);
	    }
    }

    if (n_killed == 4 && (slider2.value() == 4)){
    	count++;
    	// console.log(count);
    	noSelect = 0;
    	fill(255,0,0,60);

	    if (abs(distanceX) < 10 && abs(distanceY) < 10) {
	    	ellipse(x,y,60,60);
	    }
	    else if (abs(distanceX) < 20 && abs(distanceY) < 20) {
	    	ellipse(x,y,50,50);
	    }
	    else if (abs(distanceX) < 40 && abs(distanceY) < 40) {
	    	ellipse(x,y,40,40);
	    }
	    else if (abs(distanceX) < 60 && abs(distanceY) < 60) {
	    	ellipse(x,y,35,35);
	    }
	    else {
	    	ellipse(x,y,30,30);

	    }
    }

    if (n_killed == 3 && (slider2.value() == 3)){
    	count++;
    	// console.log(count);
    	noSelect = 0;
    	fill(255,0,0,60);

		if (abs(distanceX) < 10 && abs(distanceY) < 10) {
	    	ellipse(x,y,50,50);
	    }
	    else if (abs(distanceX) < 20 && abs(distanceY) < 20) {
	    	ellipse(x,y,40,40);
	    }
	    else if (abs(distanceX) < 40 && abs(distanceY) < 40) {
	    	ellipse(x,y,30,30);
	    }
	    else if (abs(distanceX) < 60 && abs(distanceY) < 60) {
	    	ellipse(x,y,25,25);
	    }
	    else {
 	    	ellipse(x,y,20,20);

	    }
    }

    if (n_killed == 2 && (slider2.value() == 2)){
    	count++;
    	// console.log(count);
    	noSelect = 0;

    	fill(255,0,0,60);

	    if (abs(distanceX) < 10 && abs(distanceY) < 10) {
	    	ellipse(x,y,40,40);
	    }
	    else if (abs(distanceX) < 20 && abs(distanceY) < 20) {
	    	ellipse(x,y,30,30);
	    }
	    else if (abs(distanceX) < 40 && abs(distanceY) < 40) {
	    	ellipse(x,y,25,25);
	    }
	    else if (abs(distanceX) < 60 && abs(distanceY) < 60) {
	    	ellipse(x,y,20,20);
	    }
	    else {
    		ellipse(x,y,15,15);

	    }
    }

    if (n_killed == 1 && (slider2.value() == 1)){
    	count++;
    	// console.log(count);
    	noSelect = 0;
    	fill(255,0,0,60);

    	if (abs(distanceX) < 10 && abs(distanceY) < 10) {
	    	ellipse(x,y,30,30);
	    }
	    else if (abs(distanceX) < 20 && abs(distanceY) < 20) {
	    	ellipse(x,y,25,25);
	    }
	    else if (abs(distanceX) < 40 && abs(distanceY) < 40) {
	    	ellipse(x,y,20,20);
	    }
	    else if (abs(distanceX) < 60 && abs(distanceY) < 60) {
	    	ellipse(x,y,15,15);
	    }
	    else {
	    	ellipse(x,y,10,10);

	    }
    }

    if (n_killed == 0 && (slider2.value() == 0)) {
    	count++;
    	// console.log(count);
   		fill(255,255,255,60);

    	if (abs(distanceX) < 10 && abs(distanceY) < 10) {
	    	ellipse(x,y,20,20);
	    }
	    else if (abs(distanceX) < 20 && abs(distanceY) < 20) {
	    	ellipse(x,y,15,15);
	    }
	    else if (abs(distanceX) < 40 && abs(distanceY) < 40) {
	    	ellipse(x,y,10,10);
	    }
	    else if (abs(distanceX) < 60 && abs(distanceY) < 60) {
	    	ellipse(x,y,5,5);
	    }
	    else {
	    	ellipse(x,y,3,3);
	    }
    }

}
   // console.log(count);
   fill(255,255,255);
   textSize(25);
   if (count == 1) {
   	   text(count + " Case", windowWidth/2 - windowWidth*0.035, 0.8*windowHeight);
   }
   else {
   		text(count + " Cases", windowWidth/2 - windowWidth*0.035, 0.8*windowHeight);
	}
}



function windowResized() {
   resizeCanvas(windowWidth, windowHeight);

  slider1.remove();
  slider2.remove();
  slider2 = createSlider(0,5,1);
  slider2.position(windowWidth*0.02, 0.3*windowHeight);


  slider1 = createSlider(1, 12, 0);
  slider1.position(windowWidth*0.02, 0.2*windowHeight);
}


function mouseMoved() {
  redraw();
  return false;
}



