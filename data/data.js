// doughnut chart 
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"],
      datasets: [
        {
          label: "Population in NYC Boroughs (2020)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [1472654,2736074, 1694263,2405464,495747]
        }
      ]
    },
    options: {
        aspectRatio: 1,
      title: {
        display: true,
        text: "Kristy Delacruz: New York City's five boroughs"
      }
    }
});
//horizontal bar 

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Williamsburg Bridge", "Manhattan Bridge", "Brooklyn Bridge", "Queensboro Bridge", "Verrazzano-Narrows Bridge", "George Washington Bridge"],
      datasets: [
        {
          label: "Bridges in NYC (measured in feet)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [7308,6854,5988,3724,13701,4760]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Kristy Delacruz: NYC Bridges'
      }
    }
});
