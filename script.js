//initialize weapon objects and default fists of fury
var fists = {
  name: "fists",
  damage: 11,
}
var weaponArray = [
  hammer = {
    name: "hammer",
    damage: 21,
  },
  blade = {
    name: "blade",
    damage: 31,
  },
  gun = {
    name: "gun",
    damage: 41,
  }
]
//function that changes user weapon upon selecting the take weapon option
function weaponPicked(){
  weaponTaken = 1;
  var weapon = weaponArray[Math.floor(Math.random()*weaponArray.length)];
  document.getElementById("weapon").style.visibility = "hidden";
  alert(`You found ${weapon.name}!`);
  while (statNode.firstChild) {
    statNode.removeChild(statNode.firstChild);
  };
  healthInfo.textContent = `Your health level is: ${player.health}`;
  weaponInfo.textContent = `Your current weapon is: ${weapon.name}`;
  document.getElementById("statbox").appendChild(healthInfo);
  document.getElementById("statbox").appendChild(weaponInfo);
  return weapon;
}

//initialize player info and set default weapon to fists of fury
var player = {
  health:100,
  weapon: fists,
  target: null,
  score: null,
  settarget: function(enemy){
    this.target = enemy;
  },
  fight: function(){
    var damage = Math.floor(Math.random()*this.weapon.damage);
    console.log(`player did ${damage} damage!`);
    this.target.health -= damage;
    console.log(`enemy has ${this.target.health} health left!`);
  },
  pickUpWeapon: function (item){
    weaponTaken = 1;
    this.weapon = item;
  }
}

//initialize enemies for game
var enemyGoon = {
  name: "Enemy Goon",
  health:10,
  fight: function(){
    var damage = Math.floor(Math.random()*11);
    console.log(`enemy did ${damage} damage!`);
    player.health -= damage;
    console.log(`player has ${player.health} health left!`);
  },
}

var enemyBoss = {
  name: "Goon boss",
  health:12,
  fight: function(){
    var damage = Math.floor(Math.random()*21);
    console.log(`enemy boss did ${damage} damage!`);
    player.health -= damage;
    console.log(`player has ${player.health} health left!`);
  },
}
//set enemies to array for scenario base adventure //
var enemyArray = [enemyGoon, enemyBoss];

//initialize battle proceedings (not used, will be improved on in future iterations for mass attack)
// function battleOutcome (){
//   //assign enemy to fight
//   var enemy = null;
//   var i = 0
//
//   while (enemyArray[0] != undefined){
//     enemy = enemyArray[0];
//     player.settarget(enemy);
//     while (player.health > 0 && enemy.health > 0){
//       if (player.health > 0){
//         player.fight();
//       }
//       if (enemy.health > 0){
//         enemy.fight();
//       }
//     }
//     if (player.health > enemy.health){
//       console.log("player wins!")
//       enemyArray.shift();
//       enemy.health = 100;
//     }else{
//       console.log("enemy wins!")
//       break;
//     }
//   }
// }

