class Point {
  public x: number = 1;
  public y: number = 2;
  constructor(){

  }

  sumar(x:number, y:number){
    return x+y;
  }


}

const pt = new Point();
console.log('x ' + pt.x);
console.log('y ' + pt.y);

pt.x = 2;
pt.y = 6;

console.log('la suma 2+5 = ' + pt.sumar(2,5));


