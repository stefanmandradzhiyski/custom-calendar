$(document).ready(function() {

	//Main table cell action
	$(toDoTableTd).click(function() {
		tdID = "#" + $(this).attr("id");
		if ($(tdID).css("background-color") == taskColor) {
			var choosenTaskTitle = $(tdID).find(cellTaskTitle).text();
			var choosenTaskDescription = $(tdID).find(cellTaskDescription).text();
			setModalState(true, true, choosenTaskTitle, choosenTaskDescription, false, true);
		} else {
			setModalState(false, false, "", "", true, false);
		}
	});

	//Month's previous week action
	$(previousWeek).click(function() {
		if (lastDay - 7 >= 1) {
			clearWeek();
			clearAllAttachedProperties();

			var isSunday = false;
			var count = 0;
			for (var j = firstDay-1; j >= firstDay - 7; j--) {

				$("#header-row th").each(function(){
					if ($(this).text() == monthDays.get(j)) {
						$(this).append("<br> " + j);
					}
				});

				if (j == 0) {
					break;
				}

				count++;
			}
			
			lastDay = firstDay - 1;
			firstDay = firstDay - count;

			setAllAttachedProperties();
		}
	});

	//Month's next week action
	$(nextWeek).click(function() {
		if (lastDay < monthDays.size) {
			clearWeek();
			clearAllAttachedProperties();

			var isSunday = false;
			for (var j = lastDay + 1; j <= lastDay + 7; j++) {

				if (j > monthDays.size) {
					break;
				}

				$("#header-row th").each(function(){
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
					firstDay = lastDay - 6;
					break;
				} else if (j >= monthDays.size) {
					firstDay = lastDay + 1;
					lastDay = monthDays.size;

					break;
				}
			}

			setAllAttachedProperties();
		}
	});

});