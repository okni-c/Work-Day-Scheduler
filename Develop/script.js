let today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'));

var boxData = $("#event-box").val();

var boxDataEl = document.getElementById("event-box")

function renderLastRegistered() {
    // Retrieve the last event-box from localStorage using `getItem()`
    var boxDataSaved = localStorage.getItem('boxData');

    // If it is null, return early from this function
    if (boxDataSaved === null) {
        return;
    }

    // Set the text of the 'boxDataEl' to the corresponding values from localStorage
    boxDataEl.textContent = boxDataSaved;
}

renderLastRegistered();

//create event listener for save button for this function
//function to save contents of textarea to localStorage
$("#save-button").click(function () {

    var newboxData = $("#event-box").val();

    // Save event-box to localStorage using `setItem()`
    localStorage.setItem('boxData', newboxData);

    renderLastRegistered();

});






//create function to change timeblock class depending on time using moment.js

