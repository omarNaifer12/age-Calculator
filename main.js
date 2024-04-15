var inputDate=document.getElementById("dates");


function getDaysInCurrentMonth(year,month){
  
    return new Date(year,month,0).getDate();
}
function convertToAge()
{
var fullDate= new Date(inputDate.value);

    let year=fullDate.getFullYear();
let month=fullDate.getMonth()+1;
let day=fullDate.getDate();

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
var fullAge=document.getElementById("age");
fullAge.innerHTML=`you are ${yearBirth}, years ${monthBirth} ,months  ,${dayBirth} days`;
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
inputDate.setAttribute("min",minDate());