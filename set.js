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
}






















































