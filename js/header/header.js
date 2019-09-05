$(document).ready(function() {

	//Set start configuration of calendar
	startConfig();

	//Decrease year action
	$(buttonDecreaseYear).click(function() {
		year--;
		changeYear(year);
	});

	//Increase year action
	$(buttonIncreaseYear).click(function() {
		year++;
		changeYear(year);
	});

	//Change calendar set up when year have been changed
	$(currentYear).change(function() {
		changeByMoY(monthDays.size);
	});

	//Decrease month action
	$(buttonDecreaseMonth).click(function() {
		if (monthIndex >= 1) {
			monthIndex -= 1;
			$(currentMonth).html(months[monthIndex]);
			changeByMoY(monthDays.size);
		}
	});

	//Increase month action
	$(buttonIncreaseMonth).click(function() {
		if (monthIndex <= 10) {
			monthIndex += 1;
			$(currentMonth).html(months[monthIndex]);
			changeByMoY(monthDays.size);
		}
	});
	
});