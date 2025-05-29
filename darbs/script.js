function black() {
    let random;
    random =  Math.floor(Math.random() * 1100);
    document.getElementById("rand1").innerHTML = random;
    console.log(random)
}
document.getElementById("rand1").addEventListener("dblclick", funkcija);
document.getElementById("rand2").addEventListener("dblclick", funkcija2);
document.getElementById("rand3").addEventListener("dblclick", funkcija3);
let skaitlis1;
let skaitlis2;
let skaitlis3;
function funkcija() {
    skaitlis1 = Math.floor(Math.random() * (1422 - 69 + 1) ) + 69;
    document.getElementById("rand1").innerHTML = skaitlis1;
}
function funkcija2() {
    skaitlis2 = Math.floor(Math.random() * (1422 - 69 + 1) ) + 69;
    document.getElementById("rand2").innerHTML = skaitlis2;
}
function funkcija3() {
    skaitlis3 = Math.floor(Math.random() * (1422 - 69 + 1) ) + 69;
    document.getElementById("rand3").innerHTML = skaitlis3;
}
