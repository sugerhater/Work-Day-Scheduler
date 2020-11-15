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
    // renderList();
};
makeTable();

var inputBox = $("<input></input");
inputBox.addClass("inputBox");
$(".time-block").append(inputBox);
// make a function, if val > than moment js index, add class 

var timeBlockEl = $(".time-block").toArray();
// console.log(timeBlockEl);
console.log(timeBlockEl.length);

var clockHourIndex = parseInt(moment().format('H'));
var array = [];
// console.log(clockHourIndex);



timeBlockEl.forEach(function (element) {
    console.log(element.value);
    array.push(element.value);
    if (element.value > clockHourIndex) {
        // console.log(element);
        // console.log("element value > moment value")
        element.classList.add("future");
    }
    else if (element.value == clockHourIndex) {
        element.classList.add("present")
    }
    else {
        element.classList.add("past")
    }
});



var allInputBox = $("input").toArray();
console.log(allInputBox);
console.log(allInputBox[1]);

var storedIndex = [];
for (let i = 9; i < 18; i++) {
    storedIndex.push(i)
}

console.log(storedIndex);


$("button").on("click", function () {
    console.log(this);
    console.log(this.previousElementSibling.firstChild);
    var clickedRow = this.previousElementSibling.value;

    console.log(clickedRow);
    // console.log(clickedRow.value);
    var plan = $(this).siblings(".time-block").children().val();
    // plan = localStorage.getItem("plan");
    var toDoObject = { clickedRow: plan };

    console.log(toDoObject);
    console.log(array);

    localStorage.setItem(clickedRow, plan);
})

allInputBox.forEach(function (element) {
    console.log(element.parentElement.value);
    for (let i = 0; i < 9; i++) {
        elementIndex = element.parentElement.value
        if (elementIndex == storedIndex[i]) {
            element.value = localStorage.getItem(storedIndex[i]);
        }
    }
});

$("button").on("click", function () {
    console.log(this);
    console.log(this.previousElementSibling.firstChild);
    var clickedRow = this.previousElementSibling.value;

    console.log(clickedRow);
    // console.log(clickedRow.value);
    var plan = $(this).siblings(".time-block").children().val();
    // plan = localStorage.getItem("plan");
    var toDoObject = { clickedRow: plan };

    console.log(toDoObject);
    console.log(array);

    localStorage.setItem(clickedRow, plan);

})

// function renderList() {
//     var allInputBox = $("input");
//     console.log(allInputBox);
//     console.log(allInputBox[1]);

//     allInputBox.forEach(function(element){
//         if(element.parentElement.value == 9){
//             element.value(localStorage.getItem("9"));
//         }
//     })
//     allInputBox.val("abs");
//     // for 
//     console.log($("input"));
// }
// renderList();
// allInputBox.val("abs");
// for 
// console.log($("input"));
// renderList();



// function saveList(event){

//     console.log("button click");
//     var targetEl = event.target;
//     console.log(targetEl);
//     var inputEl= targetEl.previousElementSibling.firstChild;
//     console.log(inputEl);
//     inputEl.value = localStorage.getItem("todos");
//     var inputText = inputEl.value.trim();
//     if (inputText === "") {
//         return;
//     }
//     localStorage.setItem("todos",inputText);
//     inputEl.value=localStorage.getItem("todos");

//     // inputEl.value= ("444")
//     // targetEl.previousElementSibling.elementChild.text= ("CLICK");

// }

// var savedList = $("input").toArray();
// console.log(savedList);
// var savedListValue = savedList.values();
// console.log(savedList[1].value);
// console.log(savedListValue);




// var inputArray = [];

// save all of the value of input box. 



// function renderList() {
//     var savedList = $("input").toArray();
//     var savedListValue = localStorage.getItem("todos");
//     for (let i = 0; i < savedListValue.length; i++) {
//         console.log(savedListValue[i]);
//         savedList[i].value = savedListValue[i];
//     }
// }

// function saveList() {
//     var savedList = $("input").toArray();
//     var savedListValue = savedList.values();
//     console.log(savedList);
//     console.log(savedList[1].value);
//     console.log(savedListValue);
//     var inputArray = [];

//     savedList = $("input").toArray();
//     savedListValue = savedList.values();
//     localStorage.setItem("todos", savedListValue);
//     console.log(savedListValue);
//     for (let i = 0; i < savedListValue.length; i++) {
//         savedList[i].value = savedListValue[i];
//     }
// }





// var plan = $(this).siblings(".time-block").children(".inputBox");
// console.log(this.previousElementSibling.firstChild.val());
// console.log()
// var plan = $(this).previousElementSibling.firstChild.val();

// makeTable();
// hourblock.forEach(element => {if (element.value > moment().format('h')) {
//     element.addClass("past")

// }

// });
// function chooseHour() {

// }
// chooseHour();
// moment.js("h");
// console.log(moment().format('h'));
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