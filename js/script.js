'use strict';

(function($){
  var keyHoliday = '80b0082c-2c39-4a92-9f07-dcfb8a12bc9b';

  

  // Date
  var month = null;
  var year = null;

  var country = '';
  $(document).ready(function(){
    $( '#startdate' ).datepicker();
    $('#search-date').on('click', function(e){
      e.preventDefault();

      country = $('#countrycode').val();
      var stringDate = $('#startdate').val();
      var startDate = new Date(stringDate);
      var endDate = startDate.setDate(startdate.getDate + $('#numofdays').val() );

      month = startDate.getMonth() + 1;
      year = startDate.getFullYear();

      $.ajax({
        url: 'https://holidayapi.com/v1/holidays?'+'country='+country+'&year='+year+'&month='+month+'&key='+keyHoliday,

      }).done(function(data){
        console.log(typeof startDate);
        console.log(startDate);
        $( "#startresponse" ).datepicker( "setDate", startDate ).datepicker();
        $( "#endresponse" ).datepicker( "setDate", endDate ).datepicker();
      });
    });
  });
})($);