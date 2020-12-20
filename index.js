// const battleship = () => {
//   return 'The winner is...?'
// }

// const gameResult = battleship()

// const htmlTarget = document.getElementById('result')
// htmlTarget.innerHTML = gameResult
let myGridSize=prompt("enter the size of your grid");
let EnemyGridSize=prompt("enter the size of the enemy grid");

let myGrid=createGrid(myGridSize);
let EnemyGrid=createGrid(EnemyGridSize)
let myShip=3;
let enemyShip=3;
printGrid(myGrid);
printGrid(EnemyGrid,true);


for(let i=1;i<5;i++){
  let x=prompt("Enter x coordinate for your ship#",i)
  let y = prompt("Enter y coordinate for your ship#",i)
  placeCharacter(x,y,'0',myGrid);

  printGrid(myGrid);
printGrid(EnemyGrid,true);
}


function createGrid(size){
  let grid=[];
  for(let i = 0;i < size;i++){
    grid[i]=[];
    for(let j = 0;j < size;j++){
      grid[i][j] ='-';
    }
  }
  return grid;
}
function printGrid(grid,isEnemy=false){
  const header = createHeader(grid.length);
  console.log(header);
  for(let i=0;i<grid.length;i++){
    let rowStr = i + " ";
    for(let cell of grid[i]){
      if(isEnemy && cell == '0'){
        rowStr += '-'
      }else{
        rowStr += cell + ' ';
      }
    }
    console.log(rowStr);
  }
}
function createHeader(size){
  let result = ' ';
  for(let i=0;i<size;i++){
    result +=i +" ";
    
    }
    return result;
  }
  
function placeCharacter(x,y,c,grid){
  grid[y,x]=c
}