$("#currentDay").text(dayjs().format("MM/DD/YYYY H:mm"))


setInterval(function() {
    $("#currentDay").text(dayjs().format("MM/DD/YYYY H:mm"))
  
}, 1000)


var currentHour = dayjs().format('H');

for(var i = 9; i <= 17; i++) {
    
    if(currentHour > i) {
        $('#hour-' + i).addClass('past')
    } else if (currentHour == i) {
        $('#hour-' + i).addClass('present')
    } else {
        $('#hour-' + i).addClass('future')
    }

    
    var currentTextArea = $('#' + i) 

    var storedData = localStorage.getItem(i)

    currentTextArea.val(storedData)


}

   
$('.saveBtn').on('click', function() {
    var targetHour = $(this).attr('data-time');

    var targetText = $('#'+targetHour).val();

    localStorage.setItem(targetHour, targetText)
})

