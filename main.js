function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/l-5XD4mCj/model.json",modelReady);
}

function modelReady(){
    console.log("modelReady");
    classifer.classify(gotResults);
}

var dog=0;
var cat=0;
var lion=0;
var cow=0;

function gotResults(errors, result){
    if(errors){
        console.log(errors);
    }else{
        console.log(result);
    

    red=Math.floor(Math.random() *255) +1;
    green=Math.floor(Math.random() *255) +1;
    blue=Math.floor(Math.random() *255) +1;

    document.getElementById("result_label").innerHTML=result[0].label;
    document.getElementById("result_label").style.color="rgb("+red+", "+green+", "+blue+")";

    document.getElementById("result_count").innerHTML="detected dog"+dog+"detected cat"+cat+"detected lion"+lion+"detected cow"+cow;
    document.getElementById("result_count").style.color="rgb("+red+", "+green+", "+blue+")";

    img=document.getElementById("image");

    if(result[0].label=="barking"){
        img.src="download.jpg";
        dog=dog+1;
    }else if(result[0].label=="meowing"){
        img.src="download(1).jpg";
        cat=cat+1;
    }else if(result[0].label=="roar"){
        img.src="download(2).jpg";
        lion=lion+1;
    }else if(result[0].label=="mooing"){
        img.src="download.png";
        cow=cow+1;
    }else{
        img.src="43-431540_listen-vector-hd-png-download.png";
    }
}}