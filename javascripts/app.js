// Rover Object Goes Here
var rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog : [[0,0]]
}

var rover2 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog : [[0,0]]
}

// ======================

// ======================

//1º Print the Grid with Obsatacles
//2º Execute the movements


//Grid with Obstacles:

var grid = new Array (10);
  for (var i = 0; i < 10; i++) {
    grid[i] = new Array (10);
    for (var j = 0; j <10; j++) {
      
        if (num === 1){
              grid[i][j] = "O"}
        else if (num !== 1) {grid[i][j] = null}; 
          var num = Math.floor(Math.random() * 10);
        };   
  }
  

//Execute your rover movements if you want:
//Your Commands Here: must be "f", "b", "r" or "l":

function movements (rover) {
 var commands ="rffrfflfrff"
  for (var i = 0; i < commands.length; i++) {
 
    if (commands [i] === "r") {
      turnRight(rover);
    }
    else if (commands [i] === "l") {
      turnLeft(rover);
    }
    else if (commands [i] === "f") {
      moveForward(rover);
    }  
    else if (commands [i] === "b") {
      moveBackward(rover);
    }
    else {
      console.log ("Invalid input, commands must be f, b, r or l")
    }
  } 
}

//Function turnLeft:
function turnLeft(rover){
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case  "N":
      rover.direction = "W";
      console.log ("rover heading west");
      break;
    case  "E":
      rover.direction = "N";
      console.log ("rover heading north");
      break;
    case "S":
    rover.direction = "E";
    console.log ("rover heading east");
      break;
    case "W":
    rover.direction = "S";
    console.log ("rover heading south");
      break;
  }
}


//Function turnRight:
function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log ("rover heading east");
      break;
    case "E":
      rover.direction = "S";
      console.log ("rover heading south");
      break;
    case "S":
    rover.direction = "W";
    console.log ("rover heading west");
      break;
    case "W":
    rover.direction = "N";
    console.log ("rover heading north");
      break;
  }
}

//Function moveForward:
function moveForward(rover){
  console.log("moveForward was called");
  var nextSpot;

  switch (rover.direction) {
    case "N":
    nextSpot = grid[rover.y -1][rover.x];
      if (rover.y !== 0 && nextSpot !== "O" && nextSpot !== "R"){
          rover.y -=1;
          grid [rover.y +1][rover.x] = null;
        }
      else if (nextSpot === "O"){
        console.log ("obstacle ahead")
      }
      else if (nextSpot === "R") {
        console.log ("other rover ahead")
      }
      else if (rover.y === 0) {
        console.log ("rover on the grid limits")
      }

     break;   

    case "E":
      nextSpot = grid[rover.y][rover.x + 1];
      if (rover.x !== 9 && nextSpot !== "O" && nextSpot !== "R") {
          rover.x +=1; 
          grid [rover.y][rover.x -1] = null;
        }
      else if (nextSpot === "O"){
        console.log ("obstacle ahead")
      }  
      else if (nextSpot === "R") {
        console.log ("other rover ahead")
      }
      else if (rover.x === 9) {
        console.log ("rover on the grid limits");
      }
     break;    
     

    case "S":
      nextSpot = grid[rover.y + 1][rover.x];
      if (rover.y !== 9 && nextSpot !== "O" && nextSpot !== "R") {
          rover.y +=1; 
          grid [rover.y - 1][rover.x] = null;
        } 
      else if (nextSpot === "O"){
          console.log ("obstacle ahead");
      }    
      else if (nextSpot === "R") {
        console.log ("other rover ahead")
      }
      else if (rover.y === 9){
        console.log ("rover on the grid limits")
      }     
   break; 

    case "W":
      nextSpot = grid[rover.y][rover.x - 1];
      if (rover.x !== 0 && nextSpot !== "O" && nextSpot !== "R") {
          rover.x -=1; 
          grid [rover.y][rover.x +1] = null;
        } 
      else if (nextSpot === "O"){
        console.log ("obstacle ahead")
      }   
      else if (nextSpot === "R") {
        console.log ("other rover ahead")
      }  
      else if (rover.x === 0){
        console.log ("rover on the grid limits")
      }     
     break;       
  };
  rover.travelLog.push ([rover.x,rover.y]);

  grid[rover.y][rover.x] = "R";

  console.log ("rover on " + [rover.x,rover.y]);
}

//function moveBackward
function moveBackward(rover){
  console.log("moveBackward was called");
  var nextSpot;

  switch (rover.direction) {
    case "N":
      nextSpot = grid[rover.y + 1][rover.x];
      if (rover.y !== 9 && nextSpot !== "O") {
          rover.y +=1;
          grid [rover.y -1][rover.x] = null;
      }
      else if (nextSpot === "O") {
      console.log ("obstacle in the back")
    }  
      else if (rover.y === 9){
      console.log ("rover on the grid limits")
    }
   break;
   
   case "E":
      nextSpot = grid[rover.y][rover.x - 1];
      if (rover.x !== 0 && nextSpot !== "O") {
         rover.x -=1;
         grid [rover.y][rover.x +1] = null;
      }
      else if(nextSpot === "O"){
        console.log ("obstacle in the back")
      }
      else if (rover.x === 0){
      console.log ("rover on the grid limits")
      }
   break;

   case "S":
      nextSpot = grid[rover.y - 1][rover.x];
      if (rover.y !== 0 && nextSpot !== "O") {
         rover.y -=1;
         grid [rover.y + 1][rover.x] = null;
      }
      else if (nextSpot === "O"){
        console.log ("obstacle in the back")
      }
      else if (rover.y === 0){
      console.log ("rover on the grid limits")
      }
   break;

   case "W":
   nextSpot = grid[rover.y][rover.x + 1];
   if (rover.x !== 9 && nextSpot !== "O") {
      rover.x +=1;
      grid [rover.y][rover.x - 1] = null;
   }
   else if (nextSpot === "O"){
    console.log ("obstacle in the back")
   }
   else if (rover.x === 9){
   console.log ("rover on the grid limits")
   }
  break;
  };
  rover.travelLog.push ([rover.x,rover.y]);

  grid[rover.y][rover.x] = "R";

  console.log ("rover on " + [rover.x,rover.y]);
} 

