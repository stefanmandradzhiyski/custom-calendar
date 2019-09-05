//Take the days of specific month
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

//Changing the calendar's year
function changeYear(newYear) {
	$(currentYear).html(newYear);
	$(currentYear).trigger("change");
}

//Clear all main table's ths properties
function clearAllAttachedProperties() {
	$(toDoTableTh).each(function() {
		$("td[id*='" + $(this).text() + "']").css({
			"background-color" : "white",
			"pointer-events" : "auto"
		});
	});
}

//Create default main table's ths
function clearWeek() {
	tableHeaders = [];
	tableHeaders.push("<th>Mon</th>");
	tableHeaders.push("<th>Tue</th>");
	tableHeaders.push("<th>Wed</th>");
	tableHeaders.push("<th>Thu</th>");
	tableHeaders.push("<th>Fri</th>");
	tableHeaders.push("<th>Sat</th>");
	tableHeaders.push("<th>Sun</th>");

	$(headerRow).empty();
	$(headerRow).append(tableHeaders);
}

//Generate new week
function generateNewWeek() {
	monthDaysNumber = new Date(year, monthIndex + 1, 0).getDate();
	monthDays.clear();
	for (var k = 1; k <= monthDaysNumber; k++) {
		monthDays.set(new Date(year, monthIndex, k).getDate(), weekDays[new Date(year, monthIndex, k).getDay()]);
	}

	clearWeek();
}

//Attach months days to week days
function attachMDToWD(repeatUntil) {
	var isSunday = false;
	for (var j = 1; j <= repeatUntil; j++) {
		$(headerRowTh).each(function(){
			if ($(this).text() == monthDays.get(j)) {
				$(this).append("<br> " + j);

				if ($(this).text().includes("Sun") && $(this).text().length > 3) {
					isSunday = true;
					return false;
				}

				return false;
			}
		});

		if (isSunday) {
			lastDay = j;
			break;
		}
	}
}

//Set all main table's ths properties
function setAllAttachedProperties() {
	$(toDoTableTh).each(function() {
		if ($(this).text().match("^[A-z]+$")) {
			$("td[id*='" + $(this).text() + "']").css({
				"background-color" : "#D8D8D8",
				"pointer-events" : "none"});
		}
	});
}

//Change full calendar by month or year
function changeByMoY(repeatUntil) {
	generateNewWeek();
	clearAllAttachedProperties();
	attachMDToWD(repeatUntil);
	setAllAttachedProperties();
}

//Start configuration of calendar
function startConfig() {
	$(currentMonth).html(months[monthIndex]);
	$(currentYear).html(year);
	firstDay = 1;

	for(var i = 2; i <= 24; i++) {
		$(clockTable).append("<tr><td>" + --i + ":00<br>"+ ++i + ":00</td></tr>");
	}

	for (var j = 2; j <= 24; j++) {
		var startHour = --j;
		var endHour = ++j;
		$(todoTable).append("<tr><td id='Mon" + startHour + "-" + endHour + "'></td>"
			+ "<td id='Tue" + startHour + "-" + endHour + "'></td>"
			+ "<td id='Wed" + startHour + "-" + endHour + "'></td>"
			+ "<td id='Thu" + startHour + "-" + endHour + "'></td>"
			+ "<td id='Fri" + startHour + "-" + endHour + "'></td>"
			+ "<td id='Sat" + startHour + "-" + endHour + "'></td>"
			+ "<td id='Sun" + startHour + "-" + endHour + "'></td></tr>");
	}

	changeByMoY(7);
}