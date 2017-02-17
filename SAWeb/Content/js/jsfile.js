// On load
$(window).load(function () {
    $("#info_rightdiv_skicka").hide();
    $("#info_table_right_btns_skicka").hide();
});


// Function to pop out infobox from info_btn
function deselect(e) {
    $('.pop').slideFadeToggle(function () {
        e.removeClass('selected');
    });
}
var toggled = true;
$(function () {
    $('#info_btn').on('click', function () {

        if (!toggled) {
            $("#infoclose").attr("src", "../../Content/img/Info.png");
            toggled = true;
        } else {
            $("#infoclose").attr("src", "../../Content/img/Info_Close_trans.png");
            toggled = false;
        }

        //if (!toggled) {
        //    $("#infoclose").attr("src", "../../Content/img/Info.png");
        //    $("#infoclose").attr("src", "../../Content/img/Info.png").removeClass("close_icon");
        //    toggled = true;
        //} else {
        //    $("#infoclose").attr("src", "../../Content/img/Info.png").addClass("close_icon");
        //    toggled = false;
        //}

        if ($(this).hasClass('selected')) {
            deselect($(this));
        } else {
            $(this).addClass('selected');
            $('.pop').slideFadeToggle();
        }
        return false;
    });

    $('.close').on('click', function () {
        deselect($('#info_btn'));
        return false;
    });
});

$.fn.slideFadeToggle = function (easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};



// -- Time, Date, Week scripts -- //

// Time Script
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

// Date Script
function startDate() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    y = checkDate(y);
    m = checkDate(m);
    d = checkDate(d);
    document.getElementById('date').innerHTML =
    y + "-" + m + "-" + d;
    var t = setTimeout(startDate, 500);
}
function checkDate(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

// Week Script
Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var dayOfYear = ((today - onejan + 1) / 86400000);
    return Math.ceil(dayOfYear / 7)
};

function startWeek() {
    $(function startWeek() {
        var today = new Date();
        var weekno = today.getWeek();
        $("#week").html("Vecka." + weekno);
    });
    var t = setTimeout(startWeek, 500);
}


// -- Information -- //
// -- Clicked buttons scripts - //

// Right Buttons
$(document).ready(function () {
    $('#info_table_right_btns_skicka_administration').click(function () {
        $('#info_table_right_btns_skicka_produktion').removeClass('clicked_right').addClass('info_table_right_btns_skicka_produktion');
        $('#info_table_right_btns_skicka_administration').removeClass('info_table_right_btns_skicka_administration').addClass('clicked_right');
    });

    $('#info_table_right_btns_skicka_produktion').click(function () {
        $('#info_table_right_btns_skicka_administration').removeClass('clicked_right').addClass('info_table_right_btns_skicka_administration');
        $('#info_table_right_btns_skicka_produktion').removeClass('info_table_right_btns_skicka_produktion').addClass('clicked_right');
    });

    $('#info_table_right_btns_nya').click(function () {
        $('#info_table_right_btns_skickat').removeClass('clicked_right').addClass('info_table_right_btns_skickat');
        $('#info_table_right_btns_lasta').removeClass('clicked_right').addClass('info_table_right_btns_lasta');
        $('#info_table_right_btns_nya').removeClass('info_table_right_btns_nya').addClass('clicked_right');
    });

    $('#info_table_right_btns_lasta').click(function () {
        $('#info_table_right_btns_skickat').removeClass('clicked_right').addClass('info_table_right_btns_skickat');
        $('#info_table_right_btns_nya').removeClass('clicked_right').addClass('info_table_right_btns_nya');
        $('#info_table_right_btns_lasta').removeClass('info_table_right_btns_lasta').addClass('clicked_right');
    });

    $('#info_table_right_btns_skickat').click(function () {
        $('#info_table_right_btns_nya').removeClass('clicked_right').addClass('info_table_right_btns_nya');
        $('#info_table_right_btns_lasta').removeClass('clicked_right').addClass('info_table_right_btns_lasta');
        $('#info_table_right_btns_skickat').removeClass('info_table_right_btns_skickat').addClass('clicked_right');
    });
});

