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
        let price = this.ratings.map(
            (rating) => rating.price
        ).reduce(
            (a, b) => a + b, 0
        );
        if (this.ratings.length === 0) {
            return parseInt(price);
        }
        return parseInt(price / this.ratings.length);
    }

    get satisfaction(){
        let satisfaction = this.ratings.map(
            (rating) => rating.satisfaction
        ).reduce(
            (a, b) => a + b, 0
        );
        if (this.ratings.length === 0) {
            return parseInt(satisfaction);
        }
        return parseInt(satisfaction / this.ratings.length);
    }

    get food(){
        let food = this.ratings.map(
            (rating) => rating.food
        ).reduce(
            (a, b) => a + b, 0
        );
        if (this.ratings.length === 0) {
            return parseInt(food);
        }
        return parseInt(food / this.ratings.length);
    }

    get atmosphere(){
        let atmosphere = this.ratings.map(
            (rating) => rating.atmosphere
        ).reduce(
            (a, b) => a + b, 0
        );
        if (this.ratings.length === 0) {
            return parseInt(atmosphere);
        }
        return parseInt(atmosphere / this.ratings.length);
    }

    get addressStr() {
        return this.address.city + ', ' + this.address.country;
    }

    equals(restaurant){
        return this.name === restaurant.name && this.address.equals(restaurant.address);
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

    static cast(restaurant){
        return new Restaurant(
            restaurant.name,
            restaurant.address,
            restaurant.kind,
            restaurant.ratings,
            restaurant.photos
        )
    }
}

var id = 1;