//initialize scenario objects and array
var scenario = [
  {
    story: "You find yourself in a room with a painting of a butterfly on the wall. There are two doors to your left and right. What do you do?",
    option: [
      {interact: "Spit at the painting because you hate butterflies.",
      response: "alert(`You are a terrible person!`)"},
      {traverse: "Take the left door.",
      response: "travel()"},
      {traverse: "Take the right door.",
      response: "travel()"},
    ]

  },
  {
    story: "You feel hot in the room. The room is rapidly heating up. What do you do?",
    option:[
      {interact: "Do a sexy dance in the hope that a genie will appear.",
      response: "response()"},
      {interact: "Take a swig of water left suspiciously in the middle of the room.",
      response: "response()"},
      {traverse: "Exit a door that is on the left of the room",
      response: "travel()"},
    ]
  },
  {
    story: "Bam! You feel your head getting smacked by something.",
    option:[
      {fight: "Fight the enemy!",
      response: "fight()"},
      {traverse: "Use the door on your left.",
      response: "travel()"},
    ]
  },
  {
    story: "There's a weapon on the shelf that is in the middle of two doors! I'd suggest you take it first!",
    option: [
      {weapon: "Take weapon.",
      response: "player.pickUpWeapon(weaponPicked())"},
      {traverse: "Take the left door.",
      response: "travel()"},
      {traverse: "Take the right door.",
      response: "travel()"},
    ]
  },
  {
    story: "You see fairy dust floating around as you enter the room. In the middle of a room lies a glowing orb with a sign that says Do Not Touch. What do you do?",
    option:[
      {interact: "Touch the orb.",
      response: "response()"},
      {interact: "Try to catch some fairy dust.",
      response: "response()"},
      {traverse: "Go through a door on the other side of the room.",
      response: "travel()"},
    ]
  },
  {
    story: "You are in a room filled with books. The place looks dusty and it looks like someone left their burrito lying in the corner of the room.",
    option:[
      {interact: "Taste the burrito.",
      response: "response()"},
      {interact: "Eat the burrito.",
      response: "response()"},
      {interact: "Read one of the books.",
      response: "response()"},
      {traverse: "Step over the stale burrito and into a small door",
      response: "travel()"},
    ]
  },
  {
    story: "There are several flies hovering around the body that you see lying in the middle of the room.",
    option:[
      {interact: "Search the body.",
      response: "response()"},
      {interact: "Smell the body.",
      response: "response()"},
      {traverse: "Take the door across the room.",
      response: "travel()"},
    ]
  },
  {
    story: "You find yourself in danger as someone... or something tries to get at you.",
    option:[
      {fight: "Fight the enemy.",
      response: "response()"},
      {traverse: "Use the door across the room.",
      response: "travel()"},
    ]
  },
  {
    story: "This room is strange. You must wonder what is a well doing in the middle of the room.",
    option:[
      {interact: "Throw a coin down the well.",
      response: "response()"},
      {interact: "Draw some water from the well and drink it.",
      response: "response()"},
      {interact: "Relieve yourself into the well.",
      response: "response()"},
      {traverse: "Use the trap door located conveniently next to the sign that says trap door",
      response: "travel()"},
    ]
  }
];

var endMap = {
  story: "A stream of light pours through the edge of the door as you open it. You take a deep breathe of fresh air and pluck a flower by the side of the gravel road. As you walk on, you leave behind you, the memories of a place that never seems to end.",
  option:[
    {traverse: "Keep on walking towards the sound of birds chirping in the distance.",
    response: "gameOverWin()"}
  ]
}
//initialize global variables
var weaponType = null;
var currentScenario = null;
var backPedal = [];
var storySelect = null;
var battleStatus = 0;
var weaponTaken = 0;
var healthInfo = null;
var weaponInfo = null;
var enemyHealthInfo = null;
var endState = 0;
var optionNode = document.getElementById("optionbox");
var storyNode = document.getElementById("storycontainer");
var statNode = document.getElementById("statbox");
document.getElementById("startadventure").style.visibility = "hidden";
//initialize game
function setName(){
  var input = document.getElementById("setname").value;
  document.getElementById("nameinput").style.visibility = "hidden";
  document.getElementById("storytext").innerHTML = `${input}!!! This adventure is fraught with perils. Press start to commence your adventure of a life time!`;
  document.getElementById("startadventure").style.visibility = "visible";
}

//starts the game. Loads player and story settings.
function startAdventure(){
  loadPlayer();
  loadStory();
  document.getElementById("startadventure").style.visibility = "hidden";
}

//load player details. user can see current health and weapon type
function loadPlayer(){
  health = player.health;
  healthInfo = document.createElement("p");
  healthInfo.textContent = `Your health level is: ${health}`;
  document.getElementById("statbox").appendChild(healthInfo);
  weaponType = player.weapon.name;
  weaponInfo = document.createElement("p");
  weaponInfo.textContent = `Your current weapon is: ${weaponType}`;
  document.getElementById("statbox").appendChild(weaponInfo);
}

