const clock=document.getElementById('clock');


//console.log(date.toLocaleDateString());

setInterval(function(){
    let date = new Date();
    clock.innerHTML= date.toLocaleTimeString();
},1000)