setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    if(htime>12){
        htime=htime-12;
        document.getElementById("ampm").innerHTML=`&nbspPM`
    }
    if(mtime<10){
        mtime="0"+mtime;
    }
    if(htime<10){
        htime="0"+htime;
    }
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    document.getElementById("hre").innerHTML=`${htime}`
    document.getElementById("mine").innerHTML=`${mtime}`
    document.getElementById("secc").innerHTML=`${stime}`
}, 1000);

let arr = ['jan','feb' ,'march', 'april','may','june','luly','aug','sep','oct','now','dec'];
let arr1 = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday']
let hdate= new Date();
document.getElementById("date").innerHTML=`${hdate.getDate()}`
document.getElementById("month").innerHTML=`${arr[hdate.getMonth()]}`
document.getElementById("day1").innerHTML=`${arr1[hdate.getDay()]}`