//function to load random player story and option choices
function loadStory(){
  storySelect = Math.floor(Math.random()*scenario.length);
  //once scenario length drops to two, the end game scenario loads into the scenario array
  if (scenario.length === 2 && endState === 0){
    scenario.push(endMap);
    endState = 1;
  }
  console.log(scenario.length);
  document.getElementById("storycontainer").textContent = scenario[storySelect]["story"];
  currentScenario = scenario[storySelect];
  //creating interact, fight and traverse options
  for (var i = 0; i < scenario[storySelect]["option"].length; i++){
    var btn = document.createElement("button");
    var para = document.createElement("p");
    if (hasOwnProperty.call(scenario[storySelect]["option"][i], "fight") && battleStatus === 0){
      btn.setAttribute("onClick","fight()");
      btn.setAttribute("display", "block");
      btn.setAttribute("class", "options");
      btn.setAttribute("id", "fightbtn");
      btn.textContent = "Fight!";
      document.getElementById("optionbox").appendChild(btn);
      battleStatus = 1;
      break;
    }else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "interact")){
        btn.setAttribute("onClick",scenario[storySelect]["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Interact!";
        para.setAttribute("class", "options");
        para.textContent = scenario[storySelect]["option"][i]["interact"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
    } else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "traverse")){
        btn.setAttribute("onClick", scenario[storySelect]["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Travel!";
        para.setAttribute("class", "options");
        para.textContent = scenario[storySelect]["option"][i]["traverse"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
    } else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "weapon") && weaponTaken === 0){
        btn.setAttribute("onClick", scenario[storySelect]["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("id", "weapon");
        btn.textContent = "Weapon!";
        para.setAttribute("class", "options");
        para.textContent = scenario[storySelect]["option"][i]["weapon"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
    }
  }
  if (backPedal[backPedal.length-1] != undefined && battleStatus === 0){
    var backbtn = document.createElement("button");
    backbtn.setAttribute("onClick","goBack()");
    backbtn.setAttribute("display", "block");
    backbtn.setAttribute("class", "options");
    backbtn.textContent = "Go back!";
    document.getElementById("optionbox").appendChild(backbtn);
  }
  console.log(backPedal);
}
//fight function whenever user encounters a battle, the go back button is disabled to prevent escape
function fight(){
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  var fightbtn = document.createElement("button");
  fightbtn.textContent = "Attack!";
  fightbtn.setAttribute("onClick", "battle()");
  document.getElementById("optionbox").appendChild(fightbtn);
   var enemyInfo = document.createElement("p");
   enemyInfo.textContent = `The Enemy is: ${enemyArray[0].name}`;
  document.getElementById("statbox").appendChild(enemyInfo);
}
//battle mechanics allow user to engage enemy. click on attack to see outcome of fight.
function battle(){
  enemy = enemyArray[0];
  player.settarget(enemy);
  if (player.health > 0){
    player.fight();
  }
  if (enemy.health > 0){
    enemy.fight();
  }
  updateHealthInfo();
  if (player.health < 0){
    console.log("enemy wins!")
    alert("You lost this fight!")
    gameOver();
  }else if (enemy.health < 0){
    battleStatus = 1;
    player.score += 1;
    enemyArray.shift();
    enemyHealthInfo.textContent = ``;
    console.log("player wins!")
    alert("You win this fight!")
    resumeGame();
  }
}
//as user clicks the fight button, player and enemy health will be update.
function updateHealthInfo(){
  while (statNode.firstChild) {
    statNode.removeChild(statNode.firstChild);
  };
  healthInfo = document.createElement("p");
  enemyHealthInfo = document.createElement("p");
  weaponInfo = document.createElement("p");
  healthInfo.textContent = `Your health level is: ${player.health}`;
  weaponInfo.textContent = `Your current weapon is: ${player.weapon.name}`;
  enemyHealthInfo.textContent = `Enemy health level is: ${enemyArray[0].health}`;
  document.getElementById("statbox").appendChild(healthInfo);
  document.getElementById("statbox").appendChild(weaponInfo);
  document.getElementById("statbox").appendChild(enemyHealthInfo);
}

function response (){
  console.log("response function called")
}
//after battle, user will be able to continue journey at same scenario prior to battle.
function resumeGame(){
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  document.getElementById("storycontainer").textContent = currentScenario["story"];
  for (var i = 0; i < currentScenario["option"].length; i++){
    var btn = document.createElement("button");
    var para = document.createElement("p");
    if (hasOwnProperty.call(currentScenario["option"][i], "fight") && battleStatus === 0){
      btn.setAttribute("onClick","fight()");
      btn.setAttribute("display", "block");
      btn.setAttribute("class", "options");
      btn.textContent = "Fight!";
      document.getElementById("optionbox").appendChild(btn);
      break;
    }else if (hasOwnProperty.call(currentScenario["option"][i], "interact")){
        btn.setAttribute("onClick",currentScenario["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Interact!";
        para.setAttribute("class", "options");
        para.textContent = currentScenario["option"][i]["interact"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
    } else if (hasOwnProperty.call(currentScenario["option"][i], "traverse")){
        btn.setAttribute("onClick", currentScenario["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Travel!";
        para.setAttribute("class", "options");
        para.textContent = currentScenario["option"][i]["traverse"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
    } else if (hasOwnProperty.call(currentScenario["option"][i], "weapon") && weaponTaken === 0){
        btn.setAttribute("onClick", currentScenario["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("id", "weapon");
        btn.textContent = "Weapon!";
        para.setAttribute("class", "options");
        para.textContent = currentScenario["option"][i]["weapon"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
    }
  }
  battleStatus = 0;
  if (backPedal[backPedal.length-1] != undefined && battleStatus === 0){
    var backbtn = document.createElement("button");
    backbtn.setAttribute("onClick","goBack()");
    backbtn.setAttribute("display", "block");
    backbtn.setAttribute("class", "options");
    backbtn.textContent = "Go back!";
    document.getElementById("optionbox").appendChild(backbtn);
  }
}

function gameOverLose(){
  var optionNode = document.getElementById("optionbox");
  var storyNode = document.getElementById("storycontainer");
  var statNode = document.getElementById("statbox");

  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  while (statNode.firstChild) {
    statNode.removeChild(statNode.firstChild);
  };
  var para = document.createElement("p");
  var btn = document.createElement("button");
  var stats = document.createElement("p");
  stats.setAttribute("class", "options");
  stats.textContent = `Your total score(Number of kills) is: ${player.score}`;
  para.setAttribute("class", "options");
  para.textContent = "Oh no! Your character has passed away (not so peacefully) from receiving too much blunt force trauma."
  btn.setAttribute("onClick","restartGame()");
  btn.setAttribute("display", "block");
  btn.setAttribute("class", "options");
  btn.textContent = "Click to restart game!";
  document.getElementById("storytext").appendChild(para);
  document.getElementById("statbox").appendChild(stats);
  document.getElementById("optionbox").appendChild(btn);
}

function gameOverWin(){
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  while (statNode.firstChild) {
    statNode.removeChild(statNode.firstChild);
  };
  var para = document.createElement("p");
  var btn = document.createElement("button");
  var stats = document.createElement("p");
  stats.setAttribute("class", "options");
  stats.textContent = `Your total score(Number of kills) is: ${player.score}`;
  para.setAttribute("class", "options");
  para.textContent = "Congratulations! You've completed the adventure and managed to escape! Have a nice day!"
  btn.setAttribute("onClick","restartGame()");
  btn.setAttribute("display", "block");
  btn.setAttribute("class", "options");
  btn.textContent = "Click to restart the game!";
  document.getElementById("storycontainer").appendChild(para);
  document.getElementById("statbox").appendChild(stats);
  document.getElementById("optionbox").appendChild(btn);
}

//function to allow user to go back to previous room. loads from a checkpoint style array(user can only go back once for now.)
function goBack(){
  console.log("goBack function called")
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  document.getElementById("storycontainer").textContent = backPedal[backPedal.length-1]["story"];
  if (backPedal[backPedal.length-1] != undefined){
    for (var i = 0; i < backPedal[backPedal.length-1]["option"].length; i++){
      var btn = document.createElement("button");
      var para = document.createElement("p");
      if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "fight") && battleStatus === 0){
        btn.setAttribute("onClick","fight()");
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Fight!";
        document.getElementById("optionbox").appendChild(btn);
        break;
      }else if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "interact")){
          btn.setAttribute("onClick",backPedal[backPedal.length-1]["option"][i]["response"]);
          btn.setAttribute("display", "block");
          btn.setAttribute("class", "options");
          btn.textContent = "Interact!";
          para.setAttribute("class", "options");
          para.textContent = backPedal[backPedal.length-1]["option"][i]["interact"];
          document.getElementById("optionbox").appendChild(btn);
          document.getElementById("optionbox").appendChild(para);
      } else if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "traverse")){
          btn.setAttribute("onClick", backPedal[backPedal.length-1]["option"][i]["response"]);
          btn.setAttribute("display", "block");
          btn.setAttribute("class", "options");
          btn.textContent = "Travel!";
          para.setAttribute("class", "options");
          para.textContent = backPedal[backPedal.length-1]["option"][i]["traverse"];
          document.getElementById("optionbox").appendChild(btn);
          document.getElementById("optionbox").appendChild(para);
      } else if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "weapon") && weaponTaken === 0){
          btn.setAttribute("onClick", backPedal[backPedal.length-1]["option"][i]["response"]);
          btn.setAttribute("display", "block");
          btn.setAttribute("id", "weapon");
          btn.textContent = "Weapon!";
          para.setAttribute("class", "options");
          para.textContent = backPedal[backPedal.length-1]["option"][i]["weapon"];
          document.getElementById("optionbox").appendChild(btn);
          document.getElementById("optionbox").appendChild(para);
      }
    }
    battleStatus = 0;
    if (backPedal[backPedal.length-1] != undefined && battleStatus === 0){
      var backbtn = document.createElement("button");
      backbtn.setAttribute("onClick","goBack()");
      backbtn.setAttribute("display", "block");
      backbtn.setAttribute("class", "options");
      backbtn.textContent = "Go back!";
      document.getElementById("optionbox").appendChild(backbtn);
    }
  }
  backPedal.pop();
}

//function to load next scenario
function travel(){
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  backPedal = scenario.splice([storySelect], 1);
  loadStory();
}

//function to restart game upon complete or end
function restartGame(){

}

// function loadMain(){
//     if (hasOwnProperty.call(scenario[storySelect]["option"][i], "interact")){
//       btn.setAttribute("onClick",scenario[storySelect]["option"][i]["response"]);
//       btn.setAttribute("display", "block");
//       btn.setAttribute("class", "options");
//       btn.textContent = "Interact!";
//       para.setAttribute("class", "options");
//       para.textContent = scenario[storySelect]["option"][i]["interact"];
//       document.getElementById("optionbox").appendChild(btn);
//       document.getElementById("optionbox").appendChild(para);
//     } else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "traverse")){
//       btn.setAttribute("onClick","travel()");
//       btn.setAttribute("display", "block");
//       btn.setAttribute("class", "options");
//       btn.textContent = "Travel!";
//       para.setAttribute("class", "options");
//       para.textContent = scenario[storySelect]["option"][i]["traverse"];
//       document.getElementById("optionbox").appendChild(btn);
//       document.getElementById("optionbox").appendChild(para);
//     }
// }
