//styling
let body = document.querySelector("body");
const clock = document.querySelector(".container");
const circle = document.querySelector(".clock");
const dateDay = document.querySelector(".date-light");
const btn= document.getElementById("btn");
btn.addEventListener("click", ()=>{
  if(clock.classList.contains("container")){
    clock.classList.remove("container");
    clock.classList.add("dark-container");
    body.classList.remove("body");
    body.classList.add("body-dark");
    btn.classList.add("dark-btn");
    btn.classList.remove("light-btn");
    btn.textContent = "Light Mode";
    circle.classList.add("clock-dark");
    circle.classList.remove("clock-light");
    dateDay.classList.add("date-dark");
    dateDay.classList.remove("date-light");
  }else if(clock.classList.contains("dark-container")){
    clock.classList.remove("dark-container");
    clock.classList.add("container");
    body.classList.remove("body-dark");
    body.classList.add("body");
    btn.classList.add("light-btn");
    btn.classList.remove("dark-btn");
    btn.textContent = "Dark Mode";
    circle.classList.add("clock-light");
    circle.classList.remove("clock-dark");
    dateDay.classList.remove("date-dark");
    dateDay.classList.add("date-light");
}
  });

function time(){
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
  
const hoursDeg = hour*360/12 + (minutes * 360/60)/12;
const minutesDeg = (minutes * 360/60) + (seconds* 360/60)/60;
const secondsDeg = seconds * 360/60;
  
document.querySelector(".hour").style.transform = "rotate("+hoursDeg+"deg)";
document.querySelector(".minute").style.transform = "rotate("+minutesDeg+"deg)";
document.querySelector(".seconds").style.transform = "rotate("+secondsDeg+"deg)";

  const currentDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
  
  document.getElementById("dateContainer").textContent = currentDate;

}
setInterval(time, 1000);

