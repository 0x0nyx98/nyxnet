const clock = document.getElementById("clock");
const clock_xm = document.getElementById("time-end");

function tick_clock() {
    var t = new Date();

    clock.innerHTML = t.toLocaleString('en-US', {second: '2-digit', minute: '2-digit', hour: '2-digit', hour12: true, timeZone: 'America/New_York' }).substring(0,8);

    if (t.toLocaleString('en-US', {hour: '2-digit', hour12: false, timeZone: 'America/New_York' }) > 11) {
        clock_xm.innerHTML = "PM";
    }else{
        clock_xm.innerHTML = "AM";
    }
}

setInterval(tick_clock, 50);
