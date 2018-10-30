/* A linked list is an alternative to array





*/
let LinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size =0;
}
/* this is the add function so the test can move the testing functions up to the next object.*/
LinkedList.prototype.add = function(obj) {
    if(!this.head){
        this.head = obj;
        this.tail = obj;
        this.size ++;
        return;
    }
    this.tail.next = obj;
    this.tail = obj;
    this.size ++;
}
/* this is the subtraction method to slow down the slow test*/
LinkedList.prototype.removeHead = function(){
    if(!this.head) return false;
    let head = this.head.value;
    if(this.size ===1){
        this.head=null;
        this.tail=null;
        this.size --;
        return head;
    }
    this.head = this.head.next;
    this.size --;
    return head;
}
/* this is specifically outlining the test*/
LinkedList.prototype.hasCycle = (() => {
    let fast = this.head;
    let slow = this.head;
    let pause = true;

    while(fast = fast.next){
        if(fast===slow) return true;
        if(!pause) slow = slow.next;
        pause=!pause;
    }
    return false;
});

/*------------------------------------------this is some test variables-*/


let peanutBat={
    value:"chewy",
    next: null
};
let peanuts={
    value:"salty",
    next: null
};
let jalepenos={
    value:"spicey",
    next: null
};

let maple = new LinkedList();
maple.add(peanutBat);
maple.add(peanuts);
maple.hasCycle();
maple.add(jalepenos);
maple.hasCycle();














