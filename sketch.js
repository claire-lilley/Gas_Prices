let gasData;
 //Setting all the start positions for the balls on the Y axis.
let speed1 = 200; 
let speed2 = 200;
let speed3 = 200;
let speed4 = 200;
let speed5 = 200;
let speed6 = 400;
let speed7 = 400;
let speed8 = 400;
let speed9 = 400;
let speed10 = 400;
//variable to choose years within the JSON
var currentYear = 0;
//variables to select the countries from the JSON data file.
var australiaData, canadaData, franceData, germanyData, italyData, japanData, mexicoData, southkoreaData, ukData, usaData = 1;

function preload(){
//referenceing the website https://www.kaggle.com/gremmn/gas-prices'+ 'csvjson.json';
  gasData = loadJSON('csvjson.json') //load data from the JSON
}

//Below is the open variables used to link with the gasdata json, [0] means the year2000. So for this it's linked to each country, In the order they show. 
function setup() { 
  createCanvas(1000,800);
  
  australiaData = gasData[0].Australia;
  canadaData = gasData[0].Canada;
  franceData = gasData[0].France;
  germanyData = gasData[0].Germany;
  italyData = gasData[0].Italy;
  japanData = gasData[0].Japan;
  mexicoData = gasData[0].Mexico;
  southkoreaData = gasData[0]['South Korea'];
  ukData = gasData[0].UK;
  usaData = gasData[0].USA;
}

function keyPressed() { //Press any key to go through the years for the data, which is being pulled through the JSON, through a variable and using the currentYear, 
  if (currentYear < 8) { // Will allow the years to only be shown up until 2008
    currentYear = currentYear + 1; // Increases year by 1 
// loads data for that year
    australiaData = gasData[currentYear].Australia;
    canadaData = gasData[currentYear].Canada;
    franceData = gasData[currentYear].France;
    germanyData = gasData[currentYear].Germany;
    italyData = gasData[currentYear].Italy;
    japanData = gasData[currentYear].Japan;
    mexicoData = gasData[currentYear].Mexico;
    southkoreaData = gasData[currentYear]['South Korea'];
    ukData = gasData[currentYear].UK;
    usaData = gasData[currentYear].USA;
  }
}

function draw(){
  background(225);
//combines current year value with strings and display on screen 
  fill(2);
  textSize(40);
  displayYear = str(2000+currentYear);
  showYear = str('Year: ' + displayYear);
  text(showYear,400,40);
  
  //The table in the top corner that shows the colour diagram for the countries
  textSize(20);
  fill(2)
  text('Colour code for the countries:', 20,30)
  textSize(11);
  fill(2)
  text('Australia',20,50);
  text('Canada', 20,61);
  text('France', 20, 72);
  text('Germany', 20,83);
  text('Italy', 20, 94);
  text('Japan', 20, 105);
  text('Mexico', 20,116);
  text('South Korea', 20,127);
  text('Uk', 20, 138);
  text('USA', 20,149)
  
//Coloured ellipses next to country names to show the colours used.
  strokeWeight(1)
  stroke(225);
  fill(14, 20, 40)
  ellipse(75,47,8)
  
  strokeWeight(1)
  stroke(225);
  fill(225,0,0)
  ellipse(75,59,8)
  
  strokeWeight(1)
  stroke(225);
  fill(42, 183, 202)
  ellipse(65,69,8)
  
  strokeWeight(1)
  stroke(225);
  fill(242, 220, 93)
  ellipse(72,79,8)
  
  strokeWeight(1)
  stroke(225);
  fill(0, 225,0)
  ellipse(50,90,8)
  
  strokeWeight(1)
  stroke(225);
  fill(164, 3, 31)
  ellipse(60,101,8)
  
  strokeWeight(1)
  stroke(225);
  fill(71, 75, 36)
  ellipse(71,112,8)
  
  strokeWeight(1)
  stroke(225);
  fill(146, 135, 121)
  ellipse(91,122,8)
  
  strokeWeight(1)
  stroke(225);
  fill(0, 31, 84)
  ellipse(45,135,8)
  
  strokeWeight(1)
  stroke(225);
  fill(252, 129, 74)
  ellipse(55,146,8)
  
  noStroke();
  moveBalls(); //This function had to be called to use it below as a seperate function. I called this move balls as thats what i wanted the balls to do.
 
}
  function moveBalls(){  
    
//1st ball Australia   
  fill(14, 20, 40);
  ellipse(100,speed1,50);
//speed 1 changes movement in the Y axis.
  if (speed1 >400){ // Moves ball back when it reaches y400
    australiaData = (-australiaData)
  }
  if (speed1 <200){ // Moves it down when it reaches y200
    australiaData = (australiaData*-1)
  }
  speed1 = speed1 + australiaData; //Moves the ball 
    
//3rd ball France
  fill(42, 183, 202);
  ellipse(300,speed2,50);
  
  if (speed2 >400){
    franceData = (-franceData)
  }
  if (speed2 <200){
    franceData = (franceData*-1)
  }
  speed2 = speed2 + franceData;

    
//5th ball Italy
  fill(0, 225,0);
  ellipse(500,speed3,50);
    
  if (speed3 >400){
    italyData = (-italyData)
  }
  if (speed3 <200){
    italyData = (italyData*-1)
  }
  speed3 = speed3 + italyData;

    
//7th ball Mexico
  fill(71, 75, 36);
  ellipse(700,speed4,50);
    
  if (speed4 >400){
    mexicoData = (-mexicoData)
  }
  if (speed4 <200){
    mexicoData = (mexicoData*-1)
  }
  speed4 = speed4 + mexicoData;
  
// 9th ball UK
  fill(0, 31, 84);
  ellipse(900,speed5,50);
    
  if (speed5 >400){
    ukData = (-ukData)
  }
  if (speed5 <200){
    ukData = (ukData*-1)
  }
  speed5 = speed5 + ukData;
    
//Bottom row
//2nd ball Canada
  fill(225,0,0); 
  ellipse(100,speed6,50);
    
  if (speed6 >800){
    canadaData = (-canadaData)
  }
  if (speed6 <400){
    canadaData = (canadaData*-1)
  }
  speed6 = speed6 + canadaData;
  
//4th ball Germany
  fill(242, 220, 93); 
  ellipse (300,speed7,50);
  
  if (speed7>800){
    germanyData = (-germanyData)
  }
  if (speed7<400){
    germanyData = (germanyData*-1)
  }
  speed7= speed7+ germanyData;

//6th ball Japan
  fill(164, 3, 31); 
  ellipse(500,speed8,50);
    
  if (speed8>800){
    japanData = (-japanData)
  }
  if (speed8<400){
    japanData = (japanData*-1)
  }
  speed8 = speed8+ japanData;
  
//8th ball South Korea
  fill(146, 135, 121); 
  ellipse(700,speed9,50);
    if (speed9>800){ 
    southkoreaData = (-southkoreaData)
    }
    if (speed9<400){
    southkoreaData = (southkoreaData*-1)
    }
    speed9 = speed9+ southkoreaData;

//10th ball USA
  fill(252, 129, 74);
  ellipse(900,speed10,50);
    if (speed10>800){
    usaData = (-usaData)
    }
    if (speed10<400){
    usaData = (usaData*-1)
    }
    speed10 = speed10+ usaData;
    
  }
  