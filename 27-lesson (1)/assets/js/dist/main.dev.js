"use strict";

$(function () {
  $('.tab-navigation a').click(function (event) {
    event.preventDefault();
    var tabId = $(this).attr('href'); // Hide all tab content

    $('.tab-content > div').hide();
    console.log(tabId); // Show the selected tab content

    $(tabId).show(); // Remove 'active' class from all navigation links

    $('.tab-navigation a').removeClass('active'); // // Add 'active' class to the clicked navigation link

    $(this).addClass('active'); // return false; // Prevent default anchor click behavior
  }); // Show the first tab by default

  $('.tab-navigation li:first-child a').click(); // donut 

  var myChart = $("#donut").donutty({
    // min/max values
    min: 0,
    max: 10,
    // current value
    value: 8.7,
    // rounded edges or not
    round: true,
    // complete circle or not
    circle: true,
    // padding in pixels
    padding: -2,
    // radius in pixels
    radius: 50,
    // thickness in pixels
    thickness: 6,
    // background color
    bg: "rgba(70, 130, 180, 0.15)",
    // bar color
    color: "mediumslateblue",
    // transition effect
    transition: "all 1.2s cubic-bezier(0.57, 0.13, 0.18, 0.98)",
    // a String that can accept "rtl" for right-to-left modes
    dir: 'rtl',
    // or "bottom"
    // start the Donut's filling from the Top instead of always from the Bottom.
    anchor: "top",
    text: function text(state) {
      return state.value;
    }
  }); // or
  // const myChart = $("#donut").donutty({
  //   min: 0, 
  //   max: 10, 
  //   value: 8.7
  // });
});