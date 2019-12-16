
var input = $( "input:reset" );
var Clic = false;
var id1;
var id2;
var src1;
var src2;
var caselDone = false;
var tabeImg = [false,false,false,false,false,false,false,false,false];




$(".img-fluid").click(function () {

    if ( Clic === false){
        id1 = $(this).attr("id");
        src1 = $(this).attr("src");
        Clic = true;
    }
    else if (Clic === true){
        id2 = $(this).attr("id");
        src2 = $(this).attr("src");
        Clic = false;
    }

});


$("#boutonRecommencer").click(function () {
    while (!caselDone){
        var nbAleatoire = (Math.floor(Math.random()*8)+1);
        if (tabeImg[nbAleatoire] === false);{
            tabeImg[nbAleatoire] === true;
            $("#image1").attr("src",+ nbAleatoire +"jpg");
            caselDone = true;
        }
    }



    });

$("#1.jpg").click(function () {

});

$("#2.jpg").click(function () {

});

$("#3.jpg").click(function () {

});

$("#4.jpg").click(function () {

});

$("#5.jpg").click(function () {

});

$("#7.jpg").click(function () {

});


$("#8.jpg").click(function () {

});


$("#9.jpg").click(function () {

});

