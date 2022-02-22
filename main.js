Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot() {
Webcam.snap(function(data_url) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
});
}

console.log('m15 version:', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/p5egBIjxE/model.json',modelLoaded);