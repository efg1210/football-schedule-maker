
//winnie_the_pooh = whoomy_whoomy

var finalMessage = "";
var teams = ["Lions", "Cowboys", "Eagles", "Giants", "Rams", "Seahawks", "49ers", "Saints", "Falcons", "Buccaneers", "Ravens", "Steelers", "Patriots", "Jets", "Cheifs", "Broncos", "Titans", "Jaguars"];
var shuffledTeams = [];
teams.forEach(function(element){
  shuffledTeams.push(element);
});
shuffledTeams = shuffledTeams.sort(function(a, b){return 0.5 - Math.random()});

function start(){
  var weeks = prompt("Number of weeks?");
  oneShift(weeks);
  if(weeks > (shuffledTeams.length/2)){
    circleShift(weeks - (shuffledTeams.length/2));
  }
  document.getElementById("funDiv").innerHTML = finalMessage;
}

function weeksOrHalf(weeks){
  if (weeks > shuffledTeams.length/2){
    return shuffledTeams.length/2;
  }else{
    return weeks;
  }
}

function oneShift(weeks){
  console.log("helo");
  for(var i = 0; i < weeksOrHalf(weeks); i++){
    finalMessage = finalMessage + "<strong>Week number " + (i + 1).toString() + ":</strong> </br>";
    for(var j = 0; j < Math.floor(shuffledTeams.length/2); j++){
      var calculation = (j + i + 9);
      //console.log(calculation);
      if(calculation <= (shuffledTeams.length - 1)){
        finalMessage = finalMessage + shuffledTeams[j] + " against " + shuffledTeams[calculation] + "</br>";
      }else{
        finalMessage = finalMessage + shuffledTeams[j] + " against " + shuffledTeams[calculation - (shuffledTeams.length/2)] + "</br>";
      }
    }
  }
}

function circleShift(weeks){
  console.log("hi");
  var array1 = [];
  var array2 = [];
  for(var i = 0; i < shuffledTeams.length; i+=2){
    array1.push(shuffledTeams[i]);
  }
  for(var i = 1; i < shuffledTeams.length; i+=2){
    array2.push(shuffledTeams[i]);
  }
  console.log(shuffledTeams);
  console.log(array1);
  console.log(array2);
}
