//b search tree


class Node {
    constructor(data, left =null, right = null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}




class BST {
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node === null){
            this.root= new Node(data);
            return;
        }else {
            const searchTree = function(node){
                if(data<node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left !==null){
                     return searchTree(node.left);
                    }
                }else if (data>node.data){
                    if(node.right ===null){
                        node.right = new Node(data);
                        return
                    }else if(node.right !==null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    findMin(){
        let current = this.root;
        while(current.left !==null){
            current = current.left;
        }
        return current.data;
    };
    findMax(){
        let current = this.root;
        while(current.right !==null){
            current = current.right;
        }
        return current.data;
    };
    find(data){
        let current = this.root;
        while(current.data !==data){
            if(data < current.data){
                current = current.left;
            }else {
                current = current.right;
            }
            if(current ===null){
                return null;
            }
        }
        return current;
    }
    isPresent(data){
        let current =this.root;
        while(current){
            if(data ===current.data){
                return true;
            }
            if(data<current.data){
                current=current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }
    remove(data){
        const removeNode = function(node,data){
            if(node=null){
                return null;
            }
            if(data == node.data){
            //no children
                if(node.left == null && node.right ==null){
                    return null;
                }
                //no left children
                if(node.left ==null){
                    return node.right;
                }
                //no right 
                if(node.right == null){
                    return node.left;
                }
                // node has both
                let tempNode = node.right;
                while(tempNode.left !==null){
                    tempNode =tempNode.left;
                }
                node.data = tempNode.data;
                node.right=removeNode(node.right,tempNode.data);
                return nodel
            }else if(data <node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else {
                node.right = removeNode(node.right, data);
                return node
            }
        }
        this.root = removeNode(this.root, data);
    }
}

BST.add(33);
BST.add(7);
BST.add(6);
BST.add(454);
BST.add(22);
BST.add(90);
BST.add(12);
BST.add(20);
BST.add(30);
BST.add(543);
BST.add(400);
BST.add(465);
BST.add(4);
BST.add(3);
BST.remove(4);
console.log(BST.findMin());
console.log(BST.findMax());
BST.remove(7);
console.log(BST.isPresent(4));












