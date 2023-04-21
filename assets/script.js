$(function () {
  // Set current date/time in military format
var currentHour = dayjs().format('HH');
$("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));

// Set time blocks to corresponding color based on current time
function updateColor() {
  $('.time-block').each(function() {
    var timeHour = parseInt(this.id);
    console.log(timeHour);
    console.log(this);
    if (timeHour === currentHour) {
      $(this).toggleClass('present');
    } else if (timeHour < currentHour) {
      $(this).toggleClass('past');
    } else {
      $(this).toggleClass('future');
    }
  });
}
// Update time on page every minute
setInterval(function() {
  updateColor();
}, 60000);

// Grab input from text area and save to local storage when clicking save button 
function textInput() {
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}

// Return the information from local storage back to the page so that it will remain even after refresh
$('.time-block').each(function() {
  var key = $(this).attr('id');
  var value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});

// Call to functions
    textInput();
    updateColor();
   }  
);
