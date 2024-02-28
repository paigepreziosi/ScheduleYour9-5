
$(function () {
  var todayDate = dayjs().format('MMMM D, YYYY') 
  $("#currentDay").html(todayDate);

  $(document).ready(function () {
  
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    })
  })
  
  function timeTracker() {
    var currentTime = dayjs().hour();

    
    $(".time-block").each(function () {
        var rowTime = parseInt($(this).attr("id").split("hour")[1]);

        if (rowTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (rowTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
