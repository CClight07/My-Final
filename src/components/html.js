import React, { Component } from 'react';
var button = document.getElementById ("content");
var link = document.getElementById ("open");

button.onclick = function myFunction(){
    if(link.className === ("oop")){
        button.className = "";
        link.innerHTML = "Html Code";
    }
    else{
        button.className = "oop";
        link.innerHTML = "close";
    }
};
