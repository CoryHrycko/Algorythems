/* */
/*  Sets!!!!!!*/

function mySet() {
    let collection = [];
    // this checks gor pressence of the same elements
    this.has = ((element)=>{
        return (collection.indexOf(element)!==-1)
    });
    //method returns all values in the set
    this.values = (()=>{
        return collection;
    });
    // this will add an item on top of the set
    this.add =((element)=>{
        if(!this.has(element)){
            collection.push(element);
            return true;
    }
        return false;
    });
    // removes element from the set
    this.remove = ((element)=>{
        if(!this.has(element)){    
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    });
    //return size
    this.size = function(){
        return collection.length;
    };
    //union join
    this.union= function(otherSet){
        //defines variables taken
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        //sets up the method in which we stor the orgi numbs
        firstSet.forEach((e) => {
            unionSet.add(e);
        });
        //sets up and concatenates the second set
        secondSet.forEach((e) => {
            unionSet.add(e);
        });
        return unionSet;
    }
    //intersection all the values in both set full join
    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.value();
        firstSet.forEach((e)=>{
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return IntersectionSet;
    };
    //difference method
    this.difference= function(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach((e)=>{
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
    //subsetting
    this.subSet = function(otherSet){
        let firstSet = this.values();
        return firstSet.every((value)=>{
            return otherSet.has(value);
        });
    };
};

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subSet(setB));
console.log(setA.intersection(setB).values());



















































