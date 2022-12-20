console.log('hi');

// let userInput=document.querySelector('.userInput').value.toLowerCase()
let potentialChoise=["rock","paper","scissors"]
let getComputerChoice=potentialChoise[Math.floor(Math.random()*3)]
console.log(`The PC has chosen: ${getComputerChoice}`);

const getUserChoice=(userInput)=>{
  userInput=userInput.toLowerCase()
  if (userInput==='cheatcode'){
    console.log('user has chosen to use cheats')
    return userInput
  }else{
  if (userInput==='rock' || userInput ==='paper' || userInput ==='scissors') {
    console.log(`user has chosen ${userInput}`)
    return userInput
  }else{console.log('wrong input')}
}}

let determineWinner=(userChoice,computerChoice)=>{
   if (userChoice==='cheatcode'){
  return "User has won using cheats"
  }if (userChoice===computerChoice){
  return 'There is a tie'
}else if(userChoice==='rock'){
  if (computerChoice==='paper'){
    return 'PC has won'
  }else if(computerChoice==='scissors'){
    return 'User has won'
 }
}else if(userChoice==='scissors'){
  if (computerChoice==='paper'){
  return 'User has won'
}else if (computerChoice==='rock'){return 'PC has won'
}
}else if(userChoice==='paper'){
  if(computerChoice==='rock'){
    return 'User has won'
  }else if(computerChoice==='scissors'){
    return 'PC has won'
  }
}
}


let userChoice=getUserChoice('cheatcode')

let playGame=()=>{
  
console.log(determineWinner(userChoice,getComputerChoice))
}
playGame()
