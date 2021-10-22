noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, gotPoses);
poseNet.on('pose', gotPoses);
}

function draw(){
background('grey');
textSize(difference);
fill('pink');
text("Saptarshi", noseX, noseY);
document.getElementById("text").innerHTML = "The font size of the text is " + difference + "px";
}

function modelLoaded(){
console.log("PoseNet is initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose X- " + noseX + " Nose Y- " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("Left Wrist X- " + leftWristX + "px Right Wrist X- " + rightWristX + "px Difference is- " + difference + "px");
}
}