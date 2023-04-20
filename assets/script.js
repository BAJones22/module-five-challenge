var hours = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};


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

    // colorChange();
    updateColor();
   }  
);
