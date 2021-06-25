var counter = document.querySelector("#counter");
var btns = document.querySelectorAll(".btn");
// console.log(btns);
var count = 0;
btns.forEach (function (btn){
    // console.log(btn);
    btn.addEventListener("click", function (event){
        // console.log(e.currentTarget.classList);
        var value = event.currentTarget.classList;
        if (value.contains("decrease")) {
            count--;
        } else if (value.contains("increase")) {
            count++;
        }else {
            count = 0;
        } 
        if (count < 0) {
            counter.style.color = "red";
        } else if (count > 0) {
            counter.style.color = "purple";
        } else {
            counter.style.color = "black";
        }
        counter.textContent = count;
     })
     
})