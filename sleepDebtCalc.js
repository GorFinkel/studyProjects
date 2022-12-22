let day={}
day[1]={name:'monday',sleep:4}
day[2]={name:'tuesday',sleep:5}
day[3]={name:'wensday',sleep:5}
day[4]={name:'thursday',sleep:6}
day[5]={name:'friday',sleep:7}
day[6]={name:'saturday',sleep:12}
day[7]={name:'sunday',sleep:3}
console.log(day[1])
console.log(day)
function getSleepHours (weekday) {
  switch (weekday){
    case day[1].name:
    return day[1].sleep;
    break;
    case day[2].name:
        return day[2].sleep;
    break;
      case day[3].name:
    return day[3].sleep;
    break;
      case day[4].name:
    return day[4].sleep;
    break;
      case day[5].name:
    return day[5].sleep;
    break;
      case day[6].name:
    return day[6].sleep;
    break;
      case day[7].name:
    return day[7].sleep;
  }
}

console.log(getSleepHours(day[1].name))

function getActualSleepHours (day){
let totalSleepTime=0;
for (let num in day){
totalSleepTime+=day[num].sleep}
return totalSleepTime

}

console.log(getActualSleepHours(day))

function getIdealSleepHours(){
  let idealHours=7
  return 7*7
}

console.log(getIdealSleepHours())

function calculateSleepDebt () {
let actualSleepHours=  getActualSleepHours(day)
let idealSleepHours=getIdealSleepHours();
let difference=idealSleepHours-actualSleepHours
if(actualSleepHours===idealSleepHours){
  console.log('perfect amount of sleep')
}else if(actualSleepHours>idealSleepHours){
    console.log('more sleep than needed')
}else{console.log(`get some rest. you need an extra ${difference} hours to sleep during the week`) }
}
calculateSleepDebt()
