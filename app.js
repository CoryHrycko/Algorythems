//quadratic-take the first letter, if it appears after running indexof.then we move on to the next letter. repeat.
//string with 1,000,000
//for each to all million takes forever




//linear = 1,000,000 + 1,000,000 + 1,000,000 +1,000,000

//first step is to build an object from each letter in string
// ask a question as it being built is this key already here? if so, set the value to fale. If not, set the value as a tuple in the tuple = [index, true];


//for loop if false move on
//if != false, answer is letter if index<lowestIndex,

//return answer || default


function noRepeat(str){
    let arr = str.split('');
    let obj = {};
    let answer;
    let minIndex = arr.length;

    arr.forEach((letter, index) => {
        if (!obj[letter]) {
            obj[letter]=false;
        }
        
        else if(obj[letter]){
            obj[letter]=false;
        }
    });

    for ( let key in obj){
        if (!obj[key]){

        }

        else {
            if
        (obj[key][0]<minIndex){
            answer = key;
            minIndex = obj[key][0]
        }   
        }
    }
    return answer
}