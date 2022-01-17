const timeOutForm = document.querySelector(".time-out");
const timeList = document.querySelector(".time-out__list")
const date = new Date()

function plus(a,b) {
    return a + b;
}
function paintTimeOut(event) {
    event.preventDefault()
    const hour = event.target[0].value
    const min = event.target[1].value
    const second = event.target[2].value
    timeOutForm.classList.add("hidden");
    const li = document.createElement("li");
    let setDate = parseInt(date.getDate())
    let setHour = parseInt(date.getHours()) + parseInt(hour)
    let setMin = parseInt(date.getMinutes()) + parseInt(min)
    let setSec = parseInt(date.getSeconds()) + parseInt(second)

    if (setSec >= 60) {
        setSec = setSec - 60;
        setMin = setMin + 1;
    } else if (setMin >= 60) {
        setMin = setMin - 60;
        setHour = setHour + 1;
    } else if(setHour >= 24) {
        setHour = setHour - 24;
        setDate = setDate + 1;
    } else {
        li.innerText = `${setDate}/""${setHour}:${setMin}:${setSec}`
    }
    timeList.appendChild(li);
}

console.dir()
timeOutForm.addEventListener("submit",paintTimeOut)