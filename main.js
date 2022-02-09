function setup(){
    video=createCapture(VIDEO)
    
    canvas=createCanvas(500,500)
    canvas.position(650,250)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotresults)
}
function modelLoaded(){
    console.log("model is loaded!");
}
function gotresults(result){
    if(result.length>0){
     console.log(result);
    }
}