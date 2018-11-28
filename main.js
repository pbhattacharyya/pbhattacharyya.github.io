
$( document ).ready(function() {
    console.log("ready!");
    
    $( document ).click(function() {
      changePhoto();
      console.log("click!");
    });


     // Swipe to remove list item
     $( document ).on( "swipeleft swiperight", ".card-area", function( event ) {
      console.log("swipe!");
      changePhoto();

  });
  // If it's not a touch device...
  if ( ! $.mobile.support.touch ) {
      // Remove the class that is used to hide the delete button on touch devices
      $( "#list" ).removeClass( "touch" );
      // Click delete split-button to remove list item
      $( ".delete" ).on( "click", function() {
          var listitem = $( this ).parent( "li" );
          confirmAndDelete( listitem );
      });
  }

    // $( ".card-area" ).on( "swipe", function() {
    //   changePhoto();
    //   console.log("swipe!");

    // });

    function changePhoto() {

      var current = $(".is-selected").attr("id");
      var filepath = "./images/";
      filepath = filepath.concat(current, "-image.svg");
      $("#viz").attr("src", filepath);

      
    };

    
});