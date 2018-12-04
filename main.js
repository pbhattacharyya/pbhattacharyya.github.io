
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
        borderColor: "#DB295E", borderWidth: 2, 
      },
      {
        label: "Doves",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "#3B945F", borderWidth: 2, 
      },
      {
        label: "Pine trees",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "#5224D1", borderWidth: 2, 
      },
      {
        label: "Breathe",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "America",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Sun",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2,
      },
      {
        label: "Praise",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Ageing",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Truth",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "San Francisco",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Breathe",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "America",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Sun",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2,
      },
      {
        label: "Praise",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Ageing",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Truth",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "San Francisco",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Breathe",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "America",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Sun",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2,
      },
      {
        label: "Praise",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Ageing",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "Truth",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      {
        label: "San Francisco",
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(),randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        fill: false,
        borderColor: "rgba(43,45,66,0.06)", borderWidth: 2, 
      },
      

    ],
  },
  options: {
    animation: {
      duration: 90 }
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
      setTimeout(changePhoto, 100);
      console.log("click!");
    });

    // $(document ).on("tap",function(){
    //   changePhoto();
    //   console.log("click!");
    // });

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const gestureZone = document.getElementById('wholearea');

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false); 

    function handleGesture() {
        if (touchendX <= touchstartX) {
          setTimeout(changePhoto, 100);
          console.log('Swiped left');
        } else {
            if (touchendX >= touchstartX) {
            setTimeout(changePhoto, 100);
            console.log('Swiped right');
          } else {
            if (touchendY <= touchstartY) {
              setTimeout(changePhoto, 100);
              console.log('Swiped up');
            } else {
              if (touchendY >= touchstartY) {
                setTimeout(changePhoto, 100);
                console.log('Swiped down');
              }
            }

          }
      }
    }

    function changePhoto() {

      console.log("change photo");

      var current = $(".is-selected").attr("id");
       // Get a random index point

      if (current === "card-1")
      {
        console.log("test1");
        updateChart(["#E62C63", "#3B945F", "#5224D1", "rgba(43,45,66,0.06)"])
      };
      if (current === "card-2")
      {
        console.log("test2");
        updateChart(["#ffb300", "#1313A1", "#F0712E", "#25ABDB"])
      };
      if (current === "card-3")
      {
        console.log("test3");
        updateChart(["#e53935", "#4D1FF1", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)"])
      };
      if (current === "card-4")
      {
        console.log("test4");
        updateChart(["#039459", "#1313A1", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)"])
      };
      if (current === "card-5")
      {
        console.log("test5");
        updateChart(["#4D1FF1", "#DB295E", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)"])
      } 
      
      if (current === "card-6")
      {
        console.log("test5");
        updateChart(["#0097a7", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)"])
      };

      if (current === "card-7")
      {
        console.log("test5");
        updateChart(["#9c27b0", "#2196f3", "#ffb300", "rgba(43,45,66,0.06)"])
      }

      if (current === "card-8")
      {
        console.log("test5");
        updateChart(["#e53935", "#1976d2", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)"])
      }

      if (current === "card-9")
      {
        console.log("test5");
        updateChart(["#ffb300", "#43a047", "rgba(43,45,66,0.06)", "rgba(43,45,66,0.06)"])
      }

      if (current === "card-10")
      {
        console.log("test5");
        updateChart(["#1313A1", "#ffb300", "#ff1744", "rgba(43,45,66,0.06)"])
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
      borderColor: colors[i], borderWidth: 2}
      }      
      
      myLineChart.update();     
    }

    
});