// async function funDiagnosisRisk() {
//     return fetch('/api/graphs').then(res => res.json());
// }


(function ($) {
    'use strict';


    /* Engaged Users */
    var engagedUsersCtx = document.getElementById('engaged-users').getContext("2d");
    var gradientStrokeengagedUsers = engagedUsersCtx.createLinearGradient(0, 0, 0, 450);
    gradientStrokeengagedUsers.addColorStop(0, '#009efb');

    var gradientFillengagedUsers = engagedUsersCtx.createLinearGradient(0, 0, 0, 450);
    gradientFillengagedUsers.addColorStop(0, "rgba(0, 158, 251, 0.50)");
    gradientFillengagedUsers.addColorStop(1, "rgba(255,255,255,0)");

    new Chart(engagedUsersCtx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            datasets: [{
                label: "Data",
                borderColor: gradientStrokeengagedUsers,
                pointBorderColor: gradientStrokeengagedUsers,
                pointBackgroundColor: gradientStrokeengagedUsers,
                pointHoverBackgroundColor: gradientStrokeengagedUsers,
                pointHoverBorderColor: gradientStrokeengagedUsers,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFillengagedUsers,
                borderWidth: 2,
                data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });

    /* Page Impressions */
    var pageImpressionsCtx = document.getElementById('page-impressions').getContext("2d");
    var gradientStrokepageImpressions = pageImpressionsCtx.createLinearGradient(0, 0, 0, 450);
    gradientStrokepageImpressions.addColorStop(0, '#009efb');

    var gradientFillpageImpressions = pageImpressionsCtx.createLinearGradient(0, 0, 0, 450);
    gradientFillpageImpressions.addColorStop(0, "rgba(0, 158, 251, 0.50)");
    gradientFillpageImpressions.addColorStop(1, "rgba(255,255,255,0)");

    new Chart(pageImpressionsCtx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            datasets: [{
                label: "Data",
                borderColor: gradientStrokepageImpressions,
                pointBorderColor: gradientStrokepageImpressions,
                pointBackgroundColor: gradientStrokepageImpressions,
                pointHoverBackgroundColor: gradientStrokepageImpressions,
                pointHoverBorderColor: gradientStrokepageImpressions,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFillpageImpressions,
                borderWidth: 2,
                data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });


    // Overview slider
    $('.ms-medical-overview-slider').slick({
        dots: false,

        infinite: false,
        slidesToShow: 4,
        arrows: true,
        prevArrow: $('.prev-item'),
        nextArrow: $('.next-item'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //Group Bar Chart
    new Chart(document.getElementById("bar-chart-grouped"), {
        type: 'bar',
        data: {
            labels: ["2019", "2020", "2021", "2022"],
            datasets: [
                {
                    label: "ICU",
                    backgroundColor: "#009efb",
                    data: [133, 221, 783, 2478]
                }, {
                    label: "OPD",
                    backgroundColor: "#4f8dca",
                    data: [408, 547, 675, 734]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Patient In'
            }
        }
    });


    //Line Chart
    var ctx = document.getElementById('line-chart').getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 0, 0, 450);
    gradientStroke.addColorStop(0, '#009efb');

    var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
    gradientFill.addColorStop(0, "rgba(0, 158, 251, 0.50)");
    gradientFill.addColorStop(1, "rgba(0, 158, 251, 0.04)");

    // all data
    var data_1 = [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600];
    var data_2 = [4100, 3800, 3200, 3400, 2700, 2600, 3300, 3000, 2900];
    var labels = ["June-11", "June-12", "June-13", "June-14", "June-15", "June-16", "June-17", "June-18", "June-19"];

    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Patient",
                borderColor: gradientStroke,
                pointBorderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 1,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 2,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 1,
                data: data_1
            }]
        },
        options: {
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 200,
                        padding: 20
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });

    // const diagnosisAndRisk = await funDiagnosisRisk();
    // console.log(diagnosisAndRisk);
    //
    // let diagnosisData = [];
    // diagnosisData.push(diagnosisAndRisk['diagnosis']['Hip fracture']);
    // diagnosisData.push(diagnosisAndRisk['diagnosis']['Concussion']);
    // diagnosisData.push(diagnosisAndRisk['diagnosis']['Rib Fracture']);
    // diagnosisData.push(diagnosisAndRisk['diagnosis']['Arthritis']);
    //
    // let riskData = [];
    // riskData.push(diagnosisAndRisk['risk']['Dementia']);
    // riskData.push(diagnosisAndRisk['risk']['Strong medication']);
    // riskData.push(diagnosisAndRisk['risk']['Self harm']);
    // riskData.push(diagnosisAndRisk['risk']['Low food intake']);
    //
    // console.log(diagnosisData);


    //Group Bar Chart
    // new Chart(document.getElementById("bar-chart-grouped-diagnosis"), {
    //     type: 'bar',
    //     data: {
    //         labels: ["Hip fracture", "Concussion", "Rib fracture", "Arthritis"],
    //         datasets: [
    //             {
    //                 backgroundColor: "#73C6B6",
    //                 data: diagnosisData
    //             },
    //         ]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Diagnosis'
    //         },
    //         legend: {
    //             display: false,
    //         },
    //     }
    // });
    //
    // //Group Bar Chart
    // new Chart(document.getElementById("bar-chart-grouped-risk"), {
    //     type: 'bar',
    //     data: {
    //         labels: ["Dementia", "Strong medication", "Self harm", "Low food intake"],
    //         datasets: [
    //             {
    //                 backgroundColor: "#ABEBC6",
    //                 data: riskData
    //             },
    //         ]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Risk Factors'
    //         },
    //         legend: {
    //             display: false,
    //         },
    //     }
    // });


    //Line Chart 2
    var ctx2 = document.getElementById('line-chart-2').getContext("2d");
    var gradientStroke2 = ctx2.createLinearGradient(0, 0, 0, 450);
    gradientStroke2.addColorStop(0, '#009efb');

    var gradientFill2 = ctx2.createLinearGradient(0, 0, 0, 450);
    gradientFill2.addColorStop(0, "rgba(0, 158, 251, 0.50)");
    gradientFill2.addColorStop(1, "rgba(255,255,255,0)");

    var lineChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            datasets: [{
                label: "Data",
                borderColor: gradientStroke2,
                pointBorderColor: gradientStroke2,
                pointBackgroundColor: gradientStroke2,
                pointHoverBackgroundColor: gradientStroke2,
                pointHoverBorderColor: gradientStroke2,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFill2,
                borderWidth: 2,
                data: [1, 4, 7, 3, 1, 7, 2, 5, 8, 3, 7, 5, 4, 3, 7]
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });


    //Line chart 3
    var zCashCtx = document.getElementById('line-chart-3').getContext("2d");
    var gradientStrokeZCash = zCashCtx.createLinearGradient(0, 0, 0, 450);
    gradientStrokeZCash.addColorStop(0, '#009efb');

    var gradientFillZCash = zCashCtx.createLinearGradient(0, 0, 0, 450);
    gradientFillZCash.addColorStop(0, "rgba(0, 158, 251, 0.50)");
    gradientFillZCash.addColorStop(1, "rgba(255,255,255,0)");

    new Chart(zCashCtx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            datasets: [{
                label: "Data",
                borderColor: gradientStrokeZCash,
                pointBorderColor: gradientStrokeZCash,
                pointBackgroundColor: gradientStrokeZCash,
                pointHoverBackgroundColor: gradientStrokeZCash,
                pointHoverBorderColor: gradientStrokeZCash,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFillZCash,
                borderWidth: 2,
                data: [5, 6, 8, 1, 5, 3, 9, 7, 5, 8, 7, 3, 6, 9, 1]
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });


    //Line chart 4
    var peerCoinCtx = document.getElementById('line-chart-4').getContext("2d");
    var gradientStrokePeercoin = peerCoinCtx.createLinearGradient(0, 0, 0, 450);
    gradientStrokePeercoin.addColorStop(0, '#009efb');

    var gradientFillPeercoin = peerCoinCtx.createLinearGradient(0, 0, 0, 450);
    gradientFillPeercoin.addColorStop(0, "rgba(0, 158, 251, 0.50)");
    gradientFillPeercoin.addColorStop(1, "rgba(255,255,255,0)");

    new Chart(peerCoinCtx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            datasets: [{
                label: "Data",
                borderColor: gradientStrokePeercoin,
                pointBorderColor: gradientStrokePeercoin,
                pointBackgroundColor: gradientStrokePeercoin,
                pointHoverBackgroundColor: gradientStrokePeercoin,
                pointHoverBorderColor: gradientStrokePeercoin,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFillPeercoin,
                borderWidth: 2,
                data: [1, 4, 7, 3, 5, 7, 6, 5, 8, 3, 5, 5, 4, 3, 7]
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });


})(jQuery);
