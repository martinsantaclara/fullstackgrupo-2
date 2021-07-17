var Point = /** @class */ (function () {
    function Point() {
        this.x = 1;
        this.y = 2;
    }
    Point.prototype.sumar = function (x, y) {
        return x + y;
    };
    return Point;
}());
var pt = new Point();
console.log('x ' + pt.x);
console.log('y ' + pt.y);
pt.x = 2;
pt.y = 6;
console.log('la suma 2+5 = ' + pt.sumar(2, 5));
