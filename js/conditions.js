//comparison scores
var median = 9;
var high = 17;
var max = 196;

var userCondition = function() {};
var leaderBarName = 'Leader';
var leaderBarColor = '#f8704f';
var userBarColor = '#36d77a';
var conditions;
var graphScore;
var parameter = 'Score';
var userBarName = 'Your score';
var condition;

//conditions logic
conditions = {
  nonSkewed: function() {
    $('#feedback-chart-panel').highcharts({
      title:{ text:'' },
      chart: { type: 'column' },
      legend: { enabled: false },
      credits: { enabled: false },
      xAxis: { type: 'category' },
      yAxis: {
        title: { text: parameter },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        labels: { enabled: false }
      },
      plotOptions: {
      series: {
          animation: false
          }
      },
      series: [{
        name: 'Score',
        colorByPoint: true,
        data: [
          { name: userBarName, color: userBarColor, y: score },
          { name: leaderBarName, color: leaderBarColor, y: targetScore }
        ],
        dataLabels: { enabled: true, style: { fontSize: '13px' } }
      }]
    });
    $('#feedback-chart-modal').highcharts({
      title:{ text:'' },
      chart: { type: 'column' },
      legend: { enabled: false },
      credits: { enabled: false },
      xAxis: { type: 'category' },
      yAxis: {
        title: { text: parameter },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        labels: { enabled: false }
      },
      plotOptions: {
      series: {
          animation: false
          }
      },
      series: [{
        name: 'Score',
        colorByPoint: true,
        data: [
          { name: userBarName, color: userBarColor, y: score },
          { name: leaderBarName, color: leaderBarColor, y: targetScore }
        ],
        dataLabels: { enabled: true, style: { fontSize: '13px' } }
      }]
    });
  },
  comparison: {
    leader: function() {
      targetScore = max;
    },
    high: function() {
      targetScore = high;
    },
    median: function() {
      targetScore = median;
    }
  },

  userLeader: function() {
    if ((condition == 0 || condition == 1 || condition == 2) && (score > targetScore)) {
        $("#erase-if-leader").hide();
        $("#leader-feedback").show();

        targetScore = score;
        leaderBarColor = userBarColor;
        leaderBarName = 'Your best score';
        return;
    } else if ((condition == 3 || condition == 4 || condition == 5) && (round > targetScore)) {
        $("#erase-if-leader").hide();
        $("#leader-feedback").show();

      //  targetScore = round;
      //  leaderBarColor = userBarColor;
      //  leaderBarName = "Rounds you've played";
        document.getElementById('leader-feedback').textContent= "You've played more rounds than the leader!";
      return;
    }
  }
}

  // userLeader: function() {
  //   if(score > targetScore) {
  //
  //     $("#erase-if-leader").hide();
  //     $("#leader-feedback").show();
  //
  //     targetScore = score;
  //     leaderBarColor = userBarColor;
  //     leaderBarName = 'Your best';
  //   }
  // }
