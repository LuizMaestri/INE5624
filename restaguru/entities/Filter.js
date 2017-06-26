class GradeFilter {
    constructor() {
        this.using = false;
        this.value = 50;
    }
}

export default class Filter {
    constructor() {
        this.name = '';
        this.country = '';
        this.city = '';
        this.price = new GradeFilter();
        this.satisfaction = new GradeFilter();
        this.atmosphere = new GradeFilter();
        this.food = new GradeFilter();
    }

    get atmosphereValue() {
        if (this.atmosphere.using) {
            return this.atmosphere.value;
        }
        return 0;
    }

    get satisfactionValue() {
        if (this.satisfaction.using) {
            return this.satisfaction.value;
        }
        return 0;
    }

    get foodValue() {
        if (this.food.using) {
            return this.food.value;
        }
        return 0;
    }

    get priceValue() {
        if (this.price.using) {
            return this.price.value;
        }
        return 0;
    }

    isEmpty(){
        return this.restaurant === '' && this.country === '' &&
            this.city === '' && this.priceValue === 0 &&
            this.atmosphereValue === 0 && this.foodValue === 0 &&
            this.satisfactionValue === 0;
    }
}