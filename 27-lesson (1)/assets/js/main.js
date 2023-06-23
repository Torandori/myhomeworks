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

})