// stacks

/*functions:    push placing data on top of stack
                pop removing thr top element
                peak viewing the top element of a stack
                length determining how many elecments are in a stack
                
                Using an array
*/


let letters= []; // this can represent a stack

let word = "racecar";

let rword = "";

//puting letters into the stack using by letter entering
for(let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack which takes the last placed letter and puts it into the strng
for(let i = 0; i<word.length; i++){
    rword+=letters.pop();
}