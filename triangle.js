class Triangle{ 
    constructor (pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    static fromAngleToAngle(xA, yA, xB, yB, xC, yC){ 
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        const pointC = new Point(xC, yC);
        return new Triangle(pointA, pointB, pointC);
    }
    get perimeter(){
        let perimeter;
        const segmentA = new Segment(this.pointA, this.pointB);
        const segmentB = new Segment(this.pointB, this.pointC);
        const segmentC = new Segment(this.pointC, this.pointA);
        perimeter = segmentA.length + segmentB.length + segmentC.length;
        return perimeter.toFixed(3);
    }
    get area(){
        let area;
        const a = new Segment(this.pointA, this.pointB).length;
        const b = new Segment(this.pointB, this.pointC).length;
        const c = new Segment(this.pointC, this.pointA).length;
        let perimeter = a + b + c;
        let semiPerimeter = perimeter / 2;
        let semiA = semiPerimeter - a; 
        let semiB = semiPerimeter - b; 
        let semiC = semiPerimeter - c; 
        let multi = semiPerimeter * semiA * semiB * semiC;
        area = Math.sqrt(multi);
        return area.toFixed(3);
    }
}

// Point constructor (x,y)
// Segment constructor (pointA, pointB)
// static fromPointsCoordinates(xA, yA, xB, yB)
// get length()
