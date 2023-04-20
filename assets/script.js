$(function () {
var currentHour = dayjs().format('HH');
$("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));

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

setInterval(function() {
  updateColor();
}, 60000);

function textInput() {
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}
$('.time-block').each(function() {
  var key = $(this).attr('id');
  var value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});

    textInput();
    updateColor();
   }  
);
