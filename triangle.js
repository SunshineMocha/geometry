//Metodo 1. Veloce, ma tiene in memoria troppi dati.
class Triangle{ 
    constructor (pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;

        this.segmentAB = new Segment(this.pointA, this.pointB);
        this.segmentBC = new Segment(this.pointB, this.pointC);
        this.segmentCA = new Segment(this.pointC, this.pointA);
    }
    static fromAngleToAngle(xA, yA, xB, yB, xC, yC){ 
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        const pointC = new Point(xC, yC);
        return new Triangle(pointA, pointB, pointC);
    }
    get perimeter(){
        let perimeter;
        perimeter = this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
        return perimeter.toFixed(2);
    }
    get semiPerimeter(){
        return this.perimeter / 2;
    }
    get area(){
        let area;
        let semiOfA = this.semiPerimeter - this.segmentAB.length; 
        let semiOfB = this.semiPerimeter - this.segmentBC.length; 
        let semiOfC = this.semiPerimeter - this.segmentCA.length; 
        let product = this.semiPerimeter * semiOfA * semiOfB * semiOfC;
        area = Math.sqrt(product);
        return area.toFixed(2);
    }
}

// Metodo 2. Tiene i segmenti e non li deve calcolare, ma neanche i punti vengono cercati, sono già passati nel costruttore. Non usa memoria.
// class Triangle2{
//     constructor(pointA, pointB, pointC){
//         const segmentAB = new Segment(this.pointA, this.pointB);
//         const segmentBC = new Segment(this.pointB, this.pointC);
//         const segmentCA = new Segment(this.pointC, this.pointA);
//     }

//     get pointA(){
//         return this.segmentAB.pointA;
//     }

//     get pointB(){
//         return this.segmentBC.pointB;
//     }

//     get pointC(){
//         return this.segmentCA.pointC;
//     }

// }

// // Metodo 3. Migliore per creare più triangoli. Appena più veloce di 2
// class Triangle3{
//     constructor(pointA, pointB, pointC){
//         this.pointA = pointA;
//         this.pointB = pointB;
//         this.pointC = pointC;
//     }
//     get segmentAB(){
//         return new Segment(this.pointA, this.pointB);
//     }

//     get segmentBC(){
//         return new Segment(this.pointB, this.pointC);
//     }

//     get segmentCA(){
//         return new Segment(this.pointC, this.pointA);
//     }
// }