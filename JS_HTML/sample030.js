var Car= {
    brand : "tesla",
    CompanyIdea:function(){
        return "we make e cars"    
    }
}
Car.fuel="electric"
delete Car.brand
console.log(Car.brand)
console.log(Car.fuel)