export default class Address {
    constructor(country='', city='') {
        this.country = country;
        this.city = city;
    }

    equals(address){
        return this.country.toUpperCase() == address.country.toUpperCase() && this.city.toUpperCase() == address.city.toUpperCase();
    }
}