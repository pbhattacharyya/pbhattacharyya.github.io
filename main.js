
$( document ).ready(function() {
    console.log("ready!");


    $( ".previous" ).click(function() {
      changePhoto();
    });
    
    $( ".next" ).click(function() {
      changePhoto();
    });

    function changePhoto() {

      var current = $(".is-selected").attr("id");
      var filepath = "./images/";
      filepath = filepath.concat(current, "-image.svg");
      $("#viz").attr("src", filepath);

      
    };

    
});