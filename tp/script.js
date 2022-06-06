
document.getElementById("today").innerHTML = data[new Date().format('d-m-y')];
document.getElementById("tomorrow").innerHTML = data[new Date(+new Date() + 86400000).format('d-m-y')];
