
let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)  //increase butonuna click özelliği ekledik
decreaseDOM.addEventListener("click", clickEvent)  //decrease butonuna click özelliği ekledik

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML=counter
}



