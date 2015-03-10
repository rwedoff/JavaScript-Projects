var currDate = new Date();
var dateString = currDate.toDateString();
var usrMonth, usrDay, totalDate;
var one_day = 1000 * 60 * 60 * 24;
var one_hour = 1000 * 60 * 60;
function calculateDate() {
    var usrDate = new Date(currDate.getFullYear(), usrMonth, usrDay, 0, 0, 0, 0);
    if (usrDate === undefined)
    { usrDate = "Please Enter a Valid Date"; }
    var diff = usrDate - currDate;
    
    var totalDay = Math.ceil(diff/one_day);
    var hours = 24-currDate.getHours();
    
    if(totalDay < 0)
        totalDay = 365 + totalDay;
    if(totalDay == 0)
    {
        totalDate= "HAPPY BIRTHDAY!!!";
    }
    else
    {
        totalDate= "Days: " + (totalDay - 1) + " Hours: " + hours;
    }
}

function usrDateCollect() {
 
    usrMonth = document.getElementById("mySelect").selectedIndex;
    usrDay = document.getElementById("day").value;
    calculateDate();
    
    var elAnswer = document.getElementById('answer');
    elAnswer.innerHTML = '<p>' + totalDate + '</p>';
    
}



   var elText = document.getElementById("day");
    elText.addEventListener('input', usrDateCollect, false);
    
    var elMonth = document.getElementById("mySelect");
        elMonth.addEventListener('change',usrDateCollect,false);







