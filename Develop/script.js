let today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'));

var elementArr = [document.getElementById("e0"), document.getElementById("e1"), document.getElementById("e2"), document.getElementById("e3"), document.getElementById("e4"), document.getElementById("e5"), document.getElementById("e6"), document.getElementById("e7"), document.getElementById("e8")];

var timeArr = [document.getElementById("p9"), document.getElementById("p10"), document.getElementById("p11"), document.getElementById("p12"), document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3"), document.getElementById("p4"), document.getElementById("p5")];

timeChecker();

function renderLastRegistered() {
    // Retrieve the last event-box from localStorage using `getItem()`
    var i = 0;
    while (i <= 8) {
        //get from local storage
        var elementString = localStorage.getItem('boxData' + i);
        // console.log(arr[i]);
        elementArr[i].textContent = elementString;
        i++;
    }

    // If it is null, return early from this function
    if (elementString === null) {
        return;
    }
}

renderLastRegistered();

//when any save button is pressed
$("#save-button1, #save-button2, #save-button3, #save-button4, #save-button5, #save-button6, #save-button7, #save-button8, #save-button9").click(function () {

    var arr = [];
    //clear array
    arr.splice(0, arr.length)

    var i = 0;
    while (i <= 8) {
        //grab data from each event-box
        var elementString = $("#e" + i).val();
        //push to array
        arr.push(elementString);
        console.log(arr[i]);
        //save to local storage
        localStorage.setItem('boxData' + i, elementString);
        i++;
    }
    //save it to localStorage
    renderLastRegistered();

});

//function to change timeblock class depending on time using moment.js

function timeChecker() {
    var currentTime = today.format('hA');
    // var currentTime = "10AM";
    console.log(currentTime);
    var i = 0;
    while (i <= 8) {
        //set current value of index of array to var
        var content = timeArr[i].textContent.slice(0, -2);
        console.log(content);
        var timeID = "#" + timeArr[i].id;
        //if time is earlier than current time, then change class
        if (content < currentTime) {
            $(timeID).removeClass("present", "future").addClass("past");
        }
        //if time is current time, change class
        if (content === currentTime) {
            $(timeID).removeClass("past", "future").addClass("present");
        }
        //if time is later than current time, change class
        if (content > currentTime) {
            $(timeID).removeClass("past", "present").addClass("future"); 
        }
        i++;
    }
};