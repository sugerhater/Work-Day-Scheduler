console.log(moment().format('MMMM Do YYYY'))

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));
var container = $("#container");

// container.append(rowBlock);


// var row2 = rowBlock;
// var arrayBlock = [rowBlock,rowBlock];

// container.append(arrayBlock[0]);
// container.append(rowBlock);
// container.append(rowBlock);
// container.append(row2);

function makeTable() {
    for (var i = 9; i < 18; i++) {
        var rowBlock = $("<div></div>");
        rowBlock.addClass("row");
        rowBlock.attr("self-align", "center");

        var hour = $("<div>hour</div>");
        hour.addClass("hour");
        
        var timeBlock = $("<div>timeblock</div>");
        timeBlock.addClass("time-block");

        var saveBtn = $("<button>saveBtn</button>");
        saveBtn.addClass("saveBtn");


        rowBlock.append(hour);
        rowBlock.append(timeBlock);
        rowBlock.append(saveBtn);
        container.append(rowBlock);
        console.log(1);

        if (i < 12) {
            hour.html(i + "AM")
            // hour.text.attr("justify-content", "center");
        }
        else if (i == 12) {
            hour.text(i + "PM")
        }
        else {
            hour.text((i - 12) + "PM");
        }
        // if (i = 12) {
        //     hour.text(i + "PM")
        // };
    }
};
makeTable();
// else if (i = 12) {
// } 

// if(i = 12) {
// } else{
// }
