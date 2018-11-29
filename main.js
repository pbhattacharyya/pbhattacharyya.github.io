
$( document ).ready(function() {
    
//chart play area
var ctx = document.getElementById("viz").getContext('2d');
var randomNumber = function() {
  return Math.random() * 10;
};
var startingData = {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    datasets: [
      {
        label: "Love",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "#DB295E", borderWidth: 3, 
      },
      {
        label: "Doves",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "#3B945F", borderWidth: 3, 
      },
      {
        label: "Pine trees",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "#5224D1", borderWidth: 3, 
      },
      {
        label: "Breathe",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "America",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Sun",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1,
      },
      {
        label: "Praise",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Ageing",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Truth",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "San Francisco",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Breathe",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "America",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Sun",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1,
      },
      {
        label: "Praise",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Ageing",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Truth",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "San Francisco",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Breathe",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "America",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Sun",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1,
      },
      {
        label: "Praise",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Ageing",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "Truth",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      {
        label: "San Francisco",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.15)", borderWidth: 1, 
      },
      

    ],
  },
  options: {
    animation: {
      duration: 100 }
  ,legend: {
      display: false,
  },
  elements: {
      point:{
          radius: 0
      }
  }
  ,scales: {
    yAxes: [{
      display: false,

      ticks: {
        min: -1,
      max: 11
    }
   }],
    xAxes: [{
      display: false
    }],
  }}
};


var myLineChart = new Chart(ctx, startingData);


  // old code  
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

      console.log("change photo");

      var current = $(".is-selected").attr("id");
       // Get a random index point

      if (current === "card-1")
      {
        console.log("test1");
        updateChart(["#DB295E", "#3B945F", "#5224D1"])
      };
      if (current === "card-2")
      {
        console.log("test2");
        updateChart(["#FAD12F", "#1313A1", "#F0712E", "#25ABDB"])
      };
      if (current === "card-3")
      {
        console.log("test3");
        updateChart(["#B50C56", "#3B945F", "#5224D1"])
      } 
      
      var filepath = "./images/";
      filepath = filepath.concat(current, "-image.svg");
      $("#viz").attr("src", filepath);

      
    };

    function updateChart(colors) {



      myLineChart = new Chart(ctx, startingData);
      
      for (var i = 0; i < colors.length; i++)

      {
        myLineChart.data.datasets[i] = {
      data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
      fill: false,
      borderColor: colors[i], borderWidth: 3}
      }      
      
      myLineChart.update();     
    }

    
});