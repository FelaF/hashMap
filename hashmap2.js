import {Node, LinkedList} from "./pll.js"
class HashMap{
    constructor(size = 16){
        this.size = size
        this.buckets = Array(this.size).fill().map(() => new LinkedList());
        this.loadFactor = 0
        this.count = 0
    }
    check(){
        this.loadFactor = this.count / this.size;
        if (this.loadFactor > 0.75){
            this.resize();
        }
    }
    hash(key){
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.size
        }
        return hash
    }
    set(key, value){
        const index = this.hash(key)
        const LList = this.buckets[index]
        const newNode = new Node({key: value})

        if (LList.length === 0){
            LList.append(newNode)
        }
        else {
            let current = LList.head();
            while(current){
                if (current.data.key === key){
                    current.data.value = value
                    return
                }
                current = current.nextNode();
            }
            LList.append(newNode)
        }
        this.count += 1
        this.check()
    }
    get(key){}
    has(key){}
    remove(key){}
    length(){}
    clear(){}
    keys(){}
    value(){}
    entries(){}
    resize(){}
}

const firstHashMap = new HashMap()
console.log(firstHashMap)


const nodeOne = new Node("1")
const nodeTwo = new Node("2")
const nodeThree = new Node("3")
firstHashMap.buckets[0].append(nodeOne)
firstHashMap.buckets[0].append(nodeThree)
firstHashMap.buckets[0].prepend(nodeTwo)
firstHashMap.set("Four",4)
console.log(firstHashMap.buckets[15].toString())
console.log(firstHashMap.hash("Four"))
console.log(firstHashMap.buckets[0].toString())