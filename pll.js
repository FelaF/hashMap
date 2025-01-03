class Node{
    constructor(data){
        this.data = data
        this.nextNode = null
    }
}
function LinkedList(){
    let List = []
    function prepend(Node){
        if(List.length >= 0){
            let prevFirstNode = List.at(0)
            List.unshift(Node)
            Node.nextNode = prevFirstNode
        }else {
            List.push(Node)
        }
    }
    function append(Node){
        if (List.length >= 1){
            let prevLastNode = List.at(-1)
            List.push(Node)
            prevLastNode.nextNode = Node
        }else {
            List.push(Node)
        }
    }
    function remove(value) {
        // Check if the value exists in the list
        if (find(value) !== null) {
            let prevNode = null;
            let currentNode = head();
    
            while (currentNode !== null) {
                if (currentNode.data === value) {
                    // If the node to remove is at the head
                    if (currentNode === head()) {
                        List.shift(); // Remove the first node from the array
                        console.log(`removed ${JSON.stringify(currentNode.data)} at head`);
                    } else {
                        // Remove the node by updating the nextNode of the previous node
                        prevNode.nextNode = currentNode.nextNode;
                        let index = List.indexOf(currentNode);
                        List.splice(index, 1);
                        console.log(`removed ${JSON.stringify(currentNode.data)} inside list`);
                    }
                    // Exit the function after one removal if you only want to remove the first occurrence
                    return;
                }
                // Move to the next node
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
        
         }    
    }
    function size(){
        return List.length
    }
    function head(){
        return List[0]
    }
    function tail(){
        return List.at(List.length - 1)
    }
    function at(index){
        return List.at(index)
    }
    function pop(){
        List.pop()
    }
    function contains(value){
        let containing = false
        List.forEach(Node => {
            if (Node.data == value){
                containing = true
            }
        });
        return containing
    }   
    function find(value){
        let indexValue = null
        List.forEach(Node => {
            if (Node.data == value){
                indexValue = List.indexOf(Node);
            }
        });
        return indexValue
    }
    
    function toString(){
        let string = ''
        List.forEach(Node => {
            if(Node.nextNode == null){
                string += `(${Node.data}) -> null`
            }
            else{
                string += `(${Node.data}) -> `
            }
        })
        return string
    }

    return{append,remove,prepend,at,tail,head,pop,size,contains,find,toString}
}

export {Node, LinkedList}
/*
const myLinkedList = new LinkedList()
const One = new Node("1")
const Two = new Node("2")
const Three = new Node("3")
const Four = new Node("4")
const Five = new Node("5")
const Six = new Node("Six")
const Seven = new Node("7")
const Eight = new Node("8")

myLinkedList.append(Three)
myLinkedList.prepend(Four)
myLinkedList.append(Two)
myLinkedList.prepend(One)
myLinkedList.remove("2")
console.log(myLinkedList.toString())

myLinkedList.prepend(Eight)
myLinkedList.append(Seven)
myLinkedList.prepend(Five)
myLinkedList.remove("3")


console.log(myLinkedList.find("4"))
console.log(myLinkedList.toString())
*/
