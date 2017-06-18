export default class Rating {
    constructor(user, price=50, food=50, satisfaction=50, atmosphere=50, comment='', privateComment=''){
        this.user = user;
        this.price = price;
        this.food = food;
        this.satisfaction = satisfaction;
        this.atmosphere = atmosphere;
        this.comment = comment;
        this.privateComment = privateComment;
    }
}