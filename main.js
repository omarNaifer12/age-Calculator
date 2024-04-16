var inputDate=document.getElementById("dates");
var fullAge=document.getElementById("age");
var slectedElement=document.getElementById("convertToAny")
function getDaysInCurrentMonth(year,month){
  
    return new Date(year,month,0).getDate();
}
function getYears(){
    return new Date(inputDate.value).getFullYear();
   
}
function getMonths(){
    return new Date(inputDate.value).getMonth();

}
function getDays(){
    return new Date(inputDate.value).getDate();
} 
function returnTheExactAge()
{


    let year=getYears();
let month=getMonths()+1;
let day=getDays();

let currentDate=new Date();
let currentYear=currentDate.getFullYear();
let currentDay=currentDate.getDate();
let currentMonth=currentDate.getMonth()+1;

    let monthBirth,dayBirth,yearBirth;
   yearBirth=currentYear-year;


    if(currentMonth<month){
        monthBirth=12-month+currentMonth;
        yearBirth--;
    }else{
        monthBirth=currentMonth-month;
    }
if(currentDay<day){
if(monthBirth===0){
monthBirth=11;
yearBirth--;
    }else{
monthBirth--;
    }
    dayBirth=getDaysInCurrentMonth(year,month)-day+currentDay;
}
else{
  dayBirth=currentDay-day;
}
var result=[];
result.push(dayBirth);
result.push(monthBirth);
result.push(yearBirth);

return result;

}
function convertToAge(){
    var age=returnTheExactAge();
    fullAge.innerHTML=`you are ${age[2]}, years ${age[1]} ,months  ,${age[0]} days`;
}
function maxDate(){
    var today = new Date()
let dd = today.getDate()
let mm = today.getMonth()+1 
let yyyy = today.getFullYear() - 18; 
 
if(dd<10)dd = "0"+dd
if(mm<10) mm = "0"+mm

today = `${yyyy}-${mm}-${dd}`
return today;
}
inputDate.setAttribute("max",maxDate());
inputDate.setAttribute("value",maxDate());
function minDate(){
    var today = new Date()
let dd = today.getDate()
let mm = today.getMonth()+1 
let yyyy = today.getFullYear() -100;

if(dd<10)dd = "0"+dd
if(mm<10) mm = "0"+mm

today = `${yyyy}-${mm}-${dd}`;
return today;
}
inputDate.setAttribute("min",minDate())

function sumOfDaysInMonths(month,year){
    var sumDays=0;
    for(let i=1;i<=month;i++){
        sum+=getDaysInCurrentMonth(i,year);
    }
    return sumDays;
  
}
function ageToSeconds(){
    var age=returnTheExactAge();
var fullAgeP= (age[2]*365+sumOfDaysInMonths(age[1],age[2])+age[0])*24*60*60;
fullAge.innerHTML=`your age is ${fullAgeP} second`;
}
function ageToMinute(){
    var age=returnTheExactAge();
let fullAgeP= (age[2]*365+sumOfDaysInMonths(age[1],age[2])+age[0])*24*60;
    fullAge.innerHTML=`your age is ${fullAgeP} minute`;
}
function ageToHours(){
    var age=returnTheExactAge();
    let fullAgeP= (age[2]*365+sumOfDaysInMonths(age[1],age[2])+age[0])*24;
    fullAge.innerHTML=`your age is ${fullAgeP} hour`;
}
function ageToDays(){
    var age=returnTheExactAge();
    let fullAgeP= (age[2]*365+sumOfDaysInMonths(age[1],age[2])+age[0]);
    fullAge.innerHTML=`your age is ${fullAgeP} day`;
}
function ageToMonths(){
    var age=returnTheExactAge();
    let fullAgeP= age[2]*12+age[1];

    fullAge.innerHTML=`your age is ${fullAgeP} month`;
}
function ageToYears(){
    let age= returnTheExactAge();
    fullAge.innerHTML=`your age is ${age[2]} year`;
}
 function convertToAnys() {
   let i=slectedElement.selectedIndex;
    var  selectedValue = slectedElement.options[i].text;
    switch (selectedValue) {
      case 'seconds':
        ageToSeconds();
        break;
      case 'minutes':
        ageToMinute();
        break;
      case 'hours':
        ageToHours();
        break;
      case 'days':
        ageToDays();
        break;
      case 'months':
        ageToMonths();
        break;
      case 'years':
        ageToYears();
        break;
      default:
        
        break;
    }
  };