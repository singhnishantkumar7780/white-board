let pencilElement=document.querySelector("#pencil");
let eraserElement=document.querySelector("#eraser")
let stickynoteElement=document.querySelector("#stickynote")
let uploadElement=document.querySelector("#upload")
let downloadElement=document.querySelector("#download")
let undoElement=document.querySelector("#undo")
let redoElement=document.querySelector("#redo")

pencilElement.addEventListener("click", function tellPencil(){
console.log("pencil is clicked");
});

eraserElement.addEventListener("click", function telleraser(){
    console.log("eraser is clicked");
});

stickynoteElement.addEventListener("click", function tellstickynote(){
        console.log("stickynote is clicked");
}) ; 

uploadElement.addEventListener("click", function tellupload(){
    console.log("upload is clicked");
    
});


downloadElement.addEventListener("click", function telldownload(){
        console.log("download is clicked");
        
    
});

undoElement.addEventListener("click", function tellundo(){
    console.log("undo is clicked");
});

redoElement.addEventListener("click", function tellredo(){
    console.log("redo is clicked");
});


const canvas=document.querySelector("#board");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// for writing in canvas
let tool=canvas.getContext("2d");

// first path

// start drawing on canvas
// tool.beginPath();  
// // starting point of line 
// tool.moveTo(40,15);  
// // ending point of line
// tool.lineTo(400,250); 
// // we can add multiple line by just adding starting and ending point just like above;
// tool.stroke();

// tool.closePath();
// // for adding colours to the pencil
// tool.strokeStyle="blue";

// second path

// tool.beginPath();
// // for adding the width the of the line;
// tool.lineWidth=5;
// // starting point
// tool.moveTo(10,20);
// // ending point
// tool.lineTo(200,150);
// tool.stroke();
let toolbar=document.querySelector(".toolbar");
let isDrawing=false;

canvas.addEventListener("mousedown",function (e){
   let sidx=e.clientX;
   let sidy=e.clientY;
   let toolbarheight=getYdelta();
   tool.beginPath();
   tool.moveTo(sidx,sidy-toolbarheight);
   isDrawing=true;
})

canvas.addEventListener("mousemove",function (e){
    if(isDrawing==false){return;};
  let endx=e.clientX;
  let endy=e.clientY;
  let toolbarheight=getYdelta()
  tool.lineTo(endx,endy-toolbarheight);
  tool.stroke();
    
})
canvas.addEventListener("mouseup",function(e){
    isDrawing=false;

})

function getYdelta(){
    let heightoftoolbar=toolbar.getBoundingClientRect().height;
    return heightoftoolbar;
}