function calculateArea(side1,side2,side3){
    //calculate semiperimeter
    let semiPerimeter = (side1 + side2 + side3)/2;

    //calculate the area
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    return area
}