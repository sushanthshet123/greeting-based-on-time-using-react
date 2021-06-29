import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = " ";
let stylecss = {};

if(curDate >= 1 && curDate <12 ){
    greeting = "Good Morning!";
    stylecss.color = "green";
}
else if(curDate >=12 && curDate < 19){
    greeting = "Good Evening";
    stylecss.color = "orange";
}
else{
    greeting = "Good Night"
    stylecss.color = "dark blue"
}

ReactDOM.render(
    <>
    <div className="heading">
    <h1>hello sir <span style ={stylecss}>{greeting}</span></h1>
    </div>
    </>,
    document.getElementById("root")
);