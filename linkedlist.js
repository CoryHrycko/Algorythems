let LinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size =0;
}

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
LinkedList.prototype.hasCycle = funtion(){
    let fast = this.head;
    let slow = this.head;
}


















