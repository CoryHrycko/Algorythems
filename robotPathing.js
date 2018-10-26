// check for finish
     //keep going
// check if we have been here
     //return undefined and go back one
// check to see if in grid
    //return undefined and go back one
//turn right
//move once


//constructor for grid
let makeGrid = function(n) {
    let grid = [];
    for (let i = 0; i<n; i++){
        for(let j=0;j<n;j++){
            grid[i].push(false);
            
        }
    }
    grid.toggle = function(i,j){
        grid[i][j] = !grid[i][j];
    }
    grid.vistited = function(i,j){
        return grid[i][j]
    }
};