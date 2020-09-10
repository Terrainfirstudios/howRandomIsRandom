/***************************************************************************
************Welcome to Random Coding challange #1*****************************
********************How Random Is Random**************************************
******************************************************************************
******************************************************************************
**********************************************Coding by Terrainfir Studios****
*****************************************************************************/

/*Global variables*/
var A = 0;
var B = 0;
var C = 0;
var D = 0;
var E = 0;

/*Function to randomize global variables and place inside corresponding containers ie- word1*/
function message(){
    var A = Math.floor(Math.random()* Math.floor(1121));
    var B = Math.floor(Math.random()* Math.floor(1121));
    var C = Math.floor(Math.random()* Math.floor(1121));
    var D = Math.floor(Math.random()* Math.floor(1121));
    var E = Math.floor(Math.random()* Math.floor(1121));
    document.getElementById("word").innerHTML = A;
    document.getElementById("word1").innerHTML = B;
    document.getElementById("word2").innerHTML = C;
    document.getElementById("word3").innerHTML = D;
    document.getElementById("word4").innerHTML = E;


}