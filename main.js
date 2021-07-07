

Webcam.set({
    width : 350,
    height :300,
    image_format : 'png',
    png_quality : 90
});

var camera = document.getElementById("webcam_output");

Webcam.attach('#webcam_output');

function TakeSnapshot(){
    Webcam.snap(function (uri){
        document.getElementById("photo_output").innerHTML = '<img id = "output" src="'+uri+'"/>';
    });
}
console.log("ml5 version : ", ml5version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZcTmM1RDD/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}