// Left Buttons
$(document).ready(function () {
    $('#info_leftdiv_btns_inkorg').click(function () {
        // Hide Skicka Div
        $("#info_rightdiv_skicka").hide();
        $("#info_table_right_btns_skicka").hide();
        // Show Right Div
        $("#info_rightdiv").show();
        $("#info_table_right_btns").show();
        $('#info_leftdiv_btns_inkorg').removeClass('info_leftdiv_btns_inkorg').addClass('clicked_left');
        $('#info_leftdiv_btns_skicka').removeClass('clicked_left').addClass('info_leftdiv_btns_skicka');
        $('#info_leftdiv_btns_tidbank').removeClass('clicked_left').addClass('info_leftdiv_btns_tidbank');
        $('#info_leftdiv_btns_senastestamp').removeClass('clicked_left').addClass('info_leftdiv_btns_senastestamp');
        $('#info_leftdiv_btns_tidrapport').removeClass('clicked_left').addClass('info_leftdiv_btns_tidrapport');
    });

    $('#info_leftdiv_btns_skicka').click(function () {
        // Hide right div
        $("#info_rightdiv").hide();
        $("#info_table_right_btns").hide();
        // Show Skicka Div
        $("#info_rightdiv_skicka").show();
        $("#info_table_right_btns_skicka").show();
        $('#info_leftdiv_btns_skicka').removeClass('info_leftdiv_btns_skicka').addClass('clicked_left');
        $('#info_leftdiv_btns_inkorg').removeClass('clicked_left').addClass('info_leftdiv_btns_inkorg');
        $('#info_leftdiv_btns_tidbank').removeClass('clicked_left').addClass('info_leftdiv_btns_tidbank');
        $('#info_leftdiv_btns_senastestamp').removeClass('clicked_left').addClass('info_leftdiv_btns_senastestamp');
        $('#info_leftdiv_btns_tidrapport').removeClass('clicked_left').addClass('info_leftdiv_btns_tidrapport');
    });

    $('#info_leftdiv_btns_tidbank').click(function () {
        // Hide Skicka Div
        $("#info_rightdiv_skicka").hide();
        $("#info_table_right_btns_skicka").hide();
        // Hides the right div when user press the "Tidbank button"
        $("#info_rightdiv").hide();
        $("#info_table_right_btns").hide();
        $('#info_leftdiv_btns_tidbank').removeClass('info_leftdiv_btns_tidbank').addClass('clicked_left');
        $('#info_leftdiv_btns_inkorg').removeClass('clicked_left').addClass('info_leftdiv_btns_inkorg');
        $('#info_leftdiv_btns_skicka').removeClass('clicked_left').addClass('info_leftdiv_btns_skicka');
        $('#info_leftdiv_btns_senastestamp').removeClass('clicked_left').addClass('info_leftdiv_btns_senastestamp');
        $('#info_leftdiv_btns_tidrapport').removeClass('clicked_left').addClass('info_leftdiv_btns_tidrapport');
    });

    $('#info_leftdiv_btns_senastestamp').click(function () {
        // Hide Skicka Div
        $("#info_rightdiv_skicka").hide();
        $("#info_table_right_btns_skicka").hide();
        // Hides the right div + it's relative btns when user press the "Tidbank button"
        $("#info_rightdiv").hide();
        $("#info_table_right_btns").hide();
        $('#info_leftdiv_btns_senastestamp').removeClass('info_leftdiv_btns_senastestamp').addClass('clicked_left');
        $('#info_leftdiv_btns_inkorg').removeClass('clicked_left').addClass('info_leftdiv_btns_inkorg');
        $('#info_leftdiv_btns_skicka').removeClass('clicked_left').addClass('info_leftdiv_btns_skicka');
        $('#info_leftdiv_btns_tidbank').removeClass('clicked_left').addClass('info_leftdiv_btns_tidbank');
        $('#info_leftdiv_btns_tidrapport').removeClass('clicked_left').addClass('info_leftdiv_btns_tidrapport');
    });

    $('#info_leftdiv_btns_tidrapport').click(function () {
        // Hide Skicka Div
        $("#info_rightdiv_skicka").hide();
        $("#info_table_right_btns_skicka").hide();
        // Show Right Div
        $("#info_rightdiv").show();
        $("#info_table_right_btns").show();
        $('#info_leftdiv_btns_tidrapport').removeClass('info_leftdiv_btns_tidrapport').addClass('clicked_left');
        $('#info_leftdiv_btns_inkorg').removeClass('clicked_left').addClass('info_leftdiv_btns_inkorg');
        $('#info_leftdiv_btns_skicka').removeClass('clicked_left').addClass('info_leftdiv_btns_skicka');
        $('#info_leftdiv_btns_senastestamp').removeClass('clicked_left').addClass('info_leftdiv_btns_senastestamp');
        $('#info_leftdiv_btns_tidbank').removeClass('clicked_left').addClass('info_leftdiv_btns_tidbank');
    });
});


