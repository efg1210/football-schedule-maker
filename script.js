
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
  //setting up
  var arr1 = [];
  var arr2 = [];
  for(var i = 0; i < shuffledTeams.length; i+=2){
    arr1.push(shuffledTeams[i]);
  }
  for(var i = 1; i < shuffledTeams.length; i+=2){
    arr2.push(shuffledTeams[i]);
  }

  //creating output message
  var output = "";
  for (var i = 0; i < weeks; i++) {
    output += "<b>Week number " + (i+1+(shuffledTeams.length/2)) + "</b><br/>";
    for (var j = 0; j < arr1.length; j++) {
      output += arr1[j] + " against " + arr2[j] + "<br/>";
    }

    //preparing for the message
    var temp = arr1[0];
    for(var j = 0; j < ((shuffledTeams.length/2)); j++){
      arr1[j] = arr1[j+1];
      console.log(j, "first");
    }
    arr1[arr1.length] = arr2[arr1.length];
    for(var v = arr2.length; v < ((shuffledTeams.length/2)); v--){
      arr2[v] = arr2[v-1];
      console.log(v, "second");
    }
    arr2[0] = temp;

    //sending output
    finalMessage += output;
  }
}
