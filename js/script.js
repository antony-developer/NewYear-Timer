const days=document.querySelector("#days")
const Hours=document.querySelector("#Hours")
const Minutes=document.querySelector("#Minutes")
const seconds=document.querySelector("#seconds")






function updatetime(){
    const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
const currentDate=new Date();
const diff=newYear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
Hours.innerHTML=h<10?"0"+h:h;
Minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

//console.log(d+" "+h+" "+m+" "+s)
}
updatetime();
setInterval(updatetime,1000);

/*
1000ms=1s
60s=1m
60m=1hr
24hr=1day
*/
