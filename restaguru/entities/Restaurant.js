import Rating from './Rating';

export default class Restaurant{
    constructor(name='', address='', kind='', ratings=[]){
        this.id = Restaurant.generateId();
        this.name = name;
        this.address = address;
        this.kind = kind;
        this.ratings = ratings;
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

    static generateId(){
        let thisId = id;
        id++;
        return thisId;
    }

    static factory(user){
        restaurant = new Restaurant();
        restaurant.ratings.push(new Rating(user));
        return restaurant;
    }
}

var id = 1;