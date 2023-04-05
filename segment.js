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
    get length(){ // hypotenusa/segment lenght = √(deltaX²+deltaY²)
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;
        const squaredX = deltaX**2;
        const squaredY = deltaY**2;
        const squareSum = squaredX + squaredY;
        const length = Math.sqrt(squareSum);
        return length;
    }

    // quando usare get o funzione. a livello di funzionalità sono uguali
    // get e set vanno usati a tutti i costi quando ci sono le proprietà con underscore (esempio this._yob in repository programmazione oggetti), 
    // per evitare che le proprietà vengano sovrascritte dal main e da altre funzioni. È un segno/consiglio per altri programmatori di non toccarla.
    // get length{ return this._length} // set length(value){}
    // altro modo di usare le get, quando io ho una funzione che in verita sembra piu una proprietà le get sono piu eleganti ma non c'è differenza. 
}