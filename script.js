var img = document.getElementById("img");
var u = document.querySelector("#u");
var one = document.getElementById("one");
var two = document.getElementById("two");
const st = document.getElementsByClassName("st");
const wo = document.getElementsByClassName("wo");
var card = document.getElementById("card");
var three = document.getElementById("three");
var ee = document.getElementsByClassName("ee");
var four = document.getElementById("four");
var ou = document.getElementsByClassName("ou");
var p = document.getElementById("p");
var a = document.getElementById("a");
// var inp = doscument.querySelector(".main");
function action(){
    card.style.display = "block"
    img.src = u.value;
    one.innerHTML = st.blank.value;
    two.innerHTML = wo.blank.value;
    three.innerHTML = ee.blank.value;
    four.innerHTML = ou.blank.value;
    p.style.display = "block";
    if (st.blank.value == "KartikGarg") {
        a.href = "http://127.0.0.1:5500/k.html";
    }
}