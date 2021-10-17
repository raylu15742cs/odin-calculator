var x = document.getElementsByTagName("button");
var y = document.getElementById('answers');
var t = document.getElementById('running');
let z = 0;
let a = 0;
let firstv = 0;
let operator = 0;
let secondv = 0;
let result = 0;
while (z <= 8 ){
    let mess = x.item(z).innerHTML;
    x.item(z).addEventListener("click",function(){
        if(!isNaN(mess)){
            y.innerHTML += mess;
            t.innerHTML += mess;
        };
    });
    //document.getElementById('answer').innerHTML += x.item(z).innerHTML;
    console.log(x.item(z).innerHTML);
    z += 1;
}
x.item(9).addEventListener('click',function(){
    y.innerHTML = "";
    t.innerHTML = "";
})
x.item(10).addEventListener('click',function() {
    t.innerHTML += "+";
    firstv = y.innerHTML;
    operator = 1;
    empty();
})
x.item(11).addEventListener('click',function() {
    t.innerHTML += "-";
    firstv = y.innerHTML;
    operator = 2;
    empty();
})
x.item(12).addEventListener('click',function() {
    t.innerHTML += "*";
    firstv = y.innerHTML;
    operator = 3;
    empty();
})
x.item(13).addEventListener('click',function() {
    t.innerHTML += "/";
    firstv = y.innerHTML;
    operator = 4;
    empty();
})
const empty = function(){
    y.innerHTML = "";
}

x.item(14).addEventListener('click',function(){
    secondv = y.innerHTML;
    if(operator == 1){
        result = Number(firstv) + Number(secondv);
    } else if (operator == 2) {
        result = Number(firstv) - Number(secondv); 
    } else if (operator == 3) {
        result = Number(firstv) * Number(secondv);
    } else if (operator == 4) {
        result = Number(firstv) / Number(secondv);
    } else {
        y.innerHTML = " u stupid"
    }
    y.innerHTML = result;
})