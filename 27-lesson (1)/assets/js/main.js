$(function(){
  $('.tab-navigation a').click(function(event) {
    event.preventDefault();
    const tabId = $(this).attr('href');
    
    // Hide all tab content
    $('.tab-content > div').hide();
    console.log(tabId);
    // Show the selected tab content
    $(tabId).show();
    
    
    // Remove 'active' class from all navigation links
    $('.tab-navigation a').removeClass('active');
    
    // // Add 'active' class to the clicked navigation link
    $(this).addClass('active');
    
    // return false; // Prevent default anchor click behavior
  });
  
  // Show the first tab by default
  $('.tab-navigation li:first-child a').click();



  // donut 
  const myChart = $("#donut").donutty({

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


    text: function( state ) {
      return ( state.value);
    },
  });


  // window.contacts.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   const errors = [];
  //   let msg = '',
  //     name = window.username.value,
  //     email = window.email.value,
  //     text = window.message.value;

  //   if (name === '') {
  //     errors.push('Enter your name');
  //   }
  //   if (email === '') {
  //     errors.push('Enter your email');
  //   }
  //   if (errors.length === 0) {
  //     msg = `
  //       <b>Name: </b>${name}
  //       <b>Email: </b>${email}
  //       <b>Message: </b>${text}
  //     `;
  //     sendMessage(msg);
  //   } else {
  //     alert(errors.join(' '));
  //   }
  // });

  // async function sendMessage(message) {
  //   const apiToken = "6124279978:AAHpO-C5Brpm2HgIpkDOpy7Zjkr5539aSMk";
  //   const chatId = "-1001969020828";

  //   let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=html`;

  //   const response = await fetch(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json' 
  //     },
  //     body: JSON.stringify({
  //       chat_id: chatId,
  //       text: message,
  //       parse_mode: 'HTML',
  //     })
  //   });

  //   const resp = await response.json();
  //   console.log(resp);
  //   // let request = new XMLHttpRequest();
  //   // request.open("GET", urlString);
  //   // request.send();

  //   // // request.addEventListener('load', function() {
  //   // //   if (request.status >= 200 && request.status < 400) {
  //   // //     // Request successful
  //   // //     let response = request.response;
  //   // //     console.log(response);
  //   // //   } else {
  //   // //     // Request failed
  //   // //     console.error("Error sending message:", request.status, request.statusText);
  //   // //   }
  //   // // });
  // }

})