class HashMap {
    constructor(size = 16){
        this.size = size;
        this.buckets = Array(this.size).fill().map(() => new LinkedList());
        this.loadFactor = 0;
        this.count = 0;
    }
    check(){
        this.loadFactor = this.count / this.size;
        if (this.loadFactor > 0.75){
            this.resize();
        }
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }
    set(key, value) {
        const index = this.hash(key);
        const list = this.buckets[index];
        const newNode = new Node({ key, value });
        
        if (list.size() === 0) {
            list.append(newNode);
        } else {
            // If key already exists, update value, otherwise append
            let current = list.head();
            while (current) {
                if (current.data.key === key) {
                    current.data.value = value;
                    return;
                }
                current = current.nextNode;
            }
            list.append(newNode);
        }
        this.count += 1
        this.check();
    }
    get(key) {
        const index = this.hash(key);
        const list = this.buckets[index];
        let current = list.head();
        
        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.nextNode;
        }
        return undefined; // Key not found
    }

    has(key){
        const index = this.hash(key);
        const list = this.buckets[index]
        let keyFound = false
        this.buckets.List.forEach(node => {
            if(node.data.key === key){
                keyFound = true
            }
        
        })
        return keyFound
    }
    remove(key){
        const index = this.hash(key);
        const list = this.buckets[index]
        let current = list.head();
        let prev = null;

        while(current){
            if (current.data.key === key){
                this.count -= 1
                if (prev === null){
                    list.pop();
                    if (list.size() > 0){
                        list.prepend(list.head());
                    }
                    else {
                        prev.nextNode = current.nextNode;
                    }
                    return true
                }
                prev = current;
                current = current.nextNode
            }

        }
        return `Key not Found`
    }
    length(){
        return this.count
    }
    clear(){
        this.buckets.forEach(bucket => {
            bucket.List.length = 0;
        })
        this.count = 0
    }
    keys(){
        let keys = [];
        this.buckets.forEach(bucket => {
            bucket.List.forEach((node) => {
                keys.push(node.data.key)
            });
        });
        return keys
    }
    values(){
        let values = [];
        this.buckets.forEach(bucket => {
            bucket.List.forEach((node) => {
                values.push(node.data.value)
            });
        });
        return values
    }
    entries() {
        let entries = [];
        this.buckets.forEach(bucket => {
            bucket.List.forEach((node) => {
                entries.push([node.data.key, node.data.value]);
            });
        });
        return entries; // Return the collected entries
    }
    resize(){
        const oldBuckets = this.buckets;
        this.size *= 2;
        this.buckets = Array(this.size).fill(null).map(() => new LinkedList());
        this.count = 0;
        this.loadFactor = 0;
        for (const bucket of oldBuckets) {
            for (const item of bucket) {
                this.set(item.key, item.value);
            }
        }

    }

}
class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

function LinkedList() {
    this.List = [];

    // Using arrow functions to maintain 'this' context
    const prepend = (Node) => {
        if (this.List.length > 0) {
            let prevFirstNode = this.List[0];
            this.List.unshift(Node);
            Node.nextNode = prevFirstNode;
        } else {
            this.List.push(Node);
        }
    };

    const append = (Node) => {
        if (this.List.length > 0) {
            let prevLastNode = this.List[this.List.length - 1];
            this.List.push(Node);
            prevLastNode.nextNode = Node;
        } else {
            this.List.push(Node);
        }
    };

    const size = () => {
        return this.List.length;
    };

    const head = () => {
        return this.List[0];
    };

    const tail = () => {
        return this.List[this.List.length - 1];
    };

    const at = (index) => {
        return this.List[index];
    };

    const pop = () => {
        this.List.pop();
    };

    const contains = (value) => {
        return this.List.some(node => node.data === value);
    };

    const find = (value) => {
        let node = this.List.find(node => node.data === value);
        return node ? this.List.indexOf(node) : null;
    };

    const toString = () => {
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
    };

    // Return methods without needing .bind(this) due to arrow functions
    return {
        append, prepend, at, tail, head, pop, size, contains, find, toString
    };
}

// Test the LinkedList
const myLinkedList = LinkedList();
const Dog = new Node("Dog");
const Cat = new Node("Cat");
const Hamster = new Node("Hamster");
const Lizard = new Node("Lizard");
const Snake = new Node("Snake");
const Turtle = new Node("Turtle");

myLinkedList.append(Dog);
myLinkedList.append(Cat);
myLinkedList.prepend(Snake);
myLinkedList.append(Lizard);
myLinkedList.append(Turtle);
myLinkedList.prepend(Hamster);

console.log(myLinkedList.toString());

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')



console.log(test.buckets[0].toString())