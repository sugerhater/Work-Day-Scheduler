console.log(moment().format('MMMM Do YYYY'))

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));
var container = $("#container");


function makeTable() {
    for (var i = 9; i < 18; i++) {
        var rowBlock = $("<div></div>");
        rowBlock.addClass("row");
        rowBlock.attr("self-align", "center");

        var hour = $("<div>hour</div>");
        hour.addClass("hour");

        var timeBlock = $("<div></div>");
        timeBlock.addClass("time-block");

        var saveBtn = $("<button>saveBtn</button>");
        saveBtn.addClass("saveBtn");

        rowBlock.append(hour);
        rowBlock.append(timeBlock);
        rowBlock.append(saveBtn);
        container.append(rowBlock);
        // console.log(1);

        timeBlock.val(i);
        if (i < 12) {
            hour.html(i + "AM")
            // console.log(hour.val())
            // hour.text.attr("justify-content", "center");
        }
        else if (i == 12) {
            hour.text(i + "PM")
        }
        else {
            hour.text((i - 12) + "PM");
        }

    }
};
makeTable();

// make a function, if hour.val > than moment js index, add class 

var inputBox = $("<input></input");
inputBox.addClass("inputBox");
$(".time-block").append(inputBox);
var timeBlockEl = $(".time-block").toArray();
console.log(timeBlockEl);
console.log(timeBlockEl.length);

var clockHourIndex = parseInt(moment().format('h'));
console.log(clockHourIndex);

timeBlockEl.forEach(function(element){
    console.log(element.value);
    if (element.value >clockHourIndex) {
        console.log(element);
        console.log("element value > moment value")
    element.classList.add("future");
    }
    else if (element.value == clockHourIndex){
        element.classList.add("present")
    }
})
// hourblock.forEach(element => {if (element.value > moment().format('h')) {
//     element.addClass("past")

// }
    
// });
// function chooseHour() {

// }
// chooseHour();
// moment.js("h");
console.log(moment().format('h'));
// append

// for (let i = 0; i < hourblock.length; i ++){
//     if (hourblock[i].value == 9){
//         console.log(hourblock[i])

//     }
//         hourblock[i].addClass("pass")
//     }
// if hourblock[i]>

// container.append(rowBlock);


// var row2 = rowBlock;
// var arrayBlock = [rowBlock,rowBlock];

// container.append(arrayBlock[0]);
// container.append(rowBlock);
// container.append(rowBlock);
// container.append(row2);
// console.log(hour.val());