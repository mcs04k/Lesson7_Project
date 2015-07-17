/**
* Program: Recipe Display Application
* User: MichaelSutter
* Date: 2015-07-17
* Time: 07:16 PM
* Filename: script.js
* To change this template use Tools | Templates.
*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}//end of display() 
/*
$("h3").click(display);
*/

function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}
/*
$("h3").click(display2);
*/
$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
});
$("h3").hover(display2);