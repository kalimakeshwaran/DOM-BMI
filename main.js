let button=document.getElementById("btn");
button.addEventListener("click",myFunction)
function myFunction(){
 let  height1=document.getElementById("height").value;
 let weight1=document.getElementById("weight").value;
 let bmi=(weight1/height1/height1)*10000 ;
 if(bmi<18){
    document.getElementById("demo").innerText="normal";
    document.getElementById("demo").style.color="yellow";

}
else if(bmi>=18 && bmi<25){

 document.getElementById("demo").innerText="good";
 document.getElementById("demo").style.color="green";
}
else {
    document.getElementById("demo").innerText="over weight";
    document.getElementById("demo").style.color="red";
}  
}
