 

var camera;
Webcam.set({
  height: 300,
  width: 350,
  image_format: 'png',
  png_quality: 90
});
 
console.log("ml5 version:",ml5.version);
camera= document.getElementById("cam");
Webcam.attach(camera);

function takeASnapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML= '<img id="captured_image"src="'+data_uri+'">';

    });
}
var classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}