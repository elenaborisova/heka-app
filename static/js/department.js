(function($) {
  'use strict';
  //Pie Chart
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#0181a8", "#c6e5e2","#64cbc5","#84bdcb","#08bf6f"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Number of staff per department'
      }
    }
  });


    // Bar chart
    var barChart = new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["Emergency", "ICU", "Neurology", "Cardiology", "Gynaecology"],
          datasets: [
            {
              label: "Patients",
              backgroundColor: ["#0181a8", "#c6e5e2","#64cbc5","#84bdcb","#08bf6f"],
              data: [478,1267,1734,2384,133]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Number of patients per department'
          }
        }
    });

})(jQuery);
