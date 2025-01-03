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

    return{append,prepend,at,tail,head,pop,size,contains,find,toString}
}

export {Node, LinkedList}