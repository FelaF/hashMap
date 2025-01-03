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
        let newNode = new Node({key, value}) // Correct way to create Node
    
        if (LList.size() === 0){ 
            LList.append(newNode)

        }
        else {
            let current = LList.head();
            while(current){
                if (current.data.key === key){
                    current.data.value = value
                    return
                }
                current = current.nextNode; // Remove parentheses
            }
            LList.append(newNode)
        }
        this.check()
    }
    get(key) {
        const index = this.hash(key);
        const LList = this.buckets[index];
        if (LList){
            let current = LList.head()
            while(current){
                if (current.data.key === key){
                    return current.data.value
                }
                current = current.nextNode
            }
        }
        return null
    }
    has(key){
        const index = this.hash(key);
        const LList = this.buckets[index];
        let found = false
        if (LList){
            let current = LList.head();
            while (current){
                if (current.data.key === key){
                    found = true;
                    return found
                }
                current = current.nextNode;

            }
            return found
        }
        return false
    }
    remove(key) {
        const index = this.hash(key);
        const LList = this.buckets[index];
        const current = LList.head();
        console.log(LList.head())
        let prev = null;
    
        while (current !== null) {
            if (current.data && current.data.key === key) { // Check if data exists
                if (prev === null) {
                    LList.head = current.nextNode;
                } else {
                    prev.nextNode = current.nextNode;
                }
                if (this.count) {
                    this.count -= 1;
                }
                return true;
            }
            prev = current;
            current = current.nextNode;
        }
        return false;
    }
    length(){}
    clear(){}
    keys(){}
    value(){}
    entries(){}
    resize(){}
}

let firstHashMap = new HashMap()
console.log(firstHashMap)

const nodeOne = new Node("1")
const nodeTwo = new Node("2")
const nodeThree = new Node("3")

firstHashMap.buckets[0].append(nodeOne)
firstHashMap.buckets[0].append(nodeThree)
firstHashMap.buckets[0].prepend(nodeTwo)

console.log(firstHashMap.hash("Four"))
firstHashMap.set("Four", 5)

console.log(firstHashMap.hash("Jimeny"))
firstHashMap.set("Jimeny","Crickets")

console.log(firstHashMap.has("Four"))
console.log(firstHashMap.remove("Jimeny"))
console.log(firstHashMap.remove("Four"))

console.log(firstHashMap.has("Four"))




console.log(firstHashMap.buckets[0].toString())
console.log(firstHashMap)