//Preconfiguration state of modal
function setModalState(areLabelsVisible, areInputsDisabled, textTitleVal, textareaVal, areLimitLabelsVisible, isExistingTask) {
	$(modal).css("display","block");

	if (areLabelsVisible) {
		$(modalLabelTitle).show();
		$(modalLabelDescription).show();
	} else {
		$(modalLabelTitle).hide();
		$(modalLabelDescription).hide();
	}

	$(modalTextTitle).prop("disabled", areInputsDisabled);
	$(modalTextareaDescription).prop("disabled", areInputsDisabled);
	$(modalTextTitle).css("border", "none");
	$(modalTextareaDescription).css("border", "none");

	if (areInputsDisabled) {
		$(modalTextTitle).css("border-bottom","2px solid transparent");
		$(modalTextareaDescription).css("border-bottom", "2px solid transparent");
	} else {
		$(modalTextTitle).css({
			"border-bottom" : "2px solid #7C8487",
			"border-right" : "2px solid transparent"
		});
		$(modalTextareaDescription).css({
			"border-bottom" : "2px solid #7C8487",
			"border-right" : "2px solid transparent"
		});
	}

	$(modalTextTitle).val(textTitleVal);
	$(modalTextareaDescription).val(textareaVal);

	if (areLimitLabelsVisible) {
		$(modalLimitationLabelTitle).show();
		$(modalLimitationLabelDescription).show();
	} else {
		$(modalLimitationLabelTitle).hide();
		$(modalLimitationLabelDescription).hide();
	}
	
	if (isExistingTask) {
		$(modalIBedit).show();
		$(modalIBdelete).show();
		$(modalButtonAdd).hide();
		$(modalButtonEdit).hide();
	} else {
		$(modalIBedit).hide();
		$(modalIBdelete).hide();
		$(modalButtonAdd).show();
		$(modalButtonEdit).hide();

		$(tdID).css({
			"background-color" : taskColor,
			"color" : "white"
		});
	}

	setTaskTime();
}

//Set task time of modal
function setTaskTime() {
	var hours = tdID.substring(4).split("-");
	var time = hours[0] + ":00 - " + hours[1] + ":00";
	var day = $(tdID).closest("table").find("th").eq($(tdID).index()).text().substring(4);
	var month = $(currentMonth).html().substring(0,3);
	$(taskTime).html(`&nbsp;&nbsp; ${time} ${day}th ${month}, ${year}`);
}