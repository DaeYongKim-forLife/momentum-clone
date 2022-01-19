const userForm = document.querySelector(".user-form");
const score = document.querySelector(".score")
const result = document.querySelector(".result")

function handleTovalue(value) {
  value.preventDefault()
  const range = value.target[0].value;
  const guessNum = value.target[1].value;
  const machineNum = Math.ceil(Math.random() * range)
  
  handleToScore(guessNum,machineNum)
  handleToResult(guessNum,machineNum)
}

function handleToScore(guessNum,machineNum) {
  score.innerText = `You chose:${guessNum},the machine chose:${machineNum}`
}
function handleToResult(guessNum, machineNum) {
  console.log(guessNum, machineNum)
  if (guessNum == machineNum) {
    result.innerText = `You win`
  } else {
    result.innerText = `You lose`
  };
}


userForm.addEventListener("submit", handleTovalue);

