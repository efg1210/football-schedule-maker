
//winnie_the_pooh = whoomy_whoomy

var finalMessage = "";
var footballTeams = ["Lions", "Cowboys", "Eagles", "Giants", "Rams", "Seahawks", "49ers", "Saints", "Falcons", "Buccaneers", "Ravens", "Steelers", "Patriots", "Jets", "Cheifs", "Broncos", "Titans", "Jaguars"];
var baseballTeams = ["Yankees", "Red Sox", "Athletics", "Rangers", "Royals", "Rays", "Cardinals", "Dodgers", "Rockies", "Phillies", "Marlins", "Brewers"];
var shuffledTeams = [];

function reset(){
  finalMessage = "";
  console.log(shuffledTeams);
  shuffledTeams = [];
  console.log(shuffledTeams);
}

function baseball(){
  reset();
  baseballTeams.forEach(function(element){
    shuffledTeams.push(element);
  });
  shuffledTeams = shuffledTeams.sort(function(a, b){return 0.5 - Math.random()});
  var weeks = 0;
  while(weeks > 9 || weeks == 0){
    weeks = prompt("Number of weeks?");
  }
  start(weeks);
}

function football(){
  reset();
  footballTeams.forEach(function(element){
    shuffledTeams.push(element);
  });
  shuffledTeams = shuffledTeams.sort(function(a, b){return 0.5 - Math.random()});
  var weeks = 0;
  while(weeks > 13 || weeks == 0){
    weeks = prompt("Number of weeks?");
  }
  start(weeks);
}

function start(weeks){
  finalMessage = "";

  console.log(shuffledTeams);
  oneShift(weeks);
  if(weeks > (shuffledTeams.length/2)){
    circleShift((weeks - (shuffledTeams.length/2)));
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
  for(var i = 0; i < weeksOrHalf(weeks); i++){
    finalMessage = finalMessage + "<strong>Week number " + (i + 1).toString() + ":</strong> </br>";
    for(var j = 0; j < Math.floor(shuffledTeams.length/2); j++){
      var calculation = (j + i + 9);
      if(calculation <= (shuffledTeams.length - 1)){
        finalMessage = finalMessage + shuffledTeams[j] + " against " + shuffledTeams[calculation] + "</br>";
      }else{
        finalMessage = finalMessage + shuffledTeams[j] + " against " + shuffledTeams[calculation - (shuffledTeams.length/2)] + "</br>";
      }
    }
  }
}

function circleShift(weeks){
  //setting up
  var arr1 = [];
  var arr2 = [];
  var output = "";
  for(var i = 0; i < shuffledTeams.length/2; i++){
    arr1.push(shuffledTeams[i]);
  }
  for(var i = shuffledTeams.length/2; i < shuffledTeams.length; i++){
    arr2.push(shuffledTeams[i]);
  }

  //creating output message
  for (var i = 0; i < weeksOrHalf(weeks); i++) {
    console.log(weeksOrHalf(weeks));
    console.log(Math.floor(weeksOrHalf(weeks)/2));
    output += "<b>Week number " + (i+1+(shuffledTeams.length/2)).toString() + "</b><br/>";

    //preparing for the message
    var temp = arr1[0];
    for(var j = 0; j < ((shuffledTeams.length/2)); j++){
      arr1[j] = arr1[j+1];
    }
    arr1[arr1.length-1] = arr2[arr2.length-1];
    for(var j = (arr2.length - 1); j > 0; j--){
      arr2[j] = arr2[j-1];
    }
    arr2[0] = temp;

    //message
    for (var j = 0; j < arr1.length; j++) {
      output += arr1[j] + " against " + arr2[j] + "<br/>";
    }
  }
  finalMessage += output;
}

/*
13 weeks
9 is half
4 after half


9 weeks
6 is half
3 after half
*/
