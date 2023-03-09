setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

let arr = ['jan','feb' ,'march', 'april','may','june','luly','aug','sep','oct','now','dec'];
let arr1 = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday']
let hdate= new Date();
document.getElementById("date").innerHTML=`${hdate.getDate()}`
document.getElementById("month").innerHTML=`${arr[hdate.getMonth()]}`
document.getElementById("day1").innerHTML=`${arr1[hdate.getDay()]}`
