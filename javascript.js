/*
 * Cytonn Technologies
 *
 * @author: Hashim Amani <hamani@cytonn.com>
 *
 * Project: Javascript_events.
 *
 */

// javascript_functions 



function myFunction() {
    alert("This document is now being printed");
}

function resizeFunction() {
    alert("You have changed the size of the browser window!");
}
function focusFunction() {
    document.getElementById("myInput").style.background = "yellow";
}
function blurFunction() {
    document.getElementById("myInput").style.background = "red";
}
function inputFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("p1").innerHTML = "You wrote: " + x;
}
function resetFunction() {
    alert("The form was reset");
}
function submitFunction() {
	
    alert("The form was submitted");  
}
function pFunction() {
    document.getElementById("paragraph").style.color = "white";
}
function pmouseOver() {
    document.getElementById("paragraph").style.color = "yellow";
}
function pmouseOut() {
    document.getElementById("paragraph").style.color = "red";
}
function dbfunction(){
	document.getElementById("paragraph").style.color = "red";
}
function dbFunction() {
    document.getElementById("p2").innerHTML = "You double clicked me";
}
function keydownFunction() {
    document.getElementById("keyInput").style.backgroundColor = "yellow";
}

function keyupFunction() {
    document.getElementById("keyInput").style.backgroundColor = "green";
}

function copyFunction() {
    document.getElementById("p3").innerHTML = "You copied text!"
}

function areaFunction() {
    document.getElementById("p4").innerHTML = "You pasted text!";
}

