// const point1 = new Point(1, 1); // dichiarazioni delle coordinate tramite classe
// const point2 = new Point(4, 5);
// console.log(point1); // stampa delle coordinate come oggetto
// console.log(point2);

// const segment1 = new Segment(point1, point2)

// console.log(segment1);

// non sarebbe figo avere un segment a cui do le coordinate di punto a e punto b senza dichiarare punti ogni volta? Mi serve una static fromPointsCoordinates
// const segment2 = Segment.fromPointsCoordinates(2, 5, 5, 2);

// console.log(segment2);

// console.log(segment2.calculateLength());


/*  COMPITI  */

const triangle1 = Triangle.fromAngleToAngle(0, 0, 4, 0, 0, 3);
console.log(triangle1.perimeter);
console.log(triangle1.area);