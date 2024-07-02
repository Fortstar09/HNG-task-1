
const time = () => {
    const d = new Date()
    const utc = d.toUTCString();
    document.getElementById("hour").innerHTML = d.getUTCHours();
    document.getElementById("mins").innerHTML = d.getUTCMinutes();
    document.getElementById("secs").innerHTML = d.getUTCSeconds();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[d.getDay()];
    document.getElementById("day").innerHTML = currentDayOfWeek;
}


setInterval(time, 1000);