function Car(car_brand, car_model, price){
    this.car_brand=car_brand
    this.car_model=car_model
    this.price=price
    this.CompanyIdea=function(){
        return "we make e cars"
    }
}

c1=new Car("tesla","model 3",35000)
console.log(c1.car_brand)
console.log(c1.CompanyIdea())


