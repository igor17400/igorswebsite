// Charts
let radarCtx = document.getElementById('programming-chart').getContext('2d');

let knowledge = Array.of(75, 50, 65, 55, 70, 80, 80, 50, 35);
let languages = Array.of('JavaScript', 'Python', 'C', 'Matlab', 'C#', 'HTML', 'CSS', 'SQL', 'Java');

var options = {
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 100
        }
    }
};

var prograKnowledge = {
    labels: languages,
    datasets: [{
        label: 'Programming Language Knowledge',
        backgroundColor: 'rgba(104, 128, 170, 0.5)',
        borderColor: 'rgba(104, 128, 170, 1)',
        pointBackgroundColor: 'rgb(0, 0, 0)',
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: 'rgb(238,238,238)',
        pointHoverBorderColor: 'rgb(238,238,238)',
        data: knowledge,
    }]
};

// Radar
var myRadarChart = new Chart(radarCtx, {
    type: 'radar',
    data: prograKnowledge,
    options: options
});
