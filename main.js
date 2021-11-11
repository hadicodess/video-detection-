video = ""; 
object=[]; 
status = "";

function preload() 
{
     video = createVideo("video.mp4"); 
     video.hide(); 
}  
function setup() 
{
    canvas = createCanvas(480, 380); 
    canvas.center(); 
} 
function draw() 
{
    image(video ,0, 0, 480, 380);   
    if(status != "") 
    {
objectDetector.detect(video, gotResult); 
for(i = 0; i <  object.length;  i++) 
{
document.getElementById("status").innerHTML = "Status : detected objects" 
document.getElementById ("number_of_objects").innerHTML = "Number of Object detected are :"+ object.length;  

fill("blue"); 
percent = floor(object[i].confidence * 100 ); 
text(object[i].label + ""+ percent + "%", object[i].x + 15, object[i].y + 15); 
noFill(); 
stroke("blue"); 
rect(object[i].x, object[i].y, object[i].width, object[i].height);  
}

    }
   
};  

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "status : Detecting Object"; 
} 
function modelLoaded(){
    console.log("Model Loaded"); 
    status = true; 
    video.loop(); 
    video.speed(1); 
    video.volume(0); 
}   
function gotResult(results, error ){
if(error) 
{
console.log(error);  
} 
console.log(results); 
object= results; 
} 
