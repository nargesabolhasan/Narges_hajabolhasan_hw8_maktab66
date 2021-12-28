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