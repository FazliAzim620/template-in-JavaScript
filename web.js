"use strict"

function tourprice() {

    document.getElementById('two').style = "display:inline;";

    document.getElementById('first').style.display = "none";
}

function backfunction() {
    document.getElementById('first').style.display = "inline";
    document.getElementById('two').style.display = "none";
}
// first card funtion end
// second card funtion start
function tourprice1() {

    document.getElementById('secondback').style = "display:inline;";

    document.getElementById('second').style.display = "none";
}

function backfunction1() {
    document.getElementById('second').style.display = "inline";
    document.getElementById('secondback').style.display = "none";
}

// second card function end
// ************** third card function start**************
function tourprice2() {

    document.getElementById('thirdback').style = "display:inline;";

    document.getElementById('third').style.display = "none";
}

function backfunction2() {
    document.getElementById('third').style.display = "inline";
    document.getElementById('thirdback').style.display = "none";
}
// ************** third card function End ***************

// var x;
// if (x != true) {
//     window.onscroll = function() {
//         scrollfunction()
//     };
// }


// function scrollfunction() {
//     if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {

//         x = confirm("hi welcome");


//     }
// }