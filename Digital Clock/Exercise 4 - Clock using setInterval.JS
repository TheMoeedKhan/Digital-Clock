function clocktime() {
    const clock = new Date();
    const hh = clock.getHours();
    const mm = clock.getMinutes();
    const ss = clock.getSeconds();
    const month = clock.getMonth() + 1; // Note: Months are zero-based (0 = January)
    const year = clock.getFullYear();
  
document.getElementById("ClockDisplay").innerHTML= hh + ':' + mm + ':' + ss;
  
}
  
  setInterval(clocktime, 1000);
  