// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

function points(games) {
  let results = games.map(g => {
    let team1 = g.split(':')[0];
    let team2 = g.split(':')[1];
    if(team1 - team2 > 0){
      return 3;
    } else if (team1 - team2 === 0){
      return 1;
    } else {
      return 0;
    }
  })
  return results.reduce((a,c) => a + c);
}

// function points(games) {
//   let results = 0;
//   for(let i = 0; i < games.length; i++){
//     let currentGame = games[i];
//     let team1Score = currentGame.split(':')[0];
//     let team2Score = currentGame.split(':')[1];

//     if(team1Score - team2Score > 0){
//       results += 3;
//     } else if (team1Score - team2Score === 0){
//       results += 1;
//     } else {
//       results += 0;
//     }
//   }
//   return results;
// }




console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));
console.log(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']));