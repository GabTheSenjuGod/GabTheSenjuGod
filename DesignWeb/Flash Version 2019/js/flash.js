//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
var timer;




$('#flashID').css('position','relative');

$( "#boutonDroite" ).click(function() {
    $('#flashID').animate({'left':"+=300px"},)
});

$( "#boutonGauche" ).click(function() {
    $('#flashID').animate({'left':"-=300px"},)


});

$( "#boutonChangerImage" ).click(function() {

    if ($('#flashID').attr('src') === "img/Flash2.png"){
    $('#flashID').attr('src'=== "Flash1.png")}
   else if ( $('#flashID').attr('src'=== "Flash1.png")){
       $('#flashID').attr('src'==="Flash2.png")
    }

});

$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').hide('src',"Flash1.png")

});



$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').show()
});


$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr('alt',"images flash")

});

$( "#boutonNuke" ).click(function() {

});

$("#boutonVitesseSupreme").click(function () {
    timer = setInterval()


});



$("#boutonFinVitesseSupreme").click(function () {



});




























