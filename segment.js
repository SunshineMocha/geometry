class Segment{ // dichiarazione classe segmento
    constructor (pointA, pointB){ // costruttore per le coordinate dei due punti inizio-fine
        this.pointA = pointA;
        this.pointB = pointB;
    }
    static fromPointsCoordinates(xA, yA, xB, yB){ // Factory (da ing Fabrica. Fabbrica dei segmenti)
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        return new Segment(pointA, pointB);
    }

    get Lenght(params){ // hypotenusa/segment lenght = √(deltaX²+deltaY²)
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;
        const squaredX = deltaX**2;
        const squaredY = deltaY**2;
        const squareSum = squaredX + squaredY;
        const hypotenusa = Math.sqrt(squareSum);
        return hypotenusa;
    }
}