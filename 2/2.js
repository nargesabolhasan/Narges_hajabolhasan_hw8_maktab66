class Circle{
    PI=3.14159
    r
    constructor (radius){
        this.radius=radius
    }
    getArea(){
        return this.radius**2*this.PI
       }
       getPerimeter(){
        return this.radius*this.PI*2
    }
}
let circy=new Circle(11)
let circy2=new Circle(4.44)
console.log(circy.getArea())
console.log(circy2.getPerimeter())
