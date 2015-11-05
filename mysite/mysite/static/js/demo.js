function createChart() {
    $("#chart").kendoChart({
        title: {
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "radarArea"
        },
        series: [{
            name: "Searching Criteria",
            data: [5, 5, 5, 5, 5, 5, 5]
        }, {
            name: "Average",
            data: [6, 6, 4, 7, 5, 4, 7]
        }],
        categoryAxis: {
            categories: [
                "Team work", "Coding", "Testing", "Academic", "Innovation", "Community", "Project Management",
            ],
            majorGridLines: {
                visible: false
            }
        },
        valueAxis: {
            labels: {
            },
            line: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function sliderOnChange1(e) {
    console.log("Change :: new value is: " + e.value);
    var chart = $("#chart").data("kendoChart");
    chart.options.series[0].data[0] = e.value;
    chart.redraw();
    if (e.value>7){
        $("#team").click();
    } else if (e.value <3){
        $("#all").click();
    }
}
function sliderOnChange2(e) {
console.log("Change :: new value is: " + e.value);
var chart = $("#chart").data("kendoChart");
chart.options.series[0].data[1] = e.value;
chart.redraw();
if (e.value>7){
$("#coding").click();
} else if (e.value <3){
$("#all").click();
}

}
function sliderOnChange3(e) {
console.log("Change :: new value is: " + e.value);
var chart = $("#chart").data("kendoChart");
chart.options.series[0].data[2] = e.value;
chart.redraw();
if (e.value>7){
$("#acedemic").click();
} else if (e.value <3){
$("#all").click();
}

}
function sliderOnChange4(e) {
console.log("Change :: new value is: " + e.value);
var chart = $("#chart").data("kendoChart");
chart.options.series[0].data[3] = e.value;
chart.redraw();
if (e.value>7){
$("#testing").click();
} else if (e.value <3){
$("#all").click();
}

}
function sliderOnChange5(e) {
console.log("Change :: new value is: " + e.value);
var chart = $("#chart").data("kendoChart");
chart.options.series[0].data[4] = e.value;
chart.redraw();
if (e.value>7){
$("#innovation").click();
} else if (e.value <3){
$("#all").click();
}

}
function sliderOnChange6(e) {
console.log("Change :: new value is: " + e.value);
var chart = $("#chart").data("kendoChart");
chart.options.series[0].data[5] = e.value;
chart.redraw();
if (e.value>7){
$("#community").click();
} else if (e.value <3){
$("#all").click();
}

}
function sliderOnChange7(e) {
console.log("Change :: new value is: " + e.value);
var chart = $("#chart").data("kendoChart");
chart.options.series[0].data[6] = e.value;
chart.redraw();
if (e.value>7){
$("#pm").click();
} else if (e.value <3){
$("#all").click();
}

}

function sliderOnChange8(e) {
console.log("Change :: new value is: " + e.value);
if (e.value>7){
$("#work").click();
} else if (e.value <3){
$("#all").click();
}
}
function sliderOnChange9(e) {
console.log("Change :: new value is: " + e.value);
if (e.value>7){
$("#edu").click();
} else if (e.value <3){
$("#all").click();
}
}

function sliderOnChange10(e) {
console.log("Change :: new value is: " + e.value);
if (e.value>7){
$("#score").click();
} else if (e.value <3){
$("#all").click();
}
}


function sliderOnSlide(e) {
console.log("Slide :: new slide value is: " + e.value);
}


$(document).ready(function() {
$('#Container').mixItUp();

$("#slider1").kendoSlider({
change: sliderOnChange1,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider2").kendoSlider({
change: sliderOnChange2,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider3").kendoSlider({
change: sliderOnChange3,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider4").kendoSlider({
change: sliderOnChange4,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider5").kendoSlider({
change: sliderOnChange5,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider6").kendoSlider({
change: sliderOnChange6,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider7").kendoSlider({
change: sliderOnChange7,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider8").kendoSlider({
change: sliderOnChange8,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});
$("#slider9").kendoSlider({
change: sliderOnChange9,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});

$("#slider10").kendoSlider({
change: sliderOnChange10,
slide: sliderOnSlide,
min: 0,
max: 10,
smallStep: 1,
largeStep: 10,
value: 5,
showButtons: false
});


});
