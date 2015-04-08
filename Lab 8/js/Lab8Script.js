$(function() {
    //TABS JS
    $( "#tabUI" ).tabs();
   //BUTTON JS
    $( "input[type=submit]" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  
  
$('li').on('click', function(){
   $('.tab-cont').hide().fadeIn(1000);
    
});

    $('form').hide();
    $('#join-but').on('click', function(){
        $('#joinUs').fadeToggle(400);
    });

    $("#date").datepicker({maxDate: "-18Y", changeMonth: true, changeYear: true});
     
    
    $( "#submit" ).button();
    
    $("#joinUs").submit(function(event) 
     {
         /* stop form from submitting normally */
         event.preventDefault();

         /* get some values from elements on the page: */
         var $form = $( this ),
             $submit = $form.find( 'button[type="submit"]' ),
             name_value = $form.find( 'input[name="name"]' ).val(),
             email_value = $form.find( 'input[name="email"]' ).val(),
             date_value = $form.find( 'input[name="date"]' ).val(),
             url = $form.attr('action');

         /* Send the data using post */
         var posting = $.post( url, { 
                           name: name_value, 
                           email: email_value, 
                           date: date_value 
                       });

         posting.done(function( data )
         {
             /* Put the results in a div */
             $( "#contactResponse" ).html(data);
             /* Disable the button. */
             $submit.attr("disabled", true);
         });
    });
    
});
