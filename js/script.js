/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var calculateDays = function () {
    "use strict";
    var event, dt, year, date, today, oneDay, days;
    
    event = $("event").value;
    dt = $("date").value;
    
    //VALIDATE EVENT AND DATE TEXT BOXES
    if (event.length === 0 || dt.length === 0) {
        $("message").innerHTML = "Please enter both an event name and a date";
        return;
    }
    
    //MAKE SURE DATE HAS SLASHES
    if (dt.indexOf("/") === -1) {
        $("message").innerHTML = "Please enter date in MM/DD/YYYY format";
        return;
    }
    
    //MAKE SURE DATE HAS 4-DIGIT YEAR
    year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
        $("message").innerHTML = "Please enter date in MM/DD/YYYY format";
        return;
    }
    
    //CONVERT DATE STRING TO DATE OBJECT AND MAKE SURE IT'S VALID
    date = new Date(dt);
    if (date === "Invalid Date") {
        $("message").innerHTML = "Please enter date in MM/DD/YYYY format";
        return;
    }
    
    //CALCULATE DAYS
    today = new Date();
    //HOURS * MINUTES * SECONDS * MILLISECONDS
    oneDay = 24 * 60 * 60 * 1000;
    //EVENT DATE - TODAY'S DATE
    days = (date.getTime() - today.getTime()) / oneDay;
    //ROUND DATE UP
    days = Math.ceil(days);
    
    //CREATE AND DISPLAY MESSAGE
    //IF EVENT IS OCCURING TODAY
    if (days === 0) {
        $("message").innerHTML = "Today is ".concat(event.toLowerCase()) + "! " + date.toDateString();
    }
    //IF EVENT OCCURRED IN THE PAST
    if (days < 0) {
        $("message").innerHTML = "Event ".concat(event.toLowerCase()) + " happened " + Math.abs(days) + " days in the past!";
    }
    //IF EVENT OCCURS IN THE FUTURE
    if (days > 0) {
        $("message").innerHTML = Math.abs(days) + " days until ".concat(event.toLowerCase()) + " occurs. " + date.toDateString();
    }
};

window.addEventListener("load", function () {
    "use strict";
    $("countdown").addEventListener("click", calculateDays);
    $("event").focus();
});