const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sunrise1.png ");
    getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    
    if (backgroundImg) {
        background(backgroundImg);
        strokeWeight(2);
        stroke("green");
        fill("yellow");
        textFont("New York Times")
        textSize(40);
        if (hour > 12) {
            text("Time: " + hour % 12 + ":" + min + " PM", 20, 40);
        } else if (hour === 0) {
            text("Time: 12"  + ":" + min + "AM", 20, 40);
        } else {
            text("Time: " + hour  + ":" + min + " AM", 20, 40);
        }
    }
    getBackgroundImg();

    Engine.update(engine);

    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
    var responeJSON = await response.json();
    //"datetime":"2021-05-19T19:02:13.714315+05:30"

    var dateTime = responeJSON.datetime;
    hour = dateTime.slice(11, 13);
    min = dateTime.slice(14, 16);
    
    if (hour >= 04 && hour <= 06) {
        bg = "sunrise1.png";
    } else if (hour >= 06 && hour <= 08) {
        bg = "sunrise2.png";
    } else if (hour >= 08 && hour <= 10) {
        bg = "sunrise3.png";
    } else if (hour >= 10 && hour <= 12) {
        bg = "sunrise4.png";
    } else if (hour >= 12 && hour <= 15) {
        bg = "sunrise5.png";
    } else if (hour >= 15 && hour <= 17) {
        bg = "sunrise6.png";
    } else if (hour >= 17 && hour <= 19) {
        bg = "sunset7.png";
    } else if (hour >= 19 && hour <= 21) {
        bg = "sunset8.png";
    } else if (hour >= 21 && hour <= 23) {
        bg = "sunset9.png";
    } else if (hour >= 23 && hour == 00) {
        bg = "sunset10.png";
    } else if (hour == 00 && hour <= 03) {
        bg = "sunset11.png";
    } else {
        bg = "sunset12.png";
    }


    backgroundImg = loadImage(bg);

}
