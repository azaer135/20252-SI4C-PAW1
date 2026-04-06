// simpan ke local storage
localStorage.setItem("npm", 123);
// baca data local storage
console.log(localStorage.getItem("npm"))
document.getElementById("npm").innerHTML = localStorage.getItem("npm")