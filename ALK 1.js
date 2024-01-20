// Napisz klasę Point, która ma pola x i y ustawiane na podstawie argumentów
// przekazywanych w konstruktorze. Klasa Point powinna mieć metodę plus, która
// przyjmuje obiekt typu Point jako argument. Metoda plus zwraca nowy obiekt klasy
// Point, którego pole x jest sumą wartości x obu obiektów, a pole y sumą wartości y
// obu obiektów.
// const pointA = new Point(1, 2);
// const pointB = new Point(2, 1);
// // wypisuje { x: 3, y: 3 } do konsoli
// console.log(pointA.plus(pointB));

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(point) {
        const x = this.x + point.x;
        const y = this.y + point.y;

        return new Point(x, y);
    }
}

const p1 = new Point(2, 5);
const p2 = new Point(4, 10);
const p3 = p1.plus(p2);
