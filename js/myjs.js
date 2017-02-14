$(document).ready(function() {


    //Date functionality for displaying the copyright date in the footer

    //Enter the starting date for the copyright
    var startDate = 2016;

    // returns the current year
    var currentYearDate = new Date().getFullYear();


    //if the current year matches the starting date, then only display the current year.
    //if the start date is prior to the current year, show both dates with a dash

    if (currentYearDate === startDate) {
        $('#currentYear').text(currentYearDate);
    } else {
        $('#currentYear').text(startDate + '-' + currentYearDate);
    }



    // Exchange Dates - have it calculate for me

    var todayFullDate = new Date();

    var todayYear = todayFullDate.getFullYear();
    var todayMonth = todayFullDate.getMonth();
    var todayDay = todayFullDate.getDate();

    var today = new Date(todayYear, todayMonth, todayDay);

    var todayDayOfWeek = today.getDay() + 1;


    var excludeDateArray = [new Date(2017, 2, 11)];
    var nextThreeSaturdaysArray = [];

    // add excluded dates to this array.  Subtract 1 from the month number
    //excludeDateArray = [new Date(2016, 8, 17), new Date(2016, 9, 1)];

    Date.prototype.addDays = function(days) {
        var today = new Date(this.valueOf());
        today.setDate(today.getDate() + days);
        return today;
    }

    function checkExcludeDate(date) {

        for (var i = 0; i < excludeDateArray.length; i++) {

            if (date.valueOf() === excludeDateArray[i].valueOf()) {

                return true;
            }
        }

    }


    var daysUntilNextSaturday = 7 - todayDayOfWeek;
    var nextSaturday = null;

    while (nextThreeSaturdaysArray.length < 3) {


        nextSaturday = today.addDays(daysUntilNextSaturday);

        checkExcludeDate(nextSaturday);


        if (checkExcludeDate(nextSaturday) === true) {

            daysUntilNextSaturday += 7;

        } else {

            nextThreeSaturdaysArray.push(nextSaturday);

            daysUntilNextSaturday += 7;
        }

    }


    // function to get the name of the day
    function getDayName(day) {
        var dayNameArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (var d = 0; d < dayNameArray.length; d++) {

            if (d === day) {
                return dayNameArray[d];
            }
        }
    }

    // function to get the name of the day
    function getMonthName(month) {
        var monthNameArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for (var m = 0; m < monthNameArray.length; m++) {

            if (m === month) {
                return monthNameArray[m];
            }
        }
    }

    // declare month name variable
    var monthName = null;


    // loop thru the Saturdays array to get the full dates

    for (var j = 0; j < 3; j++) {

        var thisYear = nextThreeSaturdaysArray[j].getFullYear();
        var thisMonth = nextThreeSaturdaysArray[j].getMonth();
        var thisDay = nextThreeSaturdaysArray[j].getDate();

        if (j === 0) {

            var firstSaturday = new Date(thisYear, thisMonth, thisDay);

            var day = firstSaturday.getDay();
            getDayName(day);
            monthName = getMonthName(thisMonth);
            firstSaturday = getDayName(day) + ', ' + monthName + ' ' + thisDay + ', ' + thisYear;

        } else if (j === 1) {

            var secondSaturday = new Date(thisYear, thisMonth, thisDay);

            var day = secondSaturday.getDay();
            getDayName(day);
            monthName = getMonthName(thisMonth);
            secondSaturday = getDayName(day) + ', ' + monthName + ' ' + thisDay + ', ' + thisYear;

        } else {

            var thirdSaturday = new Date(thisYear, thisMonth, thisDay);

            var day = thirdSaturday.getDay();
            getDayName(day);
            monthName = getMonthName(thisMonth);
            thirdSaturday = getDayName(day) + ', ' + monthName + ' ' + thisDay + ', ' + thisYear;

        }

    }

    $('#firstSaturday').text(firstSaturday);
    $('#secondSaturday').text(secondSaturday);
    $('#thirdSaturday').text(thirdSaturday);



    // print button
    $('.print').hover(function() {

        $('.print').hover(
            function() {
                $(this).addClass('print_hover');
            },
            function() {
                $(this).removeClass('print_hover');
            }
        );

    });

});