//Allow only numeric input in inputfields
//Author: Joshua De Leon - File: numericInput.js - Description: Allows only numeric input in an element. - If you happen upon this code, enjoy it, learn from it, 
//and if possible please credit me: www.transtatic.com
(function (b) {
    var c = { allowFloat: false, allowNegative: false }; b.fn.numericInput = function (e) {
        var f = b.extend({}, c, e); var d = f.allowFloat;
        var g = f.allowNegative; this.keypress(function (j) {
            var i = j.which; var h = b(this).val();
            if (i > 0 && (i < 48 || i > 57)) {
                if (d == true && i == 46) {
                    if (g == true && a(this) == 0 && h.charAt(0) == "-") { return false }
                    if (h.match(/[.]/)) { return false }
                } else {
                    if (g == true && i == 45) { if (h.charAt(0) == "-") { return false } if (a(this) != 0) { return false } }
                    else { if (i == 8) { return true } else { return false } }
                }
            } else { if (i > 0 && (i >= 48 && i <= 57)) { if (g == true && h.charAt(0) == "-" && a(this) == 0) { return false } } }
        }); return this
    }; function a(d) {
        if (d.selectionStart) { return d.selectionStart } else {
            if (document.selection) {
                d.focus(); var f = document.selection.createRange();
                if (f == null) { return 0 } var e = d.createTextRange(), g = e.duplicate(); e.moveToBookmark(f.getBookmark()); g.setEndPoint("EndToStart", e);
                return g.text.length
            }
        } return 0
    }
}(jQuery));

$(function () {
    $("#info_senastestamp_search_order").numericInput({ allowFloat: true, allowNegative: true });
});


// Allow only numeric input in inputs
//$(document).ready(function () {
//    $("#info_senastestamp_search_order").keydown(function (e) {
//        // Allow: backspace, delete, tab, escape, enter and .
//        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
//            // Allow: Ctrl+A
//            (e.keyCode == 65 && e.ctrlKey === true) ||
//            // Allow: Ctrl+C
//            (e.keyCode == 67 && e.ctrlKey === true) ||
//            // Allow: Ctrl+X
//            (e.keyCode == 88 && e.ctrlKey === true) ||
//            // Allow: home, end, left, right
//            (e.keyCode >= 35 && e.keyCode <= 39)) {
//            // let it happen, don't do anything
//            return;
//        }
//        // Ensure that it is a number and stop the keypress
//        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//            e.preventDefault();
//        }
//    });
//});


// Table row select-highlighter
$(function () {

    /* Get all rows from your 'table' but not the first one 
     * that includes headers. */
    var rows = $('tr').not(':first');

    // Rows hover function
    rows.on('mouseenter', function (e) {
        /* Get current row */
        var row = $(this);

        if ($(this).hasClass('row_highlighted')) {
            $(this).removeClass('row_hover');
        }
        else {
            /* Highlight one row */
            rows.removeClass('row_hover');
            row.addClass('row_hover');
        }

    });

    // Rows mouseleave function
    rows.on('mouseleave', function (e) {
        /* Get current row */
        var row = $(this);

        //if ($(this).hasClass('row_highlighted')) {
        //    $(this).removeClass('row_highlighted');
        //}
        if ($(this).hasClass('row_hover')) {
            $(this).removeClass('row_hover');
        }

    });

    // Rows click function
    rows.on('click', function (e) {

        /* Get current row */
        var row = $(this);

        /* Highlight one row */
        rows.removeClass('row_highlighted');
        row.addClass('row_highlighted');

    });

    /* This 'event' is used just to avoid that the table text 
     * gets selected (just for styling). 
     * For example, when pressing 'Shift' keyboard key and clicking 
     * (without this 'event') the text of the 'table' will be selected.
     * You can remove it if you want, I just tested this in 
     * Chrome v30.0.1599.69 */
    $(document).bind('selectstart dragstart', function (e) {
        e.preventDefault(); return false;
    });

});


function inputFilter() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    // Check which input has focus
    //if ($("#info_senastestamp_search_order").is(":focus")) {
    //    input = document.getElementById("info_senastestamp_search_order");
    //}
    //if ($("#info_senastestamp_search_resurs").is(":focus")) {
    //    input = document.getElementById("info_senastestamp_search_resurs");
    //}
    //if ($("#info_senastestamp_search_operation").is(":focus")) {
    //    input = document.getElementById("info_senastestamp_search_operation");
    //}
    //if ($("#info_senastestamp_search_start").is(":focus")) {
    //    input = document.getElementById("info_senastestamp_search_start");
    //}
    //if ($("#info_senastestamp_search_stop").is(":focus")) {
    //    input = document.getElementById("info_senastestamp_search_stop");
    //}
    //if ($("#info_senastestamp_search_total").is(":focus")) {
    //    input = document.getElementById("info_senastestamp_search_total");
    //}
    input = document.getElementById("info_senastestamp_search_order");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_left_div");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // When the clear field link is clicked do the following:
    $("#info_resetbtn").on("click", function () {

        clearField();

        return false;

    });

    // The clear field function which clears the search field
    function clearField() {
        $(".filterInput").val('');

        inputFilter();
    }
}


// Dragend Swipe Functions
//document.addEventListener("DOMContentLoaded", function () {
//    var container = document.getElementById("swipe_main");
//    dragend = new Dragend(container, {
//        afterInitialize: function () {
//            container.style.visibility = "visible";
//        }
//    });
//}, false)

//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-219062-10']);
//_gaq.push(['_trackPageview']);

//(function () {
//    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//})();

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});