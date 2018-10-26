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
    //make an aray for rows
    let grid = [];
    for (let i = 0; i<n; i++){
        //array for columns
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
    return grid;
};

let pathing =function(n){
    let paths = 0
    let grid = makeGrid(n);
    

    let findPaths = function(i,j) {
        if (i===n-1 && j ===n-1){
            paths++;
            return;
        }
        if (i < 0 || i>=n || j < 0 || j>=n){
            return;
        }
        if ( grid.visited(i,j)) {
            return;
        }else {
            grid.toggle(i,j);
            findPaths(i,j+1);
            findPaths(i+1,j);
            findPaths(i,j-1);
            findPaths(i-1,j);
            grid.toggle(i,j);
        }
    };
    findPaths(0,0);
    return paths;
};





