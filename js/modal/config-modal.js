//Check if task is new
function isNewTask(){
	return $(modalButtonAdd).is(":visible");
}

//Close modal
function closeModal(isNewTask) {
	$(modal).css("display","none");
	if (isNewTask) {
		$(tdID).css({
			"background-color" : "white",
			"color" : "black"
		});
	}
}

//Input effect on focus
function focusInput(label, input) {
	$(label).show();
	$(input).removeAttr("placeholder");
}

//Input effect on out of focus
function focusOutInput(label, input, phtext) {
	$(label).hide();
	$(input).attr("placeholder", phtext);
}

//Set inputs hover effect
function setInputHover(thisElement, e) {
	$(thisElement).css({
		"border-bottom" : e.type === "mouseenter"? "2px solid #7CBDD2": "2px solid #7C8487",
		"border-right" : e.type == "mouseenter" ? "2px solid #7CBDD2" : "2px solid transparent"
	});
}

//Delete task from calendar
function deleteTask() {
	$(tdID).css({
		"background-color" : "white",
		"color" : "black"
	});
	$(tdID).html("");
	$(modal).css("display","none");
}

//Unlock existing task's modal for editing
function unlockForEdit() {
	$(modalTextTitle).prop("disabled",false);
	$(modalTextTitle).css("border-bottom", "2px solid #7C8487");

	$(modalTextareaDescription).prop("disabled",false);
	$(modalTextareaDescription).css("border-bottom", "2px solid #7C8487");

	$(modalLabelTitle).hide();
	$(modalLabelDescription).hide();
	$(modalLimitationLabelTitle).show();
	$(modalLimitationLabelDescription).show();

	$(modalIBedit).hide();
	$(modalIBdelete).hide();
	$(modalButtonEdit).show();
}

//Set the task at calendar
function setTask() {
	var task = $(modalTextTitle).val();
	var description = $(modalTextareaDescription).val();
	if (task.length > 1 && description.length > 1) {
		if (task.length <= 30 && description.length <= 120) {
			$(modalTextTitle).val("");
			$(modalTextareaDescription).val("");
			$(tdID).html("<div id='cell-task-title'>" + task + "</div><div id='cell-task-description' style='display: none'>" + description + "</div>");
			$(modal).css("display","none");
		} else {
			alert(alertTooLongValues);
		}
	} else {
		alert(alertEmptyFields);
	}
}