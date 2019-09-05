//Constants
//Month container elements
const buttonDecreaseMonth = "#button-decrease-month";
const currentMonth = "#current-month";
const buttonIncreaseMonth = "#button-increase-month";

//Year container elements
const buttonDecreaseYear = "#button-decrease-year";
const currentYear = "#current-year";
const buttonIncreaseYear = "#button-increase-year";

//Clock table
const clockTable = "#clock-table";

//Change week
const previousWeek = "#previous-week";
const nextWeek = "#next-week";

//Main table
const todoTable = "#todo-table";
const toDoTableTh = "#todo-table th";
const toDoTableTd = "#todo-table td";
const cellTaskTitle = "#cell-task-title";
const cellTaskDescription = "#cell-task-description";

//Main table - header
const headerRow = "#header-row"
const headerRowTh = "#header-row th";

//Modal
const modal = "#modal";
const modalButtonClose = "#modal-button-close";
const modalLabelTitle = "#modal-label-title";
const modalTextTitle = "#modal-text-title";
const modalLimitationLabelTitle = "label[for='modal-text-title']";
const modalLabelDescription = "#modal-label-description";
const modalTextareaDescription = "#modal-textarea-description";
const modalLimitationLabelDescription = "label[for='modal-texarea-description']";
const modalButtonAdd = "#modal-button-add";
const modalIBedit = "#modal-imagebutton-for-edit";
const modalIBdelete = "#modal-imagebutton-delete";
const modalButtonEdit = "#modal-button-edit";
const taskTime = "#time";
const taskColor = "rgb(124, 189, 210)";

//Messages
const alertEmptyFields = "Input task title and description!";
const alertTooLongValues = "Some of fields doesn't meet the limits!";
const confirmDelete = "Are you sure that you want to delete this task?";

//Global variables
var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
var monthDays = new Map();
var date = new Date();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var tdID;
var tableHeaders;
var firstDay;
var lastDay;
var monthDaysNumber