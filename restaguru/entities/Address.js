export default class Address {
    constructor(country='', city='') {
        this.country = country;
        this.city = city;
    }

    equals(address){
        return this.country == address.country && this.city == address.city;
    }
}