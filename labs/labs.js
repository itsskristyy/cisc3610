
var ctx = myChart.getContext("2d");


var x = ["Strawberry", "Peach", "Banana", "Pear", "Grape"];
var y = [15, 10, 25, 10, 20];
var barColors = ["red", "orange","yellow","lightgreen","purple"];


new Chart("myChart", {
  type: "bar",
  data: {
    labels: x,
    datasets: [{
      backgroundColor: barColors,
      data: y
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Quantity in sales for the fruit"
    }
  }
});