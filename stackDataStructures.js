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

if(word===rword){
    console.log(word + ' this is the same going backwards as forwards');
}
else{
    console.log('nope, '+word+'not one.');
}
/*  moving on to functions as stacks*/
//create the main function
let Stack = function(){
    this.count = 0;
    this.storage={};


    //adds value to end of stack
this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
}



//removes values at the end
this.pop = function(){
    if(this.count ===o){
        return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
this.size=function(){
    return this.count;
}
//end value returned.
this.peek=function(){
    return this.storage[this.count-1];
}
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('words');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


