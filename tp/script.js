let today = new Date().format('d-m-y');
let yesterday = new Date(+new Date() - 86400000).format('d-m-y');
let tomorrow = new Date(+new Date() + 86400000).format('d-m-y');
document.getElementById("today").innerHTML = data[today];
document.getElementById("tomorrow").innerHTML = data[tomorrow];
document.getElementById("yesterday").innerHTML = data[yesterday] ;

document.getElementById("todayDate").innerHTML = "["+today+"]";
document.getElementById("tomorrowDate").innerHTML = "["+tomorrow+"]";
document.getElementById("yesterdayDate").innerHTML = "["+yesterday+"]" ;

