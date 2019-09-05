$(document).ready(function() {

	//Modal close button action
	$(modalButtonClose).click(function() {
		closeModal(isNewTask());
	});

	//Modal add button action
	$(modalButtonAdd).click(function () {
		setTask();
	});

	//Modal unlock for edit image button action
	$(modalIBedit).click(function() {
		unlockForEdit();
	});

	//Modal delete button action
	$(modalIBdelete).click(function() {
		if (confirm(confirmDelete)) {
			deleteTask();
		}
	});

	//Modal edit button action
	$(modalButtonEdit).click(function() {
		setTask();
	});

	//Action on text focus
	$(modalTextTitle).focus(function() {
		focusInput(modalLabelTitle, modalTextTitle);
	});

	//Action on text out of focus
	$(modalTextTitle).focusout(function() {
		focusOutInput(modalLabelTitle, modalTextTitle, "Enter title");
	});

	//Set text hover
	$(modalTextTitle).hover(function(e) {
		setInputHover(this, e);
	});

	//Action on text area focus
	$(modalTextareaDescription).focus(function() {
		focusInput(modalLabelDescription, modalTextareaDescription);
	});

	//Action on text area out of focus
	$(modalTextareaDescription).focusout(function() {
		focusOutInput(modalLabelDescription, modalTextareaDescription, "Write short description");
	});

	//Set text area hover
	$(modalTextareaDescription).hover(function(e) {
		setInputHover(this, e);
	});

});