import { Address, Rating} from './'

export default class Restaurant{
    constructor(name='', address=new Address(), kind='', ratings=[], photos=[]){
        this.id = Restaurant.generateId();
        this.name = name;
        this.address = address;
        this.kind = kind;
        this.ratings = ratings;
        this.photos = photos;
    }

    get price(){
        return this.ratings.map(
            (rating) => rating.price
        ).reduce(
            (a, b) => a + b, 0
        );
    }

    get satisfaction(){
        return this.ratings.map(
            (rating) => rating.satisfaction
        ).reduce(
            (a, b) => a + b, 0
        );
    }

    get food(){
        return this.ratings.map(
            (rating) => rating.food
        ).reduce(
            (a, b) => a + b, 0
        );
    }

    get atmosphere(){
        return this.ratings.map(
            (rating) => rating.atmosphere
        ).reduce(
            (a, b) => a + b, 0
        );
    }

    get addressStr() {
        return this.address.city + ', ' + this.address.country;
    }

    static generateId(){
        let thisId = id;
        id++;
        return thisId;
    }

    static factory(user, name=''){
        restaurant = new Restaurant(name);
        restaurant.ratings.push(new Rating(user));
        return restaurant;
    }
}

var id = 1;