export default class Guru{
    constructor(name, address,age){
        this.id = Guru.generateId();
        this.name = name;
        this.address = address;
        this.age = age;
    }

    static generateId(){
        let thisId = id;
        id++;
        return thisId;
    }
}

var id = 1;