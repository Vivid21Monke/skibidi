function black() {
    let random;
    random =  Math.floor(Math.random() * 1100);
    document.getElementById("rand1").innerHTML = random;
    console.log(random)
}
document.getElementById("rand1").addEventListener("dblclick", funkcija);
let skaitlis1;
let skaitlis2;
let skaitlis3;
function funkcija() {
    skaitlis1 = Math.floor(Math.random() * (1422 - 69 + 1) ) + 69;
    skaitlis2 = Math.floor(Math.random() * (1422 - 69 + 1) ) + 69;
    skaitlis3 = Math.floor(Math.random() * (1422 - 69 + 1) ) + 69;
    document.getElementById("rand1").innerHTML = skaitlis1;
    document.getElementById("rand2").innerHTML = skaitlis2;
    document.getElementById("rand3").innerHTML = skaitlis3;
